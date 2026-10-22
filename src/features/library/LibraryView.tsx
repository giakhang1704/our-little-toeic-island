import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Question, StudyPack, TOEICPart } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import { parsePart5PlainText } from '../../content/importers/textImporter';
import { importPackDirect, parseAndValidateStudyPackZip } from '../../content/importers/packZipImporter';
import {
  convertDraftsToQuestions,
  extractTextFromPDF,
  suggestQuestionsFromRawText,
  SuggestedQuestionDraft,
} from '../../content/importers/pdfImporter';
import { downloadJsonFile } from '../../content/exporters/backupExporter';

export const LibraryView: React.FC = () => {
  const [packs, setPacks] = useState<StudyPack[]>([]);
  const [activeTab, setActiveTab] = useState<'packs' | 'text_import' | 'pdf_import'>('packs');

  // Text Import state
  const [rawText, setRawText] = useState('');
  const [textPackTitle, setTextPackTitle] = useState('Bộ đề Part 5 mới');
  const [textImportLog, setTextImportLog] = useState<{ errors: string[]; count: number } | null>(null);

  // PDF Import state
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isProcessingPdf, setIsProcessingPdf] = useState(false);
  const [pdfDrafts, setPdfDrafts] = useState<SuggestedQuestionDraft[]>([]);
  const [pdfPackTitle, setPdfPackTitle] = useState('Đề trích xuất từ PDF');
  const [pdfError, setPdfError] = useState<string | null>(null);

  // ZIP Import state
  const [zipError, setZipError] = useState<string | null>(null);
  const [zipSuccess, setZipSuccess] = useState<string | null>(null);

  const loadPacks = async () => {
    const list = await repository.getAllStudyPacks();
    setPacks(list);
  };

  useEffect(() => {
    loadPacks();
  }, []);

  // Handle Quick Part 5 Text Import
  const handleImportText = async () => {
    if (!rawText.trim()) return;
    soundFx.playSoftPop();

    const newPackId = `pack-txt-${Date.now()}`;
    const result = parsePart5PlainText(rawText, newPackId);

    if (result.questions.length === 0) {
      setTextImportLog({ errors: ['Không tìm thấy câu hỏi hợp lệ nào trong văn bản đã nhập.'], count: 0 });
      return;
    }

    const newPack: StudyPack = {
      id: newPackId,
      title: textPackTitle || 'Bộ đề Part 5 mới',
      description: 'Nhập từ văn bản Part 5',
      sourceLabel: 'Text Importer',
      partsIncluded: [5],
      questionCount: result.questions.length,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      schemaVersion: '1.0.0',
    };

    await importPackDirect(newPack, [], result.questions);
    soundFx.playSuccessChime();
    confetti({ particleCount: 40, spread: 60 });
    setTextImportLog({ errors: result.errors, count: result.questions.length });
    setRawText('');
    await loadPacks();
  };

  // Handle PDF Upload & Assisted Extraction
  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPdfFile(file);
    setIsProcessingPdf(true);
    setPdfError(null);

    try {
      const pages = await extractTextFromPDF(file);
      const combinedText = pages.map((p) => p.text).join('\n');
      const drafts = suggestQuestionsFromRawText(combinedText);

      if (drafts.length === 0) {
        setPdfError('Không thể tự động nhận diện câu hỏi từ PDF này. Tài liệu có thể là ảnh scan.');
      } else {
        setPdfDrafts(drafts);
        soundFx.playSuccessChime();
      }
    } catch (err) {
      setPdfError(`Lỗi khi đọc file PDF: ${(err as Error).message}`);
    } finally {
      setIsProcessingPdf(false);
    }
  };

  // Save approved PDF drafts into library
  const handleSavePdfPack = async () => {
    if (pdfDrafts.length === 0) return;
    soundFx.playSoftPop();

    const packId = `pack-pdf-${Date.now()}`;
    const finalQuestions = convertDraftsToQuestions(pdfDrafts, packId);

    const newPack: StudyPack = {
      id: packId,
      title: pdfPackTitle || 'Đề trích xuất từ PDF',
      description: `Đã duyệt ${finalQuestions.length} câu hỏi trích xuất từ tài liệu PDF.`,
      sourceLabel: 'PDF Assisted Import',
      partsIncluded: [5],
      questionCount: finalQuestions.length,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      schemaVersion: '1.0.0',
    };

    await importPackDirect(newPack, [], finalQuestions);
    soundFx.playSuccessChime();
    confetti({ particleCount: 50, spread: 70 });
    setPdfDrafts([]);
    setPdfFile(null);
    setActiveTab('packs');
    await loadPacks();
  };

  // Handle Stage A ZIP Import
  const handleZipUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setZipError(null);
    setZipSuccess(null);
    soundFx.playSoftPop();

    const report = await parseAndValidateStudyPackZip(file);
    if (!report.success || !report.pack) {
      setZipError(report.errors.join(' | '));
      return;
    }

    soundFx.playSuccessChime();
    confetti({ particleCount: 40, spread: 60 });
    setZipSuccess(`Đã nhập thành công bộ đề "${report.pack.title}" (${report.questionsCount} câu hỏi)!`);
    await loadPacks();
  };

  // Export a single study pack
  const handleExportPack = async (pack: StudyPack) => {
    soundFx.playSoftPop();
    const questions = await repository.getQuestionsByPack(pack.id);
    const groups = (await repository.getAllGroups()).filter((g) => g.packId === pack.id);

    const packData = {
      manifest: pack,
      groups,
      questions,
    };

    downloadJsonFile(
      JSON.stringify(packData, null, 2),
      `toeic-pack-${pack.id}.json`
    );
  };

  // Delete pack
  const handleDeletePack = async (packId: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa bộ đề này khỏi thư viện?')) {
      soundFx.playSoftPop();
      await repository.deleteStudyPack(packId);
      await loadPacks();
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Top Header Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-4xl p-3 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-100">
            📚
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">Kho Bài Học & Nhập Đề</h2>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              Quản lý các bộ đề TOEIC, nhập nhanh qua văn bản, file ZIP cấu trúc hoặc trích xuất từ PDF
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
          <button
            onClick={() => setActiveTab('packs')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'packs'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📦 Bộ Đề ({packs.length})
          </button>
          <button
            onClick={() => setActiveTab('text_import')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'text_import'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ✏️ Nhập Nhanh Part 5
          </button>
          <button
            onClick={() => setActiveTab('pdf_import')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pdf_import'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📑 Trích Xuất Từ PDF
          </button>
        </div>
      </div>

      {/* TAB 1: STUDY PACKS LIST */}
      {activeTab === 'packs' && (
        <div className="space-y-6">
          {/* Quick ZIP Upload Card */}
          <div className="bg-sky-50/70 p-5 rounded-3xl border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sky-950 text-sm">
                📦 Nhập Bộ Đề Cấu Trúc (ZIP hoặc JSON)
              </h4>
              <p className="text-xs text-sky-800 mt-0.5">
                Nhập file zip chứa manifest.json và questions.json theo chuẩn định dạng Stage A
              </p>
            </div>
            <label className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow cursor-pointer transition-colors shrink-0">
              <span>Chọn file ZIP / JSON</span>
              <input
                type="file"
                accept=".zip,.json"
                onChange={handleZipUpload}
                className="hidden"
              />
            </label>
          </div>

          {zipError && (
            <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-200 text-xs">
              ⚠️ {zipError}
            </div>
          )}
          {zipSuccess && (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-xs font-bold">
              ✨ {zipSuccess}
            </div>
          )}

          {/* Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                      {pack.sourceLabel}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {pack.questionCount} câu hỏi
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-800 text-base mb-1">
                    {pack.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pack.partsIncluded.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        Part {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleExportPack(pack)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5"
                  >
                    <span>⬇ Xuất JSON</span>
                  </button>

                  <button
                    onClick={() => handleDeletePack(pack.id)}
                    className="text-xs font-bold text-red-500 hover:text-red-700 px-2 py-1"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: QUICK PART 5 TEXT IMPORTER */}
      {activeTab === 'text_import' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              Nhập Nhanh Part 5 Bằng Định Dạng Văn Bản Thuần
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Bạn có thể dán danh sách câu hỏi Part 5 từ tài liệu, hệ thống sẽ tự động tách câu hỏi, đáp án (A, B, C, D), Key và Lời giải.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tên bộ đề mới:
            </label>
            <input
              type="text"
              value={textPackTitle}
              onChange={(e) => setTextPackTitle(e.target.value)}
              className="w-full text-xs font-semibold p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
              placeholder="VD: Đề Ôn Tập Part 5 Tuần 1"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Nội dung câu hỏi:
              </label>
              <button
                onClick={() =>
                  setRawText(
                    `101. The team completed the proposal ______ before the deadline.\n(A) success\n(B) successful\n(C) successfully\n(D) succeed\nKey: C\nExplanation: Cần trạng từ bổ nghĩa cho động từ completed.\nTags: Word Form, Adverb\n\n102. Mr. Gomez was praised for his ______ contribution to the project.\n(A) value\n(B) valuable\n(C) valuably\n(D) valuation\nKey: B\nExplanation: Đứng trước danh từ contribution cần tính từ valuable.`
                  )
                }
                className="text-[11px] font-bold text-sky-600 hover:text-sky-800"
              >
                + Điền mẫu thử
              </button>
            </div>
            <textarea
              rows={12}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              className="w-full text-xs font-mono p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
              placeholder={`101. Sentence with blank ______ here.\n(A) Choice A\n(B) Choice B\n(C) Choice C\n(D) Choice D\nKey: A\nExplanation: Lời giải thích...`}
            />
          </div>

          {textImportLog && (
            <div
              className={`p-4 rounded-2xl border text-xs space-y-1 ${
                textImportLog.count > 0
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}
            >
              <div className="font-bold">
                {textImportLog.count > 0
                  ? `✨ Đã tạo thành công bộ đề với ${textImportLog.count} câu hỏi!`
                  : '⚠️ Nhập thất bại'}
              </div>
              {textImportLog.errors.map((err, idx) => (
                <div key={idx}>• {err}</div>
              ))}
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleImportText}
              disabled={!rawText.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors"
            >
              Xác Nhận Nhập Vào Thư Viện →
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: STAGE B ASSISTED PDF IMPORT */}
      {activeTab === 'pdf_import' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              Trích Xuất Hỗ Trợ Từ File PDF (Stage B)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tải tài liệu PDF lên. Hệ thống sẽ bóc tách văn bản, gợi ý phân chia câu hỏi và cho phép bạn xem lại, chỉnh sửa đáp án trước khi lưu vào thư viện.
            </p>
          </div>

          {/* Upload Dropzone */}
          <div className="border-2 border-dashed border-slate-300 hover:border-sky-400 rounded-3xl p-8 text-center bg-slate-50/60 transition-colors">
            <span className="text-4xl block mb-2">📄</span>
            <label className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow cursor-pointer transition-colors inline-block">
              <span>{isProcessingPdf ? 'Đang trích xuất văn bản...' : 'Tải file PDF lên'}</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                disabled={isProcessingPdf}
                className="hidden"
              />
            </label>
            <p className="text-[11px] text-slate-400 mt-2">
              Hỗ trợ file PDF có text layer (ETS, sách đề, tài liệu bài tập)
            </p>
          </div>

          {pdfError && (
            <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-200 text-xs">
              ⚠️ {pdfError}
            </div>
          )}

          {/* Drafts Review Table */}
          {pdfDrafts.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Gợi ý trích xuất ({pdfDrafts.length} câu)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Kiểm tra và chỉnh sửa Key đáp án nếu cần:
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={pdfPackTitle}
                    onChange={(e) => setPdfPackTitle(e.target.value)}
                    className="text-xs font-semibold p-2 border border-slate-200 rounded-xl"
                    placeholder="Tên bộ đề"
                  />
                  <button
                    onClick={handleSavePdfPack}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-colors"
                  >
                    Lưu {pdfDrafts.filter((d) => d.isApproved).length} câu vào Thư Viện →
                  </button>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {pdfDrafts.map((draft, idx) => (
                  <div
                    key={draft.tempId}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-700">
                        Câu {draft.originalNumber || idx + 1}:
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Đáp án đúng:</span>
                        <select
                          value={draft.suggestedKey}
                          onChange={(e) => {
                            const newDrafts = [...pdfDrafts];
                            newDrafts[idx].suggestedKey = e.target.value;
                            setPdfDrafts(newDrafts);
                          }}
                          className="bg-white border border-slate-200 font-bold px-2 py-0.5 rounded-lg text-emerald-700"
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                    </div>

                    <p className="text-slate-800 font-medium">{draft.prompt}</p>

                    <div className="grid grid-cols-2 gap-2 text-slate-600">
                      {draft.choices.map((c) => (
                        <div key={c.letter}>
                          <span className="font-bold">({c.letter})</span> {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
