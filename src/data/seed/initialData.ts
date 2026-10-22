import { READING_191026_PACK } from './reading191026';
import { EXTRA_REWARDS } from './rewardCatalog';
import { GRAMMAR_TOPIC_PACKS } from './grammarTopics';
import {
  DecorationCatalogItem,
  PersonalMessage,
  Question,
  QuestionGroup,
  StudyPack,
  UserSettings,
} from '../../domain/types';

export const DEFAULT_SETTINGS: UserSettings = {
  learnerName: 'Em yêu',
  partnerName: 'Anh',
  soundEnabled: true,
  reducedMotion: false,
  dailyReviewCap: 15,
  dailyQuestionGoal: 10,
  targetScore: 800,
  audioPlaybackSpeed: 1.0,
};

export const DECORATION_CATALOG: DecorationCatalogItem[] = [
  ...EXTRA_REWARDS,
  {
    itemId: 'sakura-tree',
    name: 'Cây Hoa Anh Đào',
    description: 'Cây anh đào rực rỡ mang làn gió mùa xuân đến cho đảo.',
    price: 25,
    icon: '🌸',
    category: 'nature',
  },
  {
    itemId: 'wooden-bench',
    name: 'Ghế Gỗ Dưới Tán Cây',
    description: 'Nơi lý tưởng để đọc sách TOEIC và ngắm sóng biển.',
    price: 15,
    icon: '🪵',
    category: 'furniture',
  },
  {
    itemId: 'stone-lantern',
    name: 'Đèn Đá Rêu Phong',
    description: 'Ngọn đèn đá ấm áp thắp sáng lối đi vào vườn lúc hoàng hôn.',
    price: 20,
    icon: '🏮',
    category: 'light',
  },
  {
    itemId: 'beach-parasol',
    name: 'Dù Bãi Biển & Ghế Nằm',
    description: 'Tận hưởng làn gió mát lành sau những giờ học căng thẳng.',
    price: 30,
    icon: '⛱️',
    category: 'special',
  },
  {
    itemId: 'cat-tower',
    name: 'Tháp Leo Cho Mochi',
    description: 'Mochi rất thích trèo lên đây để quan sát toàn bộ hòn đảo.',
    price: 35,
    icon: '🐾',
    category: 'special',
  },
  {
    itemId: 'campfire',
    name: 'Đốm Lửa Trại Ấm Áp',
    description: 'Ánh lửa bập bùng xua tan mệt mỏi sau ngày dài.',
    price: 18,
    icon: '🔥',
    category: 'light',
  },
  {
    itemId: 'flower-bed',
    name: 'Vườn Hoa Tulip Đủ Màu',
    description: 'Những bông tulip rực rỡ tưới bằng những giọt nước chuyên cần.',
    price: 12,
    icon: '🌷',
    category: 'nature',
  },
  {
    itemId: 'fairy-lights',
    name: 'Dây Đèn Đom Đóm',
    description: 'Những bóng đèn vàng nhỏ lung linh quấn quanh hàng rào.',
    price: 16,
    icon: '✨',
    category: 'light',
  },
];

export const INITIAL_MESSAGES: PersonalMessage[] = [
  {
    id: 'msg-welcome',
    title: 'Chào mừng em đến với Hòn Đảo TOEIC! 🏝️',
    senderName: 'Anh',
    date: 'Hôm nay',
    content:
      'Chào em yêu! Hòn đảo nhỏ này là món quà anh làm riêng cho em. Mỗi ngày cùng anh ghé thăm đảo, chăm sóc Mochi, làm vài câu hỏi TOEIC và tưới nước cho cây nhé. Mục tiêu 800+ TOEIC nằm ngay trong tầm tay em!',
    unlockCondition: { type: 'default', threshold: 0 },
    isUnlocked: true,
    isRead: false,
  },
  {
    id: 'msg-drops-20',
    title: 'Cột mốc 20 giọt nước chuyên cần! 💧',
    senderName: 'Anh',
    date: 'Mở khóa khi đạt 20 giọt nước',
    content:
      'Tuyệt vời quá! Em đã thu thập được 20 giọt nước đầu tiên rồi. Sự kiên trì mỗi ngày chính là chìa khóa lớn nhất. Tối nay anh sẽ thưởng em một ly trà sữa hoặc món em thích nhất nhé!',
    unlockCondition: { type: 'drops', threshold: 20 },
    isUnlocked: false,
    isRead: false,
  },
  {
    id: 'msg-drops-50',
    title: 'Nửa chặng đường rực rỡ - 50 giọt nước! 🌸',
    senderName: 'Anh',
    date: 'Mở khóa khi đạt 50 giọt nước',
    content:
      '50 giọt nước rồi nè! Vườn cây của em đang nở hoa rực rỡ rồi đó. Nhìn em chăm chỉ học mỗi ngày anh tự hào lắm. Cuối tuần này mình cùng đi xem phim và ăn tối xả hơi nhé!',
    unlockCondition: { type: 'drops', threshold: 50 },
    isUnlocked: false,
    isRead: false,
  },
  {
    id: 'msg-mastery',
    title: 'Khen thưởng chuyên gia 800+ TOEIC! 🏆',
    senderName: 'Anh',
    date: 'Mở khóa khi đạt 100 giọt nước',
    content:
      'Chúc mừng em yêu! Tinh thần học tập và phản xạ TOEIC của em đã tiến bộ vượt bậc rồi. Anh luôn tin tưởng vào em và sẽ luôn ở cạnh đồng hành cùng em. Yêu em rất nhiều!',
    unlockCondition: { type: 'drops', threshold: 100 },
    isUnlocked: false,
    isRead: false,
  },
];

export const STARTER_STUDY_PACK: StudyPack = {
  id: 'pack-starter-all-parts',
  title: 'Bộ Đề Khởi Động Chuẩn TOEIC (Part 5, 6 & 7)',
  description: 'Bộ câu hỏi chuẩn định dạng ETS mới nhất về Reading (Part 5, 6, 7) kèm giải thích chi tiết tiếng Việt. Phần Listening sẽ được cập nhật sớm.',
  sourceLabel: 'ETS Authentic Practice',
  partsIncluded: [5, 6, 7],
  questionCount: 10,
  createdAt: Date.now() - 86400000,
  updatedAt: 1761160000000,
  schemaVersion: '1.0.0',
};

export const CAT_MAIL_PACK: StudyPack = {
  id: 'pack-cat-mail-part5',
  title: 'Thư Cho Mèo - Luyện Nhanh Part 5',
  description: 'Bộ câu hỏi chọn lọc ngữ pháp và từ vựng trọng điểm Part 5 dành riêng cho minigame Thư Cho Mèo.',
  sourceLabel: 'Island Cat Post Office',
  partsIncluded: [5],
  questionCount: 10,
  createdAt: Date.now() - 86400000 * 2,
  updatedAt: Date.now(),
  schemaVersion: '1.0.0',
};

// Groups for Part 6, 7
export const STARTER_GROUPS: QuestionGroup[] = [
  {
    id: 'group-part6-1',
    packId: 'pack-starter-all-parts',
    part: 6,
    passageTitle: 'Email thông báo nâng cấp hệ thống máy chủ (Questions 131-134)',
    passageText:
      'To: All Employees <all@novasolutions.com>\n' +
      'From: IT Support Department <it@novasolutions.com>\n' +
      'Date: October 20\n' +
      'Subject: Scheduled System Maintenance\n\n' +
      'Please be advised that our primary database server will undergo scheduled maintenance this Saturday from 10:00 P.M. to 3:00 A.M. ' +
      'During this period, access to internal files and client portals will be [131] unavailable. ' +
      'We strongly advise all personnel to save their current work before leaving the office on Friday afternoon. [132]. ' +
      'The purpose of this upgrade is to enhance data security and increase processing speed for our accounting software. ' +
      'We appreciate your cooperation and patience as we work to [133] our digital infrastructure. ' +
      'Should you have any questions or require urgent data retrieval over the weekend, please contact the IT emergency helpline [134] it-emergency@novasolutions.com.\n\n' +
      'Sincerely,\n' +
      'IT Department',
    questionIds: ['q-p6-1', 'q-p6-2', 'q-p6-3', 'q-p6-4'],
    order: 3,
  },
  {
    id: 'group-part7-1',
    packId: 'pack-starter-all-parts',
    part: 7,
    passageTitle: 'Đoạn văn kép: Thông báo tuyển dụng & Email ứng tuyển (Questions 176-178)',
    passageDocuments: [
      {
        label: 'Tài liệu 1: Thông báo tuyển dụng',
        text:
          'POSITION OPENING: Senior Graphic Designer\n' +
          'Organization: Horizon Media Studio\n' +
          'Location: Da Nang City (Hybrid option available)\n\n' +
          'Job Overview:\n' +
          'We are seeking a talented Senior Graphic Designer with at least 4 years of commercial experience in brand identity and digital marketing campaigns. ' +
          'The ideal candidate must be proficient in Adobe Creative Cloud (Illustrator, Photoshop, InDesign) and demonstrate strong teamwork skills. ' +
          'Fluency in English is required as you will collaborate with international clients. Knowledge of motion graphics is an advantage.\n\n' +
          'To apply: Send your resume and online portfolio link to jobs@horizonmedia.vn by November 15.',
      },
      {
        label: 'Tài liệu 2: Email từ ứng viên',
        text:
          'To: jobs@horizonmedia.vn\n' +
          'From: Linh Nguyen <linh.nguyen@email.com>\n' +
          'Date: November 3\n' +
          'Subject: Application for Senior Graphic Designer Position\n\n' +
          'Dear Hiring Manager,\n' +
          'I am writing to express my strong interest in the Senior Graphic Designer opening advertised on your website. ' +
          'For the past five years, I have worked as a Lead Visual Specialist at Artline Agency, where I managed branding projects for tech startups across Singapore and Japan. ' +
          'My portfolio at www.linh-designs.com demonstrates my expertise in vector illustration and motion graphics.\n\n' +
          'I have attached my curriculum vitae for your consideration. I look forward to the possibility of discussing how my background aligns with your creative team.\n\n' +
          'Best regards,\n' +
          'Linh Nguyen',
      },
    ],
    questionIds: ['q-p7-1', 'q-p7-2', 'q-p7-3'],
    order: 4,
  },
];

export const STARTER_QUESTIONS: Question[] = [
  // Part 5: Incomplete Sentences
  {
    id: 'q-p5-1',
    packId: 'pack-starter-all-parts',
    part: 5,
    prompt: 'Ms. Tanaka asked the engineering team to review the blueprint ______ before submitting it to the city inspector.',
    choices: [
      { id: 'c1', text: 'care' },
      { id: 'c2', text: 'careful' },
      { id: 'c3', text: 'carefully' },
      { id: 'c4', text: 'carefulness' },
    ],
    correctChoiceId: 'c3',
    explanation: 'Vị trí cần một trạng từ (Adverb) để bổ nghĩa cho động từ "review". Chọn "carefully" (một cách cẩn thận).',
    topicTags: ['Part 5', 'Word Form', 'Adverb'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
    originalNumber: 101,
  },
  {
    id: 'q-p5-2',
    packId: 'pack-starter-all-parts',
    part: 5,
    prompt: 'The conference organizers announced that lunch will be served ______ the Grand Ballroom on the third floor.',
    choices: [
      { id: 'c1', text: 'in' },
      { id: 'c2', text: 'onto' },
      { id: 'c3', text: 'between' },
      { id: 'c4', text: 'through' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Giới từ chỉ vị trí bên trong phòng/hội trường lớn dùng "in" (in the Grand Ballroom).',
    topicTags: ['Part 5', 'Preposition', 'Grammar'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
    originalNumber: 102,
  },
  {
    id: 'q-p5-3',
    packId: 'pack-starter-all-parts',
    part: 5,
    prompt: '______ the heavy rainfall yesterday, the outdoor charity marathon proceeded as scheduled.',
    choices: [
      { id: 'c1', text: 'Although' },
      { id: 'c2', text: 'Despite' },
      { id: 'c3', text: 'Because' },
      { id: 'c4', text: 'Unless' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Theo sau là cụm danh từ "the heavy rainfall yesterday", mang nghĩa tương phản (mặc dù). Dùng giới từ "Despite" (+ Noun Phrase). "Although" phải đi với mệnh đề (S + V).',
    topicTags: ['Part 5', 'Conjunction', 'Preposition'],
    difficulty: 'medium',
    allowsChoiceShuffle: true,
    originalNumber: 103,
  },

  // Part 6: Text Completion
  {
    id: 'q-p6-1',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part6-1',
    part: 6,
    prompt: 'Select the best answer for blank [131]:',
    choices: [
      { id: 'c1', text: 'temporary' },
      { id: 'c2', text: 'temporarily' },
      { id: 'c3', text: 'temporize' },
      { id: 'c4', text: 'temporariness' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Vị trí đứng trước tính từ "unavailable" để bổ nghĩa nên cần một phó từ: "temporarily unavailable" (tạm thời không truy cập được).',
    topicTags: ['Part 6', 'Word Form', 'Adverb'],
    difficulty: 'medium',
    allowsChoiceShuffle: false,
    originalNumber: 131,
  },
  {
    id: 'q-p6-2',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part6-1',
    part: 6,
    prompt: 'Select the best sentence for blank [132]:',
    choices: [
      { id: 'c1', text: 'This will prevent any accidental loss of unsaved changes.' },
      { id: 'c2', text: 'The cafeteria menu will be updated every Monday morning.' },
      { id: 'c3', text: 'New laptops have already been distributed to sales managers.' },
      { id: 'c4', text: 'Please submit your quarterly tax invoices promptly.' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Câu trước khuyên nhân viên lưu lại công việc trước khi rời văn phòng chiều thứ sáu. Câu nối tiếp phù hợp nhất về logic là giải thích lý do: "This will prevent any accidental loss..." (Điều này sẽ ngăn ngừa mất mát dữ liệu).',
    topicTags: ['Part 6', 'Sentence Insertion', 'Context'],
    difficulty: 'hard',
    allowsChoiceShuffle: false,
    originalNumber: 132,
  },
  {
    id: 'q-p6-3',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part6-1',
    part: 6,
    prompt: 'Select the best answer for blank [133]:',
    choices: [
      { id: 'c1', text: 'upgrade' },
      { id: 'c2', text: 'upgrading' },
      { id: 'c3', text: 'upgraded' },
      { id: 'c4', text: 'upgrades' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Cấu trúc "work to + V-infinitive" mang nghĩa nỗ lực để làm gì. Chọn động từ nguyên thể "upgrade".',
    topicTags: ['Part 6', 'Verb Form', 'Infinitive'],
    difficulty: 'easy',
    allowsChoiceShuffle: false,
    originalNumber: 133,
  },
  {
    id: 'q-p6-4',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part6-1',
    part: 6,
    prompt: 'Select the best answer for blank [134]:',
    choices: [
      { id: 'c1', text: 'at' },
      { id: 'c2', text: 'to' },
      { id: 'c3', text: 'with' },
      { id: 'c4', text: 'for' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Liên hệ qua địa chỉ email dùng giới từ "at": "contact ... at it-emergency@...".',
    topicTags: ['Part 6', 'Preposition', 'Vocabulary'],
    difficulty: 'easy',
    allowsChoiceShuffle: false,
    originalNumber: 134,
  },

  // Part 7: Reading Comprehension
  {
    id: 'q-p7-1',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part7-1',
    part: 7,
    prompt: 'What is mentioned as a requirement for the Senior Graphic Designer role?',
    choices: [
      { id: 'c1', text: 'A master\'s degree in computer science' },
      { id: 'c2', text: 'Fluency in English' },
      { id: 'c3', text: 'Ten years of leadership experience' },
      { id: 'c4', text: 'Residency in Da Nang City full-time' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Trong thông báo tuyển dụng ghi: "Fluency in English is required as you will collaborate with international clients."',
    topicTags: ['Part 7', 'Detail', 'Job Posting'],
    difficulty: 'easy',
    originalNumber: 176,
  },
  {
    id: 'q-p7-2',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part7-1',
    part: 7,
    prompt: 'In the email, what does Linh Nguyen indicate about her experience?',
    choices: [
      { id: 'c1', text: 'She recently graduated from art school.' },
      { id: 'c2', text: 'She has worked with clients in Singapore and Japan.' },
      { id: 'c3', text: 'She previously worked at Horizon Media Studio.' },
      { id: 'c4', text: 'She specializes exclusively in print book layouts.' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Trong thư Linh Nguyen viết: "...where I managed branding projects for tech startups across Singapore and Japan."',
    topicTags: ['Part 7', 'Detail', 'Email'],
    difficulty: 'medium',
    originalNumber: 177,
  },
  {
    id: 'q-p7-3',
    packId: 'pack-starter-all-parts',
    groupId: 'group-part7-1',
    part: 7,
    prompt: 'Why does Linh Nguyen believe she is well suited for the position?',
    choices: [
      { id: 'c1', text: 'She has experience with motion graphics mentioned as an advantage.' },
      { id: 'c2', text: 'She has managed over 50 employees.' },
      { id: 'c3', text: 'She has an existing contract with city inspectors.' },
      { id: 'c4', text: 'She is available to relocate immediately to Tokyo.' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Tài liệu 1 nêu: "Knowledge of motion graphics is an advantage" và ở Tài liệu 2 Linh nêu rõ: "My portfolio ... demonstrates my expertise in vector illustration and motion graphics."',
    topicTags: ['Part 7', 'Inference', 'Cross-document'],
    difficulty: 'hard',
    originalNumber: 178,
  },
];

// Dedicated Part 5 questions for "Mail for the Cat" Minigame
export const CAT_MAIL_QUESTIONS: Question[] = [
  {
    id: 'cat-q1',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'The manager requested that the final audit report be ______ by noon on Friday.',
    choices: [
      { id: 'c1', text: 'submit' },
      { id: 'c2', text: 'submitted' },
      { id: 'c3', text: 'submitting' },
      { id: 'c4', text: 'submission' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Cấu trúc bị động "be + past participle" (be submitted) vì chủ ngữ "the final audit report" là vật được nộp.',
    topicTags: ['Part 5', 'Passive Voice', 'Verb Form'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q2',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'All employees are ______ to attend the quarterly safety briefing in the auditorium.',
    choices: [
      { id: 'c1', text: 'required' },
      { id: 'c2', text: 'requiring' },
      { id: 'c3', text: 'require' },
      { id: 'c4', text: 'requirement' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Cụm từ quen thuộc trong TOEIC: "be required to do something" (được yêu cầu/bắt buộc làm gì).',
    topicTags: ['Part 5', 'Collocation', 'Passive Voice'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q3',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'The new express train line offers a more ______ commute for residents living in the suburbs.',
    choices: [
      { id: 'c1', text: 'convenience' },
      { id: 'c2', text: 'conveniently' },
      { id: 'c3', text: 'convenient' },
      { id: 'c4', text: 'convening' },
    ],
    correctChoiceId: 'c3',
    explanation: 'Cần một tính từ (Adjective) đứng sau "more" để bổ nghĩa cho danh từ "commute" (chuyến đi lại). Chọn "convenient".',
    topicTags: ['Part 5', 'Word Form', 'Adjective'],
    difficulty: 'medium',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q4',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'Neither the department supervisor ______ his assistants were aware of the schedule change.',
    choices: [
      { id: 'c1', text: 'or' },
      { id: 'c2', text: 'nor' },
      { id: 'c3', text: 'and' },
      { id: 'c4', text: 'but' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Cặp liên từ tương quan luôn đi liền: "Neither ... nor ..." (không ... cũng không ...).',
    topicTags: ['Part 5', 'Correlative Conjunctions', 'Grammar'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q5',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'Customers who purchase electronics online are eligible ______ free expedited shipping.',
    choices: [
      { id: 'c1', text: 'to' },
      { id: 'c2', text: 'for' },
      { id: 'c3', text: 'with' },
      { id: 'c4', text: 'about' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Cụm tính từ đi kèm giới từ: "be eligible for something" (đủ điều kiện hưởng cái gì). (Nếu đi với V thì là "eligible to do sth").',
    topicTags: ['Part 5', 'Preposition', 'Adjective Phrase'],
    difficulty: 'medium',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q6',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'Mr. Henderson presented his proposal so ______ that the board approved it without hesitation.',
    choices: [
      { id: 'c1', text: 'persuasive' },
      { id: 'c2', text: 'persuasion' },
      { id: 'c3', text: 'persuade' },
      { id: 'c4', text: 'persuasively' },
    ],
    correctChoiceId: 'c4',
    explanation: 'Cấu trúc "so + adv + that...". Trạng từ "persuasively" bổ nghĩa cho hành động "presented".',
    topicTags: ['Part 5', 'Word Form', 'Adverb'],
    difficulty: 'medium',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q7',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'The keynote speaker spoke ______ about the benefits of renewable energy in modern manufacturing.',
    choices: [
      { id: 'c1', text: 'enthusiastic' },
      { id: 'c2', text: 'enthusiastically' },
      { id: 'c3', text: 'enthusiasm' },
      { id: 'c4', text: 'enthusiast' },
    ],
    correctChoiceId: 'c2',
    explanation: 'Trạng từ "enthusiastically" (một cách nhiệt tình/đam mê) bổ nghĩa cho động từ "spoke".',
    topicTags: ['Part 5', 'Word Form', 'Adverb'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q8',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'Please verify that your contact information is ______ before proceeding to the checkout screen.',
    choices: [
      { id: 'c1', text: 'accurate' },
      { id: 'c2', text: 'accurately' },
      { id: 'c3', text: 'accuracy' },
      { id: 'c4', text: 'accurateness' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Sau động từ to-be "is" cần một tính từ vị ngữ: "accurate" (chính xác).',
    topicTags: ['Part 5', 'Word Form', 'Adjective'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q9',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'The company\'s stock price rose sharply ______ news of the international merger was leaked.',
    choices: [
      { id: 'c1', text: 'after' },
      { id: 'c2', text: 'during' },
      { id: 'c3', text: 'between' },
      { id: 'c4', text: 'despite of' },
    ],
    correctChoiceId: 'c1',
    explanation: 'Theo sau là một mệnh đề hoàn chỉnh "news of the international merger was leaked", do đó cần liên từ chỉ thời gian "after" (sau khi).',
    topicTags: ['Part 5', 'Conjunction', 'Grammar'],
    difficulty: 'medium',
    allowsChoiceShuffle: true,
  },
  {
    id: 'cat-q10',
    packId: 'pack-cat-mail-part5',
    part: 5,
    prompt: 'Participants are reminded to wear ______ badges at all times while inside the research facility.',
    choices: [
      { id: 'c1', text: 'they' },
      { id: 'c2', text: 'them' },
      { id: 'c3', text: 'their' },
      { id: 'c4', text: 'themselves' },
    ],
    correctChoiceId: 'c3',
    explanation: 'Cần tính từ sở hữu "their" đứng trước danh từ "badges" để chỉ thẻ của họ.',
    topicTags: ['Part 5', 'Pronoun', 'Possessive'],
    difficulty: 'easy',
    allowsChoiceShuffle: true,
  },
];

export const BUNDLED_PACKS = [
  ...GRAMMAR_TOPIC_PACKS,
  READING_191026_PACK,
  {
    pack: STARTER_STUDY_PACK,
    groups: STARTER_GROUPS,
    questions: STARTER_QUESTIONS,
  },
  {
    pack: CAT_MAIL_PACK,
    groups: [],
    questions: CAT_MAIL_QUESTIONS,
  },
];

