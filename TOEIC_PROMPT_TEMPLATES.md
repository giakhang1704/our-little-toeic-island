# Hướng Dẫn & Bộ Prompt Chuẩn Hóa Đề Thi TOEIC 🏝️

Tài liệu này chứa các mẫu Prompt chuẩn dùng cho các mô hình AI (ChatGPT, Claude, Gemini...) để chuyển đổi bất kỳ đề thi TOEIC nào (từ file PDF, hình ảnh chụp hoặc văn bản copy) thành định dạng chuẩn tương thích 100% với website **Our Little TOEIC Island**.

---

## MẪU 1: PROMPT TOÀN DIỆN (Chuẩn JSON cho mọi Part từ 1 đến 7)
> **Mục đích:** Dùng khi bạn có cả một bài thi đầy đủ gồm cả Listening (Part 1, 2, 3, 4) và Reading (Part 5, 6, 7). 
> **Kết quả:** Xuất ra file JSON chuẩn. Bạn chỉ cần gửi đoạn JSON đó cho AI trợ lý để nạp vào GitHub, hoặc tự tải lên tại mục **Kho Bài Học** → **Nhập file JSON** trên web.

### 📋 Đoạn Prompt cần sao chép (Copy toàn bộ khối bên dưới):

```markdown
Bạn là một chuyên gia khảo thí và biên soạn đề thi TOEIC chuẩn định dạng ETS mới nhất. 
Dưới đây là nội dung đề thi TOEIC tôi cung cấp (bài đọc, bài nghe, câu hỏi, đáp án). 

Nhiệm vụ của bạn: Hãy phân tích, trích xuất và chuyển đổi toàn bộ đề thi này sang định dạng JSON chuẩn dùng cho website luyện thi TOEIC theo đúng cấu trúc sau đây:

YÊU CẦU ĐỊNH DẠNG ĐẦU RA (CHỈ TRẢ VỀ DUY NHẤT ĐOẠN MÃ JSON HỢP LỆ, KHÔNG CÓ BẤT KỲ VĂN BẢN NÓI THÊM NÀO):

{
  "manifest": {
    "schemaVersion": "1.0.0",
    "id": "pack-[ten-de-viet-lien-khong-dau]",
    "title": "[Tên đầy đủ của bộ đề, ví dụ: ETS TOEIC Practice Test 01]",
    "description": "[Mô tả ngắn gọn về bộ đề]",
    "sourceLabel": "ETS Practice",
    "partsIncluded": [1, 2, 3, 4, 5, 6, 7],
    "questionCount": [Tổng số câu hỏi]
  },
  "groups": [
    // Dành cho các bài có chùm câu hỏi chung như Part 3, 4, 6, 7
    // Nếu là câu đơn như Part 5 thì để mảng này rỗng []
    {
      "id": "group-[id]",
      "packId": "pack-[ten-de-viet-lien-khong-dau]",
      "part": 3, // hoặc 4, 6, 7
      "passageTitle": "Tiêu đề đoạn văn hoặc ngữ cảnh đối thoại",
      "transcript": "Lời thoại tiếng Anh nếu là Listening Part 3, 4",
      "passageText": "Đoạn văn đọc nếu là Part 6",
      "passageDocuments": [
        // Dùng riêng nếu là Part 7 đoạn văn kép/ba
        { "label": "Tài liệu 1: Email", "text": "Nội dung tài liệu 1..." },
        { "label": "Tài liệu 2: Thông báo", "text": "Nội dung tài liệu 2..." }
      ],
      "questionIds": ["q-1", "q-2", "q-3"],
      "order": 1
    }
  ],
  "questions": [
    {
      "id": "q-[so-thu-tu]",
      "packId": "pack-[ten-de-viet-lien-khong-dau]",
      "groupId": "group-[id]", // để trống nếu là Part 5 câu đơn
      "part": 5, // từ 1 đến 7
      "prompt": "Nội dung câu hỏi (Ví dụ: The manager announced that ______)",
      "choices": [
        { "id": "c1", "text": "Đáp án A" },
        { "id": "c2", "text": "Đáp án B" },
        { "id": "c3", "text": "Đáp án C" },
        { "id": "c4", "text": "Đáp án D" }
      ],
      "correctChoiceId": "c1", // Phải khớp với id của đáp án đúng (c1, c2, c3 hoặc c4)
      "explanation": "Giải thích chi tiết bằng tiếng Việt: Tại sao chọn đáp án này, phân tích ngữ pháp, nghĩa của câu và từ vựng trọng tâm cần nhớ.",
      "topicTags": ["Chủ điểm ngữ pháp hoặc từ vựng, ví dụ: Word Form, Verb Tense, Preposition"],
      "difficulty": "medium", // 'easy', 'medium', hoặc 'hard'
      "allowsChoiceShuffle": true, // true đối với Part 5, false đối với Listening
      "originalNumber": 101 // Số thứ tự gốc của câu
    }
  ]
}

LƯU Ý QUAN TRỌNG:
1. "correctChoiceId" BẮT BUỘC phải khớp chính xác với ID của một trong các "choices" (c1, c2, c3, c4).
2. Lời giải thích "explanation" phải viết bằng tiếng Việt thật dễ hiểu, có tâm và chỉ rõ bẫy ngữ pháp.
3. Nếu có đoạn hội thoại hoặc bài nói Listening, hãy viết đầy đủ nội dung vào trường "transcript".

Dưới đây là nội dung đề thi của tôi:
[HÃY DÁN NỘI DUNG ĐỀ THI HOẶC TẢI ẢNH/PDF ĐỀ CỦA BẠN VÀO ĐÂY]
```

---

## MẪU 2: PROMPT SIÊU NHANH CHO PART 5 (Dán thẳng vào web không cần file)
> **Mục đích:** Dùng khi bạn muốn trích xuất nhanh 10–20 câu Part 5 để người yêu chơi minigame **"Thư Cho Mèo"** hoặc luyện phản xạ ngữ pháp nhanh. 
> **Cách dùng:** Sau khi AI xuất ra kết quả, bạn copy đoạn văn bản đó → vào web mục **Kho Bài Học** → bấm tab **Nhập Nhanh Part 5** → Dán vào và bấm **Xác nhận**.

### 📋 Đoạn Prompt cần sao chép (Copy toàn bộ khối bên dưới):

```markdown
Từ nội dung các câu hỏi TOEIC Part 5 tôi cung cấp dưới đây, hãy trích xuất và định dạng lại thành cấu trúc văn bản thuần theo mẫu chuẩn sau:

101. [Câu hỏi có chỗ trống ______ ]
(A) [Lựa chọn A]
(B) [Lựa chọn B]
(C) [Lựa chọn C]
(D) [Lựa chọn D]
Key: [Đáp án đúng: A, B, C hoặc D]
Explanation: [Giải thích chi tiết bằng tiếng Việt tại sao chọn đáp án này, phân tích ngữ pháp và dịch nghĩa câu]
Tags: [Chủ điểm, ví dụ: Word Form, Preposition, Conjunction]

102. ...

Yêu cầu:
- Giữ đúng định dạng các dòng `(A)`, `Key:`, `Explanation:`, `Tags:`.
- Lời giải thích viết bằng tiếng Việt dễ hiểu và xúc tích.

Dưới đây là các câu hỏi:
[DÁN CÁC CÂU HỎI VÀO ĐÂY]
```

---

## 🚀 Cách Cập Nhật Lên Web Sau Khi Có Kết Quả:

1. **Nếu dùng Mẫu 1 (JSON)**:
   - Cách A: Gửi đoạn JSON đó vào chat cho AI trợ lý để nạp thẳng vào code và tự động đẩy lên GitHub/Vercel.
   - Cách B: Lưu đoạn JSON vào một file có đuôi `.json`, mở web → vào **Kho Bài Học** → bấm **Chọn file ZIP / JSON** để nhập vào.
2. **Nếu dùng Mẫu 2 (Text Part 5)**:
   - Mở web → vào **Kho Bài Học** → chọn tab **Nhập Nhanh Part 5** → Dán đoạn text vào → Bấm **Xác Nhận Nhập Vào Thư Viện**.
