import type { StudyPack, QuestionGroup, Question } from '../../domain/types';

// User-provided grammar exercises, grouped by the original 11 topics.
// Preserve source explanations and editorial notes; namespace IDs across packs.
export const GRAMMAR_TOPIC_PACKS: { pack: StudyPack; groups: QuestionGroup[]; questions: Question[] }[] = [
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s01",
      "title": "Các thì",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 80,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-001",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "How many languages ------- John speak?",
        "choices": [
          {
            "id": "c1",
            "text": "do"
          },
          {
            "id": "c2",
            "text": "does"
          },
          {
            "id": "c3",
            "text": "did"
          },
          {
            "id": "c4",
            "text": "will"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: does. John số ít; hỏi khả năng ngôn ngữ nói chung dùng does + chủ ngữ + nguyên mẫu speak.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-002",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Hurry! The train ------- I don’t want to miss it.",
        "choices": [
          {
            "id": "c1",
            "text": "comes"
          },
          {
            "id": "c2",
            "text": "is coming"
          },
          {
            "id": "c3",
            "text": "came"
          },
          {
            "id": "c4",
            "text": "has come"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is coming. Hurry! báo hành động đang xảy ra: tàu đang đến, dùng is coming.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-003",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Angelina Jolie is a famous actress. She ------- in several films.",
        "choices": [
          {
            "id": "c1",
            "text": "appears"
          },
          {
            "id": "c2",
            "text": "is appearing"
          },
          {
            "id": "c3",
            "text": "appeared"
          },
          {
            "id": "c4",
            "text": "has appeared"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: has appeared. Kinh nghiệm xuất hiện trong phim tính đến hiện tại: has appeared, không nêu thời gian quá khứ đã kết thúc.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-004",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "What time ------- the next train leave?",
        "choices": [
          {
            "id": "c1",
            "text": "does"
          },
          {
            "id": "c2",
            "text": "will"
          },
          {
            "id": "c3",
            "text": "shall"
          },
          {
            "id": "c4",
            "text": "would"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: does. Lịch tàu cố định dùng hiện tại đơn; the next train số ít nên dùng does + leave.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-005",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Monica ------- with her sister at the moment until she finds a flat.",
        "choices": [
          {
            "id": "c1",
            "text": "stays"
          },
          {
            "id": "c2",
            "text": "is staying"
          },
          {
            "id": "c3",
            "text": "will stay"
          },
          {
            "id": "c4",
            "text": "is going to stay"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is staying. At the moment và until she finds a flat chỉ tình trạng ở tạm: is staying.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-006",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "By the end of next year, George ------- English for 2 years.",
        "choices": [
          {
            "id": "c1",
            "text": "will have learned"
          },
          {
            "id": "c2",
            "text": "will learn"
          },
          {
            "id": "c3",
            "text": "has leaned"
          },
          {
            "id": "c4",
            "text": "would learn"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: will have learned. By the end of next year là hạn tương lai; will have learned diễn tả đủ hai năm học vào lúc đó.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-007",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The man got out of the car, ------- round to the back and opened the boot.",
        "choices": [
          {
            "id": "c1",
            "text": "walking"
          },
          {
            "id": "c2",
            "text": "walked"
          },
          {
            "id": "c3",
            "text": "walks"
          },
          {
            "id": "c4",
            "text": "walk"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: walked. Got out, walked, opened là chuỗi hành động nối tiếp trong quá khứ; cần dạng walked song song.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-008",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "He will take the dog out for a walk as soon as he ------- dinner.",
        "choices": [
          {
            "id": "c1",
            "text": "finish"
          },
          {
            "id": "c2",
            "text": "finishes"
          },
          {
            "id": "c3",
            "text": "will finish"
          },
          {
            "id": "c4",
            "text": "shall have finished"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: finishes. Sau as soon as chỉ thời gian tương lai dùng hiện tại đơn; he số ít nên finishes, không dùng will finish.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-009",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She ------- English at RMIT these days.",
        "choices": [
          {
            "id": "c1",
            "text": "studies"
          },
          {
            "id": "c2",
            "text": "is studying"
          },
          {
            "id": "c3",
            "text": "will study"
          },
          {
            "id": "c4",
            "text": "is going to study"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is studying. These days nhấn mạnh hoạt động học trong giai đoạn hiện tại: is studying; không phải một mốc tương lai.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-010",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Robert ------- tomorrow morning on the 10: 30 train.",
        "choices": [
          {
            "id": "c1",
            "text": "arrived"
          },
          {
            "id": "c2",
            "text": "is arriving"
          },
          {
            "id": "c3",
            "text": "has arrived"
          },
          {
            "id": "c4",
            "text": "would arrive"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is arriving. Hiện tại tiếp diễn is arriving diễn tả kế hoạch đã sắp xếp cho chuyến tàu sáng mai.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-011",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Mike ------- one hour ago.",
        "choices": [
          {
            "id": "c1",
            "text": "phoned"
          },
          {
            "id": "c2",
            "text": "was phoning"
          },
          {
            "id": "c3",
            "text": "had phoned"
          },
          {
            "id": "c4",
            "text": "has phoned"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: phoned. One hour ago là mốc quá khứ đã kết thúc; dùng phoned, không dùng hiện tại hoàn thành.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-012",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Ask her to come and see me when she ------- her work.",
        "choices": [
          {
            "id": "c1",
            "text": "finish"
          },
          {
            "id": "c2",
            "text": "has finished"
          },
          {
            "id": "c3",
            "text": "finished"
          },
          {
            "id": "c4",
            "text": "finishing"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has finished. Mệnh đề when chỉ thời gian tương lai có thể dùng hiện tại hoàn thành has finished để nhấn mạnh hoàn tất việc rồi mới đến.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-013",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Oil ------- if you pour it on water",
        "choices": [
          {
            "id": "c1",
            "text": "floated"
          },
          {
            "id": "c2",
            "text": "floats"
          },
          {
            "id": "c3",
            "text": "will be floated"
          },
          {
            "id": "c4",
            "text": "float"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: floats. Sự thật chung dầu nổi trên nước dùng hiện tại đơn; oil số ít không đếm được nên floats.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-014",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "That dancing club ------- north of the city",
        "choices": [
          {
            "id": "c1",
            "text": "lays"
          },
          {
            "id": "c2",
            "text": "lies"
          },
          {
            "id": "c3",
            "text": "locates"
          },
          {
            "id": "c4",
            "text": "lain"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: lies. Lie nghĩa là nằm, tọa lạc; chủ ngữ số ít dùng lies. Lay cần tân ngữ; lain là quá khứ phân từ.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-015",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Almost everyone ------- for home by the time we arrived.",
        "choices": [
          {
            "id": "c1",
            "text": "leave"
          },
          {
            "id": "c2",
            "text": "left"
          },
          {
            "id": "c3",
            "text": "leaves"
          },
          {
            "id": "c4",
            "text": "had left"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had left. Việc rời đi hoàn tất trước khi chúng tôi đến: had left, quá khứ hoàn thành.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-016",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "While her husband was in the army, Janet ------- to him twice a week.",
        "choices": [
          {
            "id": "c1",
            "text": "was writing"
          },
          {
            "id": "c2",
            "text": "wrote"
          },
          {
            "id": "c3",
            "text": "was written"
          },
          {
            "id": "c4",
            "text": "had written"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: wrote. Twice a week là thói quen trong giai đoạn quá khứ: wrote, không phải hành động đang diễn ra tại một thời điểm.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-017",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I couldn’t cut the grass because the machine ------- a few days previously.",
        "choices": [
          {
            "id": "c1",
            "text": "broken down"
          },
          {
            "id": "c2",
            "text": "has been broken"
          },
          {
            "id": "c3",
            "text": "had broken down"
          },
          {
            "id": "c4",
            "text": "breaks down"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: had broken down. Máy hỏng trước lúc không thể cắt cỏ; a few days previously là dấu hiệu quá khứ trước quá khứ: had broken down.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-018",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We ------- English this time last week.",
        "choices": [
          {
            "id": "c1",
            "text": "learned"
          },
          {
            "id": "c2",
            "text": "were learning"
          },
          {
            "id": "c3",
            "text": "have learned"
          },
          {
            "id": "c4",
            "text": "had learned"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: were learning. This time last week chỉ một thời điểm đang diễn ra trong quá khứ; we were learning.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-019",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "When I arrived at the party, Martha ------- home already.",
        "choices": [
          {
            "id": "c1",
            "text": "went"
          },
          {
            "id": "c2",
            "text": "have gone"
          },
          {
            "id": "c3",
            "text": "had gone"
          },
          {
            "id": "c4",
            "text": "would go"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: had gone. Martha đã về nhà trước khi tôi đến: had gone. Have gone còn sai hòa hợp với Martha.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-020",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Look at those black clouds! It -------",
        "choices": [
          {
            "id": "c1",
            "text": "is going to rain"
          },
          {
            "id": "c2",
            "text": "will rain"
          },
          {
            "id": "c3",
            "text": "would rain"
          },
          {
            "id": "c4",
            "text": "can rain"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is going to rain. Mây đen là bằng chứng hiện tại cho dự đoán gần: is going to rain phù hợp nhất.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-021",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We ------- English this time next Monday.",
        "choices": [
          {
            "id": "c1",
            "text": "learn"
          },
          {
            "id": "c2",
            "text": "will learn"
          },
          {
            "id": "c3",
            "text": "are learning"
          },
          {
            "id": "c4",
            "text": "will be learning"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: will be learning. This time next Monday chỉ hành động đang diễn ra tại thời điểm tương lai: will be learning.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-022",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Alan took a photograph of Sandra while she -------",
        "choices": [
          {
            "id": "c1",
            "text": "didn’t look"
          },
          {
            "id": "c2",
            "text": "wasn’t looking"
          },
          {
            "id": "c3",
            "text": "hasn’t looked"
          },
          {
            "id": "c4",
            "text": "hadn’t looked"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: wasn’t looking. Sandra đang không nhìn khi Alan chụp: wasn’t looking, quá khứ tiếp diễn làm nền.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-023",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I ------- my key. Can you help me look for it?",
        "choices": [
          {
            "id": "c1",
            "text": "lose"
          },
          {
            "id": "c2",
            "text": "lost"
          },
          {
            "id": "c3",
            "text": "had lost"
          },
          {
            "id": "c4",
            "text": "have lost"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: have lost. Mất chìa khóa và hiện tại vẫn cần tìm cho thấy kết quả còn liên quan: have lost phù hợp nhất.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-024",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The Red River ------- very fast today-much faster than yesterday.",
        "choices": [
          {
            "id": "c1",
            "text": "flows"
          },
          {
            "id": "c2",
            "text": "is flowing"
          },
          {
            "id": "c3",
            "text": "will flow"
          },
          {
            "id": "c4",
            "text": "is going to flow"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is flowing. Today so với yesterday nhấn mạnh dòng chảy tạm thời khác thường: is flowing.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-025",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "While mother ------- dinner the phone rang.",
        "choices": [
          {
            "id": "c1",
            "text": "cooked"
          },
          {
            "id": "c2",
            "text": "had cooked"
          },
          {
            "id": "c3",
            "text": "has cooked"
          },
          {
            "id": "c4",
            "text": "was cooking"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: was cooking. Hành động nấu ăn đang diễn ra thì điện thoại reo: was cooking; không phải đã hoàn tất trước đó.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-026",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Fish ------- on earth for ages and ages.",
        "choices": [
          {
            "id": "c1",
            "text": "existed"
          },
          {
            "id": "c2",
            "text": "are existing"
          },
          {
            "id": "c3",
            "text": "exist"
          },
          {
            "id": "c4",
            "text": "have existed"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: have existed. For ages and ages diễn tả sự tồn tại từ quá khứ đến hiện tại: have existed; fish ở đây là số nhiều.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-027",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The phone ------- constantly since Jack won the first prize this morning.",
        "choices": [
          {
            "id": "c1",
            "text": "has been ringing"
          },
          {
            "id": "c2",
            "text": "rang"
          },
          {
            "id": "c3",
            "text": "had rung"
          },
          {
            "id": "c4",
            "text": "had been ringing"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been ringing. Since ... this morning và constantly nhấn mạnh hành động lặp liên tục đến hiện tại: has been ringing.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-028",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The earth ------- on the sun for its heat and light.",
        "choices": [
          {
            "id": "c1",
            "text": "is depend"
          },
          {
            "id": "c2",
            "text": "depending"
          },
          {
            "id": "c3",
            "text": "has depend"
          },
          {
            "id": "c4",
            "text": "depends"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: depends. Sự thật chung Trái Đất phụ thuộc Mặt Trời: depends. Không thêm be trước động từ thường.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-029",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "In the last two decades, space exploration ------- great contributions to weather forecasting.",
        "choices": [
          {
            "id": "c1",
            "text": "is making"
          },
          {
            "id": "c2",
            "text": "has made"
          },
          {
            "id": "c3",
            "text": "made"
          },
          {
            "id": "c4",
            "text": "makes"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has made. In the last two decades là khoảng kéo đến hiện tại: has made; chủ ngữ space exploration số ít.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-030",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "When boarding the plane, many passengers were annoyed because they ------- waiting in the airport for three and a half hours.",
        "choices": [
          {
            "id": "c1",
            "text": "are"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "have been"
          },
          {
            "id": "c4",
            "text": "had been"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had been. Đã chờ suốt ba tiếng rưỡi trước lúc lên máy bay trong quá khứ: had been waiting; chỗ trống chỉ điền had been.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-031",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "By the end of this year, Tom ------- English for three years.",
        "choices": [
          {
            "id": "c1",
            "text": "will be studying"
          },
          {
            "id": "c2",
            "text": "has studied"
          },
          {
            "id": "c3",
            "text": "will have studied"
          },
          {
            "id": "c4",
            "text": "has been studying"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: will have studied. By the end of this year đặt hạn tương lai: will have studied, hoàn tất đủ ba năm vào hạn đó.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-032",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She will go abroad as soon as she ------- this English course.",
        "choices": [
          {
            "id": "c1",
            "text": "has completed"
          },
          {
            "id": "c2",
            "text": "will complete"
          },
          {
            "id": "c3",
            "text": "will have completed"
          },
          {
            "id": "c4",
            "text": "completed"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has completed. Sau as soon as không dùng will để chỉ tương lai; has completed nhấn mạnh hoàn thành khóa học trước khi đi.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-033",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Jane’s eyes are red. She -------",
        "choices": [
          {
            "id": "c1",
            "text": "cried"
          },
          {
            "id": "c2",
            "text": "had been crying"
          },
          {
            "id": "c3",
            "text": "has been crying"
          },
          {
            "id": "c4",
            "text": "had cried"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: has been crying. Mắt đang đỏ là kết quả của việc khóc vừa kéo dài: has been crying, hiện tại hoàn thành tiếp diễn.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-034",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "My sister ------- for you since yesterday.",
        "choices": [
          {
            "id": "c1",
            "text": "is looking"
          },
          {
            "id": "c2",
            "text": "was looking"
          },
          {
            "id": "c3",
            "text": "has been looking"
          },
          {
            "id": "c4",
            "text": "looked"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: has been looking. Since yesterday cho biết việc tìm kiếm bắt đầu hôm qua và kéo đến hiện tại: has been looking.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-035",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The train ------- half an hour ago.",
        "choices": [
          {
            "id": "c1",
            "text": "has been leaving"
          },
          {
            "id": "c2",
            "text": "left"
          },
          {
            "id": "c3",
            "text": "has left"
          },
          {
            "id": "c4",
            "text": "had left"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: left. Half an hour ago là quá khứ đã xác định: left. Không dùng has left với ago.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-036",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We ------- Doris since last Sunday.",
        "choices": [
          {
            "id": "c1",
            "text": "don’t see"
          },
          {
            "id": "c2",
            "text": "haven’t seen"
          },
          {
            "id": "c3",
            "text": "didn’t see"
          },
          {
            "id": "c4",
            "text": "hadn’t seen"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: haven’t seen. Since last Sunday kéo dài đến hiện tại; phủ định với we là haven’t seen.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-037",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She is tired now. She ------- for a long time.",
        "choices": [
          {
            "id": "c1",
            "text": "has been learning"
          },
          {
            "id": "c2",
            "text": "had learned"
          },
          {
            "id": "c3",
            "text": "learns"
          },
          {
            "id": "c4",
            "text": "learned"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been learning. Tired now là kết quả hiện tại của quá trình học kéo dài: has been learning.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-038",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "They will have gone home before you ------- to meet them.",
        "choices": [
          {
            "id": "c1",
            "text": "came"
          },
          {
            "id": "c2",
            "text": "come"
          },
          {
            "id": "c3",
            "text": "will come"
          },
          {
            "id": "c4",
            "text": "are coming"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: come. Mệnh đề before chỉ thời gian tương lai dùng hiện tại đơn come, không dùng will come.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-039",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "This is the first time I ------- here.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "have been"
          },
          {
            "id": "c3",
            "text": "was"
          },
          {
            "id": "c4",
            "text": "be"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: have been. This is the first time + hiện tại hoàn thành: have been, nói trải nghiệm đầu tiên tính đến nay.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-040",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "My girlfriend arrived after I ------- for her about half an hour.",
        "choices": [
          {
            "id": "c1",
            "text": "was waiting"
          },
          {
            "id": "c2",
            "text": "had been waiting"
          },
          {
            "id": "c3",
            "text": "has been waiting"
          },
          {
            "id": "c4",
            "text": "have waited"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: had been waiting. Đã chờ khoảng nửa tiếng trước lúc bạn gái đến: had been waiting; thời gian chờ kéo dài trước mốc quá khứ.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-041",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "When we got home, dinner ------- so we had a drink first.",
        "choices": [
          {
            "id": "c1",
            "text": "was preparing"
          },
          {
            "id": "c2",
            "text": "was being prepared"
          },
          {
            "id": "c3",
            "text": "was prepared"
          },
          {
            "id": "c4",
            "text": "had been prepared"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was being prepared. Bữa tối còn đang được chuẩn bị nên họ uống trước: was being prepared, quá khứ tiếp diễn bị động.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-042",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She was tired. She ------- for a long time.",
        "choices": [
          {
            "id": "c1",
            "text": "has been learning"
          },
          {
            "id": "c2",
            "text": "had been learning"
          },
          {
            "id": "c3",
            "text": "leaned"
          },
          {
            "id": "c4",
            "text": "was learning"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: had been learning. She was tired đặt mốc quá khứ; việc học kéo dài trước mốc đó dùng had been learning.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-043",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "He ------- in space for 10 days by tomorrow.",
        "choices": [
          {
            "id": "c1",
            "text": "will travel"
          },
          {
            "id": "c2",
            "text": "will be traveling"
          },
          {
            "id": "c3",
            "text": "will have been traveling"
          },
          {
            "id": "c4",
            "text": "has traveled"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: will have been traveling. By tomorrow và for 10 days nhấn mạnh thời lượng kéo đến hạn tương lai: will have been traveling.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-044",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The weather ------- fine so far this week.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "has been"
          },
          {
            "id": "c3",
            "text": "was"
          },
          {
            "id": "c4",
            "text": "had been"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has been. So far this week = tính đến nay trong tuần: has been, hiện tại hoàn thành.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 44
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-045",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Before the Prime Minister leaves New York he ------- several talks.",
        "choices": [
          {
            "id": "c1",
            "text": "will have had"
          },
          {
            "id": "c2",
            "text": "would have"
          },
          {
            "id": "c3",
            "text": "will be having"
          },
          {
            "id": "c4",
            "text": "has"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: will have had. Trước lúc rời New York trong tương lai, các cuộc trao đổi sẽ đã diễn ra: will have had.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 45
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-046",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "As soon as he ------- a certificate in English, he will apply for a job.",
        "choices": [
          {
            "id": "c1",
            "text": "would get"
          },
          {
            "id": "c2",
            "text": "got"
          },
          {
            "id": "c3",
            "text": "gets"
          },
          {
            "id": "c4",
            "text": "will get"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: gets. As soon as chỉ thời gian tương lai dùng hiện tại đơn; he gets a certificate, không dùng will get.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 46
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-047",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I ------- TV at 8:30 last night.",
        "choices": [
          {
            "id": "c1",
            "text": "watched"
          },
          {
            "id": "c2",
            "text": "was watching"
          },
          {
            "id": "c3",
            "text": "has watched"
          },
          {
            "id": "c4",
            "text": "had watched"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was watching. At 8:30 last night đặt thời điểm đang xem TV: was watching.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 47
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-048",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "While I was working in the garden, my son ------- video games.",
        "choices": [
          {
            "id": "c1",
            "text": "was playing"
          },
          {
            "id": "c2",
            "text": "played"
          },
          {
            "id": "c3",
            "text": "has played"
          },
          {
            "id": "c4",
            "text": "has been playing"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: was playing. Hai hoạt động cùng đang diễn ra trong quá khứ: was working và was playing song song.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 48
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-049",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I ------- four chairs so far this morning.",
        "choices": [
          {
            "id": "c1",
            "text": "painted"
          },
          {
            "id": "c2",
            "text": "was painting"
          },
          {
            "id": "c3",
            "text": "have painted"
          },
          {
            "id": "c4",
            "text": "had painted"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: have painted. So far this morning nhấn mạnh số lượng đã hoàn thành tính đến hiện tại: have painted four chairs.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 49
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-050",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I’ve lived here ------- 1990.",
        "choices": [
          {
            "id": "c1",
            "text": "since"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: since. Since + mốc bắt đầu: since 1990. For đi với độ dài thời gian.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Time Expressions"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 50
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-051",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Paulo has learned English ------- five years.",
        "choices": [
          {
            "id": "c1",
            "text": "since"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: for. For + khoảng thời gian: for five years. Since cần mốc như 2021 hoặc last year.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Time Expressions"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 51
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-052",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Since the appearance of karaoke machines, they -------",
        "choices": [
          {
            "id": "c1",
            "text": "had been widely used"
          },
          {
            "id": "c2",
            "text": "have been widely used"
          },
          {
            "id": "c3",
            "text": "were widely used"
          },
          {
            "id": "c4",
            "text": "widely used"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: have been widely used. Since the appearance ... kéo đến hiện tại; máy được sử dụng nên have been widely used là bị động.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 52
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-053",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She has been studying engineering -------",
        "choices": [
          {
            "id": "c1",
            "text": "since 5 years"
          },
          {
            "id": "c2",
            "text": "for 5 years"
          },
          {
            "id": "c3",
            "text": "5 years before"
          },
          {
            "id": "c4",
            "text": "during 5 years"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for 5 years. For 5 years chỉ độ dài học đến hiện tại; since không đứng trực tiếp trước một khoảng thời gian như 5 years.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Time Expressions"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 53
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-054",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We ------- waiting for her half an hour before she came.",
        "choices": [
          {
            "id": "c1",
            "text": "have been"
          },
          {
            "id": "c2",
            "text": "will be"
          },
          {
            "id": "c3",
            "text": "will have been"
          },
          {
            "id": "c4",
            "text": "had been"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had been. Việc chờ diễn ra trước khi cô ấy đến: had been waiting; chỗ trống chỉ điền had been.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 54
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-055",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "So far, I ------- that novel at least twice.",
        "choices": [
          {
            "id": "c1",
            "text": "have read"
          },
          {
            "id": "c2",
            "text": "read"
          },
          {
            "id": "c3",
            "text": "reads"
          },
          {
            "id": "c4",
            "text": "have been reading"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: have read. So far và at least twice nhấn mạnh số lần hoàn tất: have read, không nhấn mạnh quá trình đang đọc.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 55
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-056",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "What did the farmer do after locusts ------- their crop?",
        "choices": [
          {
            "id": "c1",
            "text": "damage"
          },
          {
            "id": "c2",
            "text": "are damaged"
          },
          {
            "id": "c3",
            "text": "have damaged"
          },
          {
            "id": "c4",
            "text": "had damaged"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had damaged. Châu chấu phá mùa trước lúc người nông dân xử lý: had damaged, quá khứ hoàn thành chủ động.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 56
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-057",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We ------- to Tri An a few times recently.",
        "choices": [
          {
            "id": "c1",
            "text": "would be"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "had been"
          },
          {
            "id": "c4",
            "text": "have been"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: have been. A few times recently nói trải nghiệm gần đây đến hiện tại: have been to Tri An.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 57
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-058",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We shall make a trip around the world when the opportunity ------- itself to us.",
        "choices": [
          {
            "id": "c1",
            "text": "will present"
          },
          {
            "id": "c2",
            "text": "will have presented"
          },
          {
            "id": "c3",
            "text": "presents"
          },
          {
            "id": "c4",
            "text": "will be presenting"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: presents. Sau when chỉ thời gian tương lai dùng hiện tại đơn presents; không dùng will present.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 58
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-059",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I don’t understand this sentence. What ------- ?",
        "choices": [
          {
            "id": "c1",
            "text": "does mean this word"
          },
          {
            "id": "c2",
            "text": "have this word mean"
          },
          {
            "id": "c3",
            "text": "means this word"
          },
          {
            "id": "c4",
            "text": "does this word mean"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: does this word mean. Câu hỏi hiện tại đơn có trật tự What + does + this word + mean; mean giữ nguyên mẫu.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 59
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-060",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "John ------- tennis once or twice a week.",
        "choices": [
          {
            "id": "c1",
            "text": "usually play"
          },
          {
            "id": "c2",
            "text": "in usually playing"
          },
          {
            "id": "c3",
            "text": "usually plays"
          },
          {
            "id": "c4",
            "text": "have usually played"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: usually plays. Once or twice a week là thói quen; John số ít nên usually plays.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 60
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-061",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "It ------- dark. Shall I turn on the light?",
        "choices": [
          {
            "id": "c1",
            "text": "is getting"
          },
          {
            "id": "c2",
            "text": "get"
          },
          {
            "id": "c3",
            "text": "got"
          },
          {
            "id": "c4",
            "text": "has got"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is getting. Trời đang tối dần nên đề nghị bật đèn: is getting diễn tả thay đổi ngay hiện tại.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 61
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-062",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "At 5 o’clock yesterday evening, I ------- my clothes.",
        "choices": [
          {
            "id": "c1",
            "text": "am ironing"
          },
          {
            "id": "c2",
            "text": "have ironed"
          },
          {
            "id": "c3",
            "text": "ironed"
          },
          {
            "id": "c4",
            "text": "was ironing"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: was ironing. At 5 o’clock yesterday evening chỉ thời điểm đang ủi quần áo: was ironing.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 62
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-063",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Why ------- at me like that? What’s the matter?",
        "choices": [
          {
            "id": "c1",
            "text": "do you look"
          },
          {
            "id": "c2",
            "text": "have you looked"
          },
          {
            "id": "c3",
            "text": "did you look"
          },
          {
            "id": "c4",
            "text": "are you looking"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: are you looking. Hỏi hành vi nhìn đang diễn ra lúc nói: Why are you looking ...?",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 63
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-064",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I ------- along the street when I suddenly heard footsteps behind me.",
        "choices": [
          {
            "id": "c1",
            "text": "was walking"
          },
          {
            "id": "c2",
            "text": "a walking"
          },
          {
            "id": "c3",
            "text": "walk"
          },
          {
            "id": "c4",
            "text": "walked"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: was walking. Đang đi thì bất chợt nghe tiếng chân: was walking làm nền cho heard.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 64
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-065",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "There was a time when watching TV really ------- family entertainment",
        "choices": [
          {
            "id": "c1",
            "text": "were"
          },
          {
            "id": "c2",
            "text": "was"
          },
          {
            "id": "c3",
            "text": "had been"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was. There was a time đặt bối cảnh quá khứ; cụm watching TV là chủ ngữ số ít nên was.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 65
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-066",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "At last the bus came. We ------- for half an hour",
        "choices": [
          {
            "id": "c1",
            "text": "waited"
          },
          {
            "id": "c2",
            "text": "was waiting"
          },
          {
            "id": "c3",
            "text": "have waited"
          },
          {
            "id": "c4",
            "text": "had been waiting"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had been waiting. Đã chờ nửa tiếng trước lúc xe buýt đến: had been waiting, không dùng hiện tại hoàn thành vì mốc đã ở quá khứ.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 66
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-067",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Through the rain, I ------- a lighted window and a sign which said \"Sam’s Place\".",
        "choices": [
          {
            "id": "c1",
            "text": "have seen"
          },
          {
            "id": "c2",
            "text": "was seeing"
          },
          {
            "id": "c3",
            "text": "saw"
          },
          {
            "id": "c4",
            "text": "see"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: saw. Thấy cửa sổ và biển hiệu là sự kiện trong mạch kể quá khứ: saw; see thường không dùng tiếp diễn cho nhận biết tức thời.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 67
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-068",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I’m going on holiday on Saturday. This time next week I ------- on a beach by the sea.",
        "choices": [
          {
            "id": "c1",
            "text": "will lie"
          },
          {
            "id": "c2",
            "text": "am lying"
          },
          {
            "id": "c3",
            "text": "will be lying"
          },
          {
            "id": "c4",
            "text": "should be lying"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: will be lying. This time next week nói hành động đang diễn ra tại thời điểm tương lai: will be lying.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 68
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-069",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Ted and Amy ------- for 24 years.",
        "choices": [
          {
            "id": "c1",
            "text": "have been married"
          },
          {
            "id": "c2",
            "text": "married"
          },
          {
            "id": "c3",
            "text": "were married"
          },
          {
            "id": "c4",
            "text": "has been married"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: have been married. For 24 years chỉ tình trạng kết hôn kéo đến hiện tại: have been married; Ted and Amy là số nhiều.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 69
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-070",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Tomorrow I ------- my grandparents.",
        "choices": [
          {
            "id": "c1",
            "text": "am going to visit"
          },
          {
            "id": "c2",
            "text": "will have visited"
          },
          {
            "id": "c3",
            "text": "have visited"
          },
          {
            "id": "c4",
            "text": "visit"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: am going to visit. Am going to visit diễn tả dự định thăm ông bà ngày mai, phù hợp nhất trong các phương án.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Present Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 70
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-071",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "When their first child was born, they ------- married for three years.",
        "choices": [
          {
            "id": "c1",
            "text": "have been married"
          },
          {
            "id": "c2",
            "text": "had been married"
          },
          {
            "id": "c3",
            "text": "will been married"
          },
          {
            "id": "c4",
            "text": "will have been married"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: had been married. Đã kết hôn ba năm trước khi con đầu lòng sinh ra: had been married, quá khứ hoàn thành.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 71
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-072",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "I think the weather ------- nice later.",
        "choices": [
          {
            "id": "c1",
            "text": "will be"
          },
          {
            "id": "c2",
            "text": "be"
          },
          {
            "id": "c3",
            "text": "is"
          },
          {
            "id": "c4",
            "text": "has been"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: will be. I think và later gợi dự đoán tương lai: will be.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 72
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-073",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "We were extremely tired at the end of the journey. We ------- for more than 24 hours.",
        "choices": [
          {
            "id": "c1",
            "text": "had been traveling"
          },
          {
            "id": "c2",
            "text": "were traveling"
          },
          {
            "id": "c3",
            "text": "have traveled"
          },
          {
            "id": "c4",
            "text": "traveled"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: had been traveling. Mệt ở cuối hành trình do đã di chuyển hơn 24 giờ: had been traveling nhấn mạnh quá trình trước mốc quá khứ.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 73
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-074",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "The man sitting next to me on the plane was nervous because he ------- before.",
        "choices": [
          {
            "id": "c1",
            "text": "hasn’t flown"
          },
          {
            "id": "c2",
            "text": "didn’t fly"
          },
          {
            "id": "c3",
            "text": "hadn’t flown"
          },
          {
            "id": "c4",
            "text": "wasn’t flying"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: hadn’t flown. Chưa từng bay trước chuyến bay đang kể: hadn’t flown, quá khứ hoàn thành phủ định.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 74
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-075",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "They ------- serving meals by the time we get to the restaurant.",
        "choices": [
          {
            "id": "c1",
            "text": "will stop"
          },
          {
            "id": "c2",
            "text": "stopped"
          },
          {
            "id": "c3",
            "text": "are stopping"
          },
          {
            "id": "c4",
            "text": "will have stopped"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: will have stopped. By the time we get ... đặt hạn tương lai; việc ngừng phục vụ sẽ hoàn tất trước đó: will have stopped.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Future Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 75
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-076",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Can I borrow your bike on Monday? I’m sorry, but ------- it.",
        "choices": [
          {
            "id": "c1",
            "text": "I’ll be using"
          },
          {
            "id": "c2",
            "text": "used"
          },
          {
            "id": "c3",
            "text": "use"
          },
          {
            "id": "c4",
            "text": "have used"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: I’ll be using. I’ll be using diễn tả sẽ đang dùng xe vào thứ Hai nên không cho mượn được.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 76
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-077",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "She ------- music continuously since breakfast. Now she feels tired.",
        "choices": [
          {
            "id": "c1",
            "text": "has been playing"
          },
          {
            "id": "c2",
            "text": "is playing"
          },
          {
            "id": "c3",
            "text": "played"
          },
          {
            "id": "c4",
            "text": "plays"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been playing. Since breakfast và continuously nhấn mạnh chơi nhạc liên tục đến hiện tại: has been playing.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 77
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-078",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "After he ------- the house, he wrote a letter.",
        "choices": [
          {
            "id": "c1",
            "text": "cleans"
          },
          {
            "id": "c2",
            "text": "was cleaning"
          },
          {
            "id": "c3",
            "text": "had cleaned"
          },
          {
            "id": "c4",
            "text": "has cleaned"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: had cleaned. Dọn nhà hoàn tất trước lúc viết thư trong quá khứ: had cleaned.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Past Perfect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 78
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-079",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Where ------- you at 9:00 last night, Mr. Green?",
        "choices": [
          {
            "id": "c1",
            "text": "have been"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "will be"
          },
          {
            "id": "c4",
            "text": "are"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: were. At 9:00 last night hỏi trạng thái ở quá khứ: Where were you ...? Không dùng have been với mốc này.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Verb Tense and Aspect"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 79
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s01-080",
        "packId": "pack-on-tap-ngu-phap-main-s01",
        "part": 5,
        "prompt": "Tim was tired. He ------- hard all day.",
        "choices": [
          {
            "id": "c1",
            "text": "has been studying"
          },
          {
            "id": "c2",
            "text": "studies"
          },
          {
            "id": "c3",
            "text": "studied"
          },
          {
            "id": "c4",
            "text": "had been studying"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had been studying. Tim mệt ở quá khứ do đã học cả ngày: had been studying nhấn mạnh quá trình trước đó.",
        "topicTags": [
          "Verb Tense",
          "CÁC THÌ",
          "Perfect Continuous"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 80
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s02",
      "title": "Các loại từ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 51,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-001",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "A book may be evaluated by a reader or professional writer to create a book -------",
        "choices": [
          {
            "id": "c1",
            "text": "review"
          },
          {
            "id": "c2",
            "text": "reviewing"
          },
          {
            "id": "c3",
            "text": "reviewer"
          },
          {
            "id": "c4",
            "text": "reviewed"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: review. Book review là bài đánh giá sách; cần danh từ chỉ sản phẩm đánh giá, không phải reviewer là người đánh giá.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-002",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Read the book ------- and you can find the information you need.",
        "choices": [
          {
            "id": "c1",
            "text": "care"
          },
          {
            "id": "c2",
            "text": "careful"
          },
          {
            "id": "c3",
            "text": "carefulness"
          },
          {
            "id": "c4",
            "text": "carefully"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: carefully. Bổ nghĩa cho động từ read cần trạng từ carefully = cẩn thận; careful chỉ là tính từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-003",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Not many people find reading more ------- than watching TV.",
        "choices": [
          {
            "id": "c1",
            "text": "interest"
          },
          {
            "id": "c2",
            "text": "interested"
          },
          {
            "id": "c3",
            "text": "interesting"
          },
          {
            "id": "c4",
            "text": "interestingly"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: interesting. Find + tân ngữ + tính từ; hoạt động đọc gây hứng thú nên interesting, không dùng interested chỉ cảm xúc người.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-004",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "To become a novelist, you need to be -------",
        "choices": [
          {
            "id": "c1",
            "text": "imagine"
          },
          {
            "id": "c2",
            "text": "imagination"
          },
          {
            "id": "c3",
            "text": "imaginative"
          },
          {
            "id": "c4",
            "text": "imaginarily"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: imaginative. Sau be cần tính từ imaginative = giàu tưởng tượng, phù hợp nghề viết tiểu thuyết.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-005",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "They are going to ------- the pool to 1.8 meter.",
        "choices": [
          {
            "id": "c1",
            "text": "deep"
          },
          {
            "id": "c2",
            "text": "depth"
          },
          {
            "id": "c3",
            "text": "deepen"
          },
          {
            "id": "c4",
            "text": "deeply"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: deepen. Sau going to cần động từ nguyên mẫu deepen = làm sâu thêm; depth là danh từ, deeply là trạng từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-006",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The referee had no hesitation in awarding the visiting team a -------",
        "choices": [
          {
            "id": "c1",
            "text": "penalty"
          },
          {
            "id": "c2",
            "text": "penalize"
          },
          {
            "id": "c3",
            "text": "penal"
          },
          {
            "id": "c4",
            "text": "penalization"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: penalty. Award a team a penalty là cho đội hưởng quả phạt; penalty là danh từ đếm được phù hợp sau a.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-007",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The sick man still finds it ------- to stand without support.",
        "choices": [
          {
            "id": "c1",
            "text": "discomfort"
          },
          {
            "id": "c2",
            "text": "comforting"
          },
          {
            "id": "c3",
            "text": "uncomfortable"
          },
          {
            "id": "c4",
            "text": "comfortable"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: uncomfortable. Find it + tính từ + to V; người bệnh thấy khó chịu khi đứng không hỗ trợ: uncomfortable.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-008",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "You will have to work hard if you want to -------",
        "choices": [
          {
            "id": "c1",
            "text": "succeed"
          },
          {
            "id": "c2",
            "text": "successfully"
          },
          {
            "id": "c3",
            "text": "success"
          },
          {
            "id": "c4",
            "text": "successful"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: succeed. Want to + động từ nguyên mẫu succeed = thành công; success là danh từ, successful là tính từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-009",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Their ------- has lasted for more than 20 years.",
        "choices": [
          {
            "id": "c1",
            "text": "friendly"
          },
          {
            "id": "c2",
            "text": "friend"
          },
          {
            "id": "c3",
            "text": "friends"
          },
          {
            "id": "c4",
            "text": "friendship"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: friendship. Their + danh từ làm chủ ngữ; friendship là tình bạn có thể kéo dài hơn 20 năm.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-010",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "English is an ------- language to learn.",
        "choices": [
          {
            "id": "c1",
            "text": "easiness"
          },
          {
            "id": "c2",
            "text": "easily"
          },
          {
            "id": "c3",
            "text": "easy"
          },
          {
            "id": "c4",
            "text": "ease"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: easy. Trước language cần tính từ easy = dễ; easily là trạng từ, ease/easiness là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-011",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Physical ------- are good for our health.",
        "choices": [
          {
            "id": "c1",
            "text": "activities"
          },
          {
            "id": "c2",
            "text": "activists"
          },
          {
            "id": "c3",
            "text": "actions"
          },
          {
            "id": "c4",
            "text": "acts"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: activities. Physical activities = hoạt động thể chất, phù hợp lợi ích sức khỏe; activists là nhà hoạt động.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-012",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "You should write a letter of ------- to that institute.",
        "choices": [
          {
            "id": "c1",
            "text": "inquire"
          },
          {
            "id": "c2",
            "text": "inquiry"
          },
          {
            "id": "c3",
            "text": "inquisition"
          },
          {
            "id": "c4",
            "text": "inquisitor"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: inquiry. A letter of inquiry = thư hỏi thông tin; inquire là động từ, inquisitor là người thẩm vấn.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-013",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Don’t eat those vegetables. They’re -------",
        "choices": [
          {
            "id": "c1",
            "text": "poisonousness"
          },
          {
            "id": "c2",
            "text": "poisoning"
          },
          {
            "id": "c3",
            "text": "poisonously"
          },
          {
            "id": "c4",
            "text": "poisonous"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: poisonous. Sau They are cần tính từ mô tả đặc điểm của rau: poisonous = có độc. Poisonousness là danh từ; poisonously là trạng từ; poisoning là dạng động từ, không diễn tả đặc tính có độc trong câu này. Nghĩa: Đừng ăn những loại rau đó vì chúng có độc. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-014",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "We’ll live a happier and ------- life if we keep our environment clean.",
        "choices": [
          {
            "id": "c1",
            "text": "health"
          },
          {
            "id": "c2",
            "text": "healthy"
          },
          {
            "id": "c3",
            "text": "unhealthy"
          },
          {
            "id": "c4",
            "text": "healthier"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: healthier. Song song với happier cần dạng so sánh hơn healthier; life được mô tả hạnh phúc và khỏe mạnh hơn.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-015",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "He decided, very ------- , not to drive when he was so tired",
        "choices": [
          {
            "id": "c1",
            "text": "sense"
          },
          {
            "id": "c2",
            "text": "sensitively"
          },
          {
            "id": "c3",
            "text": "sensibly"
          },
          {
            "id": "c4",
            "text": "sensible"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: sensibly. Bổ nghĩa decided cần sensibly = một cách sáng suốt; sensitively là nhạy cảm, khác nghĩa.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-016",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Environmental ------- is everybody’s responsibility.",
        "choices": [
          {
            "id": "c1",
            "text": "protect"
          },
          {
            "id": "c2",
            "text": "protection"
          },
          {
            "id": "c3",
            "text": "destruction"
          },
          {
            "id": "c4",
            "text": "damage"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: protection. Environmental protection = bảo vệ môi trường, là trách nhiệm chung; destruction/damage mang nghĩa phá hủy/thiệt hại.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-017",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "In the future, many buildings will be ------- by solar energy.",
        "choices": [
          {
            "id": "c1",
            "text": "heat"
          },
          {
            "id": "c2",
            "text": "heated"
          },
          {
            "id": "c3",
            "text": "heating"
          },
          {
            "id": "c4",
            "text": "hotly"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án B: heated. Will be + quá khứ phân từ tạo tương lai bị động: will be heated = sẽ được sưởi ấm. By solar energy chỉ nguồn năng lượng dùng để sưởi. Heat là nguyên mẫu; heating là V-ing; hotly là trạng từ. Nghĩa: Trong tương lai, nhiều tòa nhà sẽ được sưởi bằng năng lượng mặt trời. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-018",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "My brother can repair electric ------- very well.",
        "choices": [
          {
            "id": "c1",
            "text": "apply"
          },
          {
            "id": "c2",
            "text": "applicator"
          },
          {
            "id": "c3",
            "text": "application"
          },
          {
            "id": "c4",
            "text": "appliances"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: appliances. Electric appliances = thiết bị điện, là thứ có thể sửa; apply là động từ, application là sự ứng dụng/đơn.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-019",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "These ------- will conserve the earth’s resources.",
        "choices": [
          {
            "id": "c1",
            "text": "innovate"
          },
          {
            "id": "c2",
            "text": "innovation"
          },
          {
            "id": "c3",
            "text": "innovations"
          },
          {
            "id": "c4",
            "text": "innovative"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: innovations. These + danh từ số nhiều innovations = những cải tiến; innovation số ít không phù hợp these.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-020",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "------- is now a serious problem in many countries.",
        "choices": [
          {
            "id": "c1",
            "text": "Forest"
          },
          {
            "id": "c2",
            "text": "Forestry"
          },
          {
            "id": "c3",
            "text": "Deforestation"
          },
          {
            "id": "c4",
            "text": "Forestall"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: Deforestation. Deforestation = nạn phá rừng, phù hợp vấn đề nghiêm trọng; forestry là lâm nghiệp, forest là rừng.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-021",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Burning coal is an ------- way to heat the house. Gas is much cheaper.",
        "choices": [
          {
            "id": "c1",
            "text": "economy"
          },
          {
            "id": "c2",
            "text": "economic"
          },
          {
            "id": "c3",
            "text": "uneconomical"
          },
          {
            "id": "c4",
            "text": "B&C"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: uneconomical. Gas is much cheaper cho thấy đốt than không kinh tế: uneconomical. Economic không đồng nghĩa chắc chắn với economical trong mọi ngữ cảnh.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": false,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-022",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Sometimes I have some ------- which can’t be explained",
        "choices": [
          {
            "id": "c1",
            "text": "fell"
          },
          {
            "id": "c2",
            "text": "felling"
          },
          {
            "id": "c3",
            "text": "feel"
          },
          {
            "id": "c4",
            "text": "feelings"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: feelings. Some feelings = một số cảm xúc; các từ fell/felling/feel không phải danh từ số nhiều cần thiết.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-023",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The earthquake caused terrible -------",
        "choices": [
          {
            "id": "c1",
            "text": "destroying"
          },
          {
            "id": "c2",
            "text": "destroyed"
          },
          {
            "id": "c3",
            "text": "destruction"
          },
          {
            "id": "c4",
            "text": "destroys"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: destruction. Sau caused terrible cần danh từ destruction = sự tàn phá; destroyed là phân từ, destroys là động từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-024",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The cost of the ------- must be paid by the buyer.",
        "choices": [
          {
            "id": "c1",
            "text": "carry"
          },
          {
            "id": "c2",
            "text": "carrying"
          },
          {
            "id": "c3",
            "text": "carried"
          },
          {
            "id": "c4",
            "text": "carriage"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: carriage. Cost of carriage = chi phí vận chuyển; carriage là danh từ phù hợp cụm chi phí trong mua bán.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-025",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Why don’t you call the ------- if the lights don’t work?",
        "choices": [
          {
            "id": "c1",
            "text": "electricity"
          },
          {
            "id": "c2",
            "text": "electric"
          },
          {
            "id": "c3",
            "text": "electrician"
          },
          {
            "id": "c4",
            "text": "electrics"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: electrician. Call the electrician = gọi thợ điện; electricity là điện, electric là tính từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-026",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Everyone has a number of ------- , but no one has many true friends.",
        "choices": [
          {
            "id": "c1",
            "text": "acquaint"
          },
          {
            "id": "c2",
            "text": "acquaintances"
          },
          {
            "id": "c3",
            "text": "acquainting"
          },
          {
            "id": "c4",
            "text": "acquainters"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: acquaintances. A number of + danh từ đếm được số nhiều acquaintances = người quen, đối lập true friends.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-027",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "His son’s ------- has not improved much.",
        "choices": [
          {
            "id": "c1",
            "text": "behave"
          },
          {
            "id": "c2",
            "text": "behaviour"
          },
          {
            "id": "c3",
            "text": "behavourist"
          },
          {
            "id": "c4",
            "text": "behavourism"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: behaviour. Sau sở hữu His son’s cần danh từ behaviour = hành vi; behave là động từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-028",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "He draws cartoons for a ------- magazine.",
        "choices": [
          {
            "id": "c1",
            "text": "humour"
          },
          {
            "id": "c2",
            "text": "humourous"
          },
          {
            "id": "c3",
            "text": "human"
          },
          {
            "id": "c4",
            "text": "humourously"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: humourous. Trước magazine cần tính từ humourous = hài hước; humourously là trạng từ. Nguồn viết humourous; dạng thông dụng là humorous.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-029",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "You shouldn’t ------- others if you also have a lot of mistakes.",
        "choices": [
          {
            "id": "c1",
            "text": "critic"
          },
          {
            "id": "c2",
            "text": "critical"
          },
          {
            "id": "c3",
            "text": "criticize"
          },
          {
            "id": "c4",
            "text": "critically"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: criticize. Sau shouldn’t cần nguyên mẫu criticize = phê bình; critic là nhà phê bình, critically là trạng từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-030",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "They tried to win but their efforts are -------",
        "choices": [
          {
            "id": "c1",
            "text": "success"
          },
          {
            "id": "c2",
            "text": "successful"
          },
          {
            "id": "c3",
            "text": "successfully"
          },
          {
            "id": "c4",
            "text": "unsuccessful"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: unsuccessful. But cho thấy cố gắng mà không thành: unsuccessful = không thành công; successfully là trạng từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-031",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The park service asks visitors to behave ------- and show respect for wildlife.",
        "choices": [
          {
            "id": "c1",
            "text": "responsibly"
          },
          {
            "id": "c2",
            "text": "responsible"
          },
          {
            "id": "c3",
            "text": "responsibility"
          },
          {
            "id": "c4",
            "text": "responsibilities"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: responsibly. Bổ nghĩa behave cần trạng từ responsibly = có trách nhiệm; responsible là tính từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-032",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The ------- of Board of Directors is scheduled for Monday.",
        "choices": [
          {
            "id": "c1",
            "text": "election"
          },
          {
            "id": "c2",
            "text": "elected"
          },
          {
            "id": "c3",
            "text": "elects"
          },
          {
            "id": "c4",
            "text": "electable"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: election. The election of ... là việc bầu chọn, danh từ làm chủ ngữ; elected là phân từ, elects là động từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-033",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "In order to suppress harmful insects and weeds, garden maintenance companies must choose the right products and apply them ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "correction"
          },
          {
            "id": "c2",
            "text": "correctly"
          },
          {
            "id": "c3",
            "text": "corrected"
          },
          {
            "id": "c4",
            "text": "correcting"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: correctly. Apply them correctly = sử dụng chúng đúng cách; trạng từ bổ nghĩa apply, không dùng danh từ correction.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-034",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The CEO will use her ------- in determining how the reorganization of the company will be conducted.",
        "choices": [
          {
            "id": "c1",
            "text": "discretionary"
          },
          {
            "id": "c2",
            "text": "discrete"
          },
          {
            "id": "c3",
            "text": "discretely"
          },
          {
            "id": "c4",
            "text": "discretion"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: discretion. Use her discretion = sử dụng quyền cân nhắc/quyết định; discretion là danh từ sau her, discrete có nghĩa riêng biệt.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-035",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "------- by the audience’s positive reaction to its music, the Gary Jones played well past midnight.",
        "choices": [
          {
            "id": "c1",
            "text": "Delighted"
          },
          {
            "id": "c2",
            "text": "Delightedly"
          },
          {
            "id": "c3",
            "text": "Delightful"
          },
          {
            "id": "c4",
            "text": "Delight"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: Delighted. Delighted by ... là phân từ bị động chỉ sự vui mừng do phản ứng khán giả; không dùng trạng từ delightedly làm cụm mở đầu này.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-036",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The young fashion designer wanted to create dress styles ------- different from those of her contemporaries.",
        "choices": [
          {
            "id": "c1",
            "text": "recognize"
          },
          {
            "id": "c2",
            "text": "recognizing"
          },
          {
            "id": "c3",
            "text": "recognizable"
          },
          {
            "id": "c4",
            "text": "recognizably"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: recognizably. Recognizably bổ nghĩa tính từ different: khác biệt đến mức dễ nhận ra; recognizable là tính từ, không trực tiếp bổ nghĩa different.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-037",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Many environmental analysts recommend that nations reduce their ------- on non-renewable energy sources.",
        "choices": [
          {
            "id": "c1",
            "text": "dependently"
          },
          {
            "id": "c2",
            "text": "dependence"
          },
          {
            "id": "c3",
            "text": "depends"
          },
          {
            "id": "c4",
            "text": "dependent"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: dependence. Reduce their dependence on = giảm sự phụ thuộc vào; sau their cần danh từ dependence.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-038",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "A particularly ------- drawback of this book is the almost complete lack of useful illustrations or tables.",
        "choices": [
          {
            "id": "c1",
            "text": "frustrating"
          },
          {
            "id": "c2",
            "text": "frustratingly"
          },
          {
            "id": "c3",
            "text": "frustrated"
          },
          {
            "id": "c4",
            "text": "frustration"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: frustrating. Drawback gây bực bội nên frustrating; frustrated thường mô tả người cảm thấy bực, frustratingly là trạng từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-039",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The general manager has ------- that any information customers enter be used only to respond to their inquiries and requests.",
        "choices": [
          {
            "id": "c1",
            "text": "suggested"
          },
          {
            "id": "c2",
            "text": "suggesting"
          },
          {
            "id": "c3",
            "text": "suggest"
          },
          {
            "id": "c4",
            "text": "suggestion"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: suggested. Has + quá khứ phân từ suggested; suggest that + chủ ngữ + be dùng giả định khi đưa đề xuất.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-040",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Additional information on ------- financial aid such as grants and scholarships can be obtained from career offices at each university.",
        "choices": [
          {
            "id": "c1",
            "text": "extend"
          },
          {
            "id": "c2",
            "text": "extensive"
          },
          {
            "id": "c3",
            "text": "extent"
          },
          {
            "id": "c4",
            "text": "extension"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: extensive. Trước financial aid cần tính từ extensive = rộng rãi; extent/extension là danh từ, extend là động từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-041",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "------- for reconstruction contracts has been getting stiffer over the years since it can generate enormously lucrative earnings.",
        "choices": [
          {
            "id": "c1",
            "text": "Competitively"
          },
          {
            "id": "c2",
            "text": "Competition"
          },
          {
            "id": "c3",
            "text": "Competitive"
          },
          {
            "id": "c4",
            "text": "Competes"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: Competition. Competition for contracts = cạnh tranh giành hợp đồng; cần danh từ làm chủ ngữ của has been getting.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-042",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The general hospital was able to improve patient care significantly without hiring more staff by ------- in a new information system.",
        "choices": [
          {
            "id": "c1",
            "text": "invests"
          },
          {
            "id": "c2",
            "text": "invested"
          },
          {
            "id": "c3",
            "text": "investing"
          },
          {
            "id": "c4",
            "text": "invest"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: investing. By + V-ing: by investing in = bằng cách đầu tư vào; không dùng invests/invest ở sau giới từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-043",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Our experienced and skilled technicians can be of much help in the event that you ------- delete something essential from the program.",
        "choices": [
          {
            "id": "c1",
            "text": "accident"
          },
          {
            "id": "c2",
            "text": "accidental"
          },
          {
            "id": "c3",
            "text": "accidents"
          },
          {
            "id": "c4",
            "text": "accidentally"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: accidentally. Accidentally bổ nghĩa delete: vô tình xóa; accidental là tính từ, accident là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-044",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "When the ------- for this new safety policy was under consideration by the managers, a number of experts were asked for their comments.",
        "choices": [
          {
            "id": "c1",
            "text": "proposing"
          },
          {
            "id": "c2",
            "text": "propose"
          },
          {
            "id": "c3",
            "text": "proposes"
          },
          {
            "id": "c4",
            "text": "proposal"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: proposal. The proposal for ... là đề xuất, danh từ làm chủ ngữ; proposing là dạng V-ing, không phù hợp nghĩa bằng proposal.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 44
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-045",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "All the workers are required to ------- verify that the proper maintenance of storage facilities is conducted with extreme care.",
        "choices": [
          {
            "id": "c1",
            "text": "periodic"
          },
          {
            "id": "c2",
            "text": "periodical"
          },
          {
            "id": "c3",
            "text": "periodically"
          },
          {
            "id": "c4",
            "text": "period"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: periodically. Periodically bổ nghĩa verify: kiểm tra định kỳ; periodic/periodical là tính từ, period là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 45
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-046",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The elegant hotel we stayed at was ------- and bright and had a private entrance and patio with a view of the ocean.",
        "choices": [
          {
            "id": "c1",
            "text": "spacing"
          },
          {
            "id": "c2",
            "text": "spacious"
          },
          {
            "id": "c3",
            "text": "spaciousness"
          },
          {
            "id": "c4",
            "text": "spaces"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: spacious. Was spacious and bright cần hai tính từ song song; spacious = rộng rãi, spaciousness là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 46
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-047",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "Applicants are advised to fill out an application form concisely to impress potential employers, without being too ------- or boring.",
        "choices": [
          {
            "id": "c1",
            "text": "repeating"
          },
          {
            "id": "c2",
            "text": "repetitive"
          },
          {
            "id": "c3",
            "text": "repetition"
          },
          {
            "id": "c4",
            "text": "repeat"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: repetitive. Too repetitive or boring cần tính từ: quá lặp lại hoặc nhàm chán; repetition là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 47
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-048",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "All the terms of the agreement must be clear so that the meaning and intent won’t be ------- by either party.",
        "choices": [
          {
            "id": "c1",
            "text": "misinterpret"
          },
          {
            "id": "c2",
            "text": "misinterpretation"
          },
          {
            "id": "c3",
            "text": "misinterpreted"
          },
          {
            "id": "c4",
            "text": "misinterpreting"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: misinterpreted. Won’t be misinterpreted by ... là tương lai bị động: không bị hiểu sai. Misinterpretation là danh từ.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 48
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-049",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "There’s another piece of evidence that there has been enormous ------- in the supply of customized services to customers.",
        "choices": [
          {
            "id": "c1",
            "text": "growth"
          },
          {
            "id": "c2",
            "text": "grows"
          },
          {
            "id": "c3",
            "text": "grown"
          },
          {
            "id": "c4",
            "text": "grower"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: growth. Enormous growth = sự tăng trưởng lớn; growth là danh từ, grower là người trồng.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 49
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-050",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "We are sorry to announce that we will not ------- any credit cards starting next year since a cash deposit is required.",
        "choices": [
          {
            "id": "c1",
            "text": "accepts"
          },
          {
            "id": "c2",
            "text": "accepting"
          },
          {
            "id": "c3",
            "text": "accept"
          },
          {
            "id": "c4",
            "text": "accepted"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: accept. Will not + động từ nguyên mẫu accept; không dùng accepts, accepting hoặc accepted sau will not.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 50
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s02-051",
        "packId": "pack-on-tap-ngu-phap-main-s02",
        "part": 5,
        "prompt": "The elegant hotel known for its fabulous amenities is ------- located near the local airport.",
        "choices": [
          {
            "id": "c1",
            "text": "convenience"
          },
          {
            "id": "c2",
            "text": "convenient"
          },
          {
            "id": "c3",
            "text": "conveniently"
          },
          {
            "id": "c4",
            "text": "conveniences"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: conveniently. Conveniently located = tọa lạc thuận tiện; trạng từ bổ nghĩa located, không dùng tính từ convenient.",
        "topicTags": [
          "Word Form",
          "CÁC LOẠI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 51
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s03",
      "title": "Giới từ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 80,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-001",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Elizabeth is fond ------- going to dances.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "of"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: of. Be fond of + V-ing = thích làm gì; fond không đi với in/with/at trong cấu trúc này.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-002",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "That is last year’s telephone directory. It’s ------- date now.",
        "choices": [
          {
            "id": "c1",
            "text": "into"
          },
          {
            "id": "c2",
            "text": "out of"
          },
          {
            "id": "c3",
            "text": "besides"
          },
          {
            "id": "c4",
            "text": "out"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: out of. Out of date = lỗi thời, hết cập nhật; không dùng out date vì thiếu of.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-003",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He was put ------- prison.",
        "choices": [
          {
            "id": "c1",
            "text": "to"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "into"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: into. Be put into prison = bị tống vào tù; into diễn tả đi vào một nơi.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-004",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I saw him ------- noon.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "against"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: at. At noon = vào buổi trưa; dùng at với thời điểm cụ thể này.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-005",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She treated me ------- cake, ice-cream and tea.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: to. Treat someone to something = mời/chiêu đãi ai món gì; không dùng treat someone with khi mang nghĩa chiêu đãi.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-006",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She burst ------- tears.",
        "choices": [
          {
            "id": "c1",
            "text": "out of"
          },
          {
            "id": "c2",
            "text": "into"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "in"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: into. Burst into tears = bật khóc; burst out thường theo sau V-ing như burst out crying.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-007",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I want you to arrange these ------- order by putting the largest first then the next, and so on.",
        "choices": [
          {
            "id": "c1",
            "text": "on"
          },
          {
            "id": "c2",
            "text": "out of"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "from"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: in. In order = theo thứ tự; ở đây xếp từ lớn đến nhỏ.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-008",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "This apartment would be too crowded for two people, but it is perfect ------- one.",
        "choices": [
          {
            "id": "c1",
            "text": "about"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: for. Perfect for someone = hoàn hảo/phù hợp cho ai; căn hộ phù hợp một người.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-009",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I shall be ready ------- a moment.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: in. In a moment = một lát nữa; không dùng on/with cho ý này.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-010",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Aren’t you glad that you went to the party with us ------- all?",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "after"
          },
          {
            "id": "c3",
            "text": "above"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: after. After all = cuối cùng thì/rốt cuộc; gợi việc đi dự tiệc hóa ra là quyết định tốt.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-011",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We can’t get everything we want from life; we must just make the best ------- it.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "of"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: of. Make the best of something = tận dụng tốt nhất điều mình có; cụm cố định dùng of.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-012",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She’ll come home ------- April.",
        "choices": [
          {
            "id": "c1",
            "text": "on"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: in. In April = vào tháng Tư; tháng dùng in, khác ngày cụ thể thường dùng on.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-013",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "The car went ------- full speed.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: at. At full speed = ở tốc độ tối đa; không dùng with full speed trong cụm chuẩn này.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-014",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Gas is made ------- coal.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: from. Made from coal = được tạo ra từ than, nguyên liệu đã biến đổi; made of nhấn mạnh vật liệu còn nhận thấy.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-015",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He suffers ------- headaches.",
        "choices": [
          {
            "id": "c1",
            "text": "from"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: from. Suffer from headaches = bị/khổ vì đau đầu; suffer from + bệnh hoặc vấn đề.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-016",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "His ideas are all ------- the times.",
        "choices": [
          {
            "id": "c1",
            "text": "like"
          },
          {
            "id": "c2",
            "text": "behind"
          },
          {
            "id": "c3",
            "text": "but"
          },
          {
            "id": "c4",
            "text": "except"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: behind. Behind the times = lạc hậu, không theo kịp thời đại.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-017",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "If you earn a good salary, you can be independent ------- your parents.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "of"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: of. Independent of someone = độc lập, không phụ thuộc ai; không dùng independent to/by.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-018",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "There are many others ------- me who disagree on what you say.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "besides"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "as"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: besides. Besides me = ngoài tôi ra còn có; beside không có s mang nghĩa bên cạnh.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-019",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "These facts may be familiar ------- you.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "into"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: to. Something is familiar to someone = điều gì quen thuộc với ai; someone is familiar with something là cấu trúc ngược lại.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-020",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "------- the most part, his explanations are quite easy to understand.",
        "choices": [
          {
            "id": "c1",
            "text": "For"
          },
          {
            "id": "c2",
            "text": "Through"
          },
          {
            "id": "c3",
            "text": "With"
          },
          {
            "id": "c4",
            "text": "Toward"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: For. For the most part = phần lớn, nhìn chung; đây là cụm cố định.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-021",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He walked ------- the room ------- which we were sitting.",
        "choices": [
          {
            "id": "c1",
            "text": "in - in"
          },
          {
            "id": "c2",
            "text": "in - for"
          },
          {
            "id": "c3",
            "text": "into - in"
          },
          {
            "id": "c4",
            "text": "into - from"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: into - in. Walked into the room là đi vào phòng; in which we were sitting = trong căn phòng mà chúng tôi đang ngồi.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-022",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "The doctor cured me ------- my illness.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "of"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: of. Cure someone of an illness = chữa khỏi bệnh cho ai; giới từ of chỉ bệnh được loại bỏ.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-023",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "It looks better ------- a distance.",
        "choices": [
          {
            "id": "c1",
            "text": "to"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "but"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: at. At a distance = từ xa; cụm cố định dùng at.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-024",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She was engaged ------- him for ten months before they got married.",
        "choices": [
          {
            "id": "c1",
            "text": "to"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: to. Be engaged to someone = đính hôn với ai; không dùng engaged with cho quan hệ đính hôn.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-025",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "What did Mr. Brown die ------- ?",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "by"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "of"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: of. Die of + nguyên nhân bệnh tật thường gặp; câu hỏi hỏi chết vì bệnh/nguyên nhân gì.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-026",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She took me ------- my brother.",
        "choices": [
          {
            "id": "c1",
            "text": "by"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for. Take A for B = nhầm A là B; cô ấy nhầm tôi với anh/em trai tôi.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-027",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I like to shower in the morning, but my roommate likes to shower ------- night.",
        "choices": [
          {
            "id": "c1",
            "text": "at"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: at. At night = vào ban đêm; khác in the morning/afternoon/evening.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-028",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "They like to sit ------- the fire.",
        "choices": [
          {
            "id": "c1",
            "text": "by"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: by. By the fire = cạnh lò sưởi/ngọn lửa; by chỉ vị trí bên cạnh.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-029",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "William is big ------- his age.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "through"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for. Big for his age = lớn so với tuổi; for đặt chuẩn so sánh theo độ tuổi.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-030",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "------- general, that is true. However, there are many exceptions.",
        "choices": [
          {
            "id": "c1",
            "text": "On"
          },
          {
            "id": "c2",
            "text": "In"
          },
          {
            "id": "c3",
            "text": "By"
          },
          {
            "id": "c4",
            "text": "Through"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: In. In general = nhìn chung; đây là cụm trạng ngữ cố định.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-031",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He is a friend ------- mine.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "of"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: of. A friend of mine = một người bạn của tôi; sở hữu kép dùng of + đại từ sở hữu.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-032",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Someone left a box in the garden and I fell ------- it in the dark.",
        "choices": [
          {
            "id": "c1",
            "text": "into"
          },
          {
            "id": "c2",
            "text": "by"
          },
          {
            "id": "c3",
            "text": "off"
          },
          {
            "id": "c4",
            "text": "over"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: over. Fall over a box = vấp phải hộp rồi ngã; fall into là ngã vào trong.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-033",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Let’s drink ------- his success.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "into"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: to. Drink to someone’s success = nâng cốc chúc mừng thành công của ai.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-034",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He turned his back ------- her.",
        "choices": [
          {
            "id": "c1",
            "text": "beside"
          },
          {
            "id": "c2",
            "text": "next to"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: on. Turn one’s back on someone = quay lưng với ai; cụm cố định dùng on.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-035",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He is a man ------- his forties.",
        "choices": [
          {
            "id": "c1",
            "text": "on"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "in"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: in. In his forties = ở độ tuổi bốn mươi; dùng in + sở hữu + nhóm tuổi số nhiều.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-036",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I don’t think that I’m acquainted ------- him.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: with. Be acquainted with someone = quen biết ai.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-037",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Professor Moore called my attention ------- that particular mistake.",
        "choices": [
          {
            "id": "c1",
            "text": "about"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: to. Call someone’s attention to something = hướng sự chú ý của ai đến điều gì.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-038",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "They live ------- rice.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: on. Live on rice = sống chủ yếu nhờ gạo/cơm; live on + nguồn thức ăn/thu nhập.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-039",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "In boxing it is a foul to hit ------- the belt.",
        "choices": [
          {
            "id": "c1",
            "text": "above"
          },
          {
            "id": "c2",
            "text": "over"
          },
          {
            "id": "c3",
            "text": "below"
          },
          {
            "id": "c4",
            "text": "down"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: below. Below the belt = dưới thắt lưng, vị trí đánh bị coi là phạm luật trong quyền Anh.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-040",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He spoke ------- a whisper.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "into"
          },
          {
            "id": "c3",
            "text": "like"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: in. In a whisper = bằng giọng thì thầm; không dùng with a whisper trong cụm được kiểm tra.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-041",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I took him ------- the hand.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "at"
          },
          {
            "id": "c3",
            "text": "by"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: by. Take someone by the hand = nắm/lấy tay ai; by chỉ bộ phận được nắm.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-042",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He stayed home ------- the rain.",
        "choices": [
          {
            "id": "c1",
            "text": "because"
          },
          {
            "id": "c2",
            "text": "because of"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "against"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: because of. Because of + cụm danh từ the rain; because cần mệnh đề có chủ ngữ và động từ.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-043",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I really respect that man ------- his honesty.",
        "choices": [
          {
            "id": "c1",
            "text": "by"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: for. Respect someone for something = kính trọng ai vì phẩm chất/hành động nào đó.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-044",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "There is not much correspondence ------- his ideal and mine.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "among"
          },
          {
            "id": "c3",
            "text": "between"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: between. Correspondence between A and B = sự tương ứng giữa hai điều; among thường dùng cho một nhóm.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 44
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-045",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We might need more food, depending ------- how many people turn up.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: on. Depend on = phụ thuộc vào; depending on how many ... = tùy số người đến.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 45
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-046",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Jane doesn’t spend much money ------- clothes.",
        "choices": [
          {
            "id": "c1",
            "text": "over"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: on. Spend money on something = chi tiền cho thứ gì; spend time doing là cấu trúc khác.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 46
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-047",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She always takes good care ------- her children.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "of"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: of. Take care of someone = chăm sóc ai; good chỉ mức độ chăm sóc tốt.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 47
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-048",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "They translated the letter ------- French.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "into"
          },
          {
            "id": "c4",
            "text": "about"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: into. Translate something into a language = dịch sang ngôn ngữ nào; ở đây dịch sang tiếng Pháp.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 48
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-049",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "The medical center is close ------- campus.",
        "choices": [
          {
            "id": "c1",
            "text": "to"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "up"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: to. Close to campus = gần khuôn viên trường; close khi chỉ khoảng cách đi với to.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 49
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-050",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We went there ------- car and stayed there for the whole day.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "by"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: by. By car = bằng ô tô khi nói phương tiện chung; in a car cần mạo từ hoặc từ hạn định.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 50
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-051",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We started our journey ------- foot.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "by"
          },
          {
            "id": "c3",
            "text": "on"
          },
          {
            "id": "c4",
            "text": "in"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: on. On foot = đi bộ; đây là ngoại lệ không dùng by foot trong cách diễn đạt chuẩn được kiểm tra.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 51
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-052",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He always prevents me ------- doing my duty.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "against"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: from. Prevent someone from V-ing = ngăn ai làm gì.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 52
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-053",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I write letters ------- my right hand.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "by"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: with. With my right hand = bằng tay phải; with chỉ công cụ hoặc bộ phận dùng thực hiện hành động.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 53
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-054",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "She is absent ------- class.",
        "choices": [
          {
            "id": "c1",
            "text": "at"
          },
          {
            "id": "c2",
            "text": "from"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "away"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: from. Be absent from class = vắng học; from chỉ nơi vắng mặt.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 54
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-055",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "It is very nice ------- you to take so much trouble.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "from"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: of. It is nice of you to ... đánh giá phẩm chất người thực hiện; for thường giới thiệu người chịu tác động/đối tượng thực hiện.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 55
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-056",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "You may write ------- pencil.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "by"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: in. Write in pencil = viết bằng bút chì, nhấn mạnh chất liệu nét viết; with a pencil cần thêm a.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 56
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-057",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He congratulated me ------- winning the competition.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "about"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: on. Congratulate someone on V-ing = chúc mừng ai vì việc gì.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 57
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-058",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Mr. Foster lives ------- 667E 76th Street ------- New York.",
        "choices": [
          {
            "id": "c1",
            "text": "in / in"
          },
          {
            "id": "c2",
            "text": "at / in"
          },
          {
            "id": "c3",
            "text": "on / in"
          },
          {
            "id": "c4",
            "text": "in / on"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: at / in. At + địa chỉ cụ thể 667E 76th Street; in + thành phố New York. Hai chỗ trống lần lượt at/in.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 58
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-059",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We reached ------- her house safe and sound.",
        "choices": [
          {
            "id": "c1",
            "text": "at"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "with"
          },
          {
            "id": "c4",
            "text": "no word is needed"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: no word is needed. Reach + địa điểm trực tiếp, không thêm giới từ; reach her house = đến nhà cô ấy.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": false,
        "originalNumber": 59
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-060",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Do you believe ------- ghosts?",
        "choices": [
          {
            "id": "c1",
            "text": "no preposition"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "on"
          },
          {
            "id": "c4",
            "text": "at"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: in. Believe in ghosts = tin ma có tồn tại; believe someone lại là tin lời một người.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": false,
        "originalNumber": 60
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-061",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Those books deal mainly ------- tropical plants.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "up"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: with. Deal with a topic = đề cập/xử lý chủ đề; deal in thường chỉ kinh doanh mặt hàng.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 61
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-062",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "------- the game last evening, my cousin hurt his ankle.",
        "choices": [
          {
            "id": "c1",
            "text": "For"
          },
          {
            "id": "c2",
            "text": "During"
          },
          {
            "id": "c3",
            "text": "Since"
          },
          {
            "id": "c4",
            "text": "From"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: During. During the game = trong lúc trận đấu diễn ra; during + cụm danh từ sự kiện.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 62
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-063",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Water consists ------- oxygen and hydrogen.",
        "choices": [
          {
            "id": "c1",
            "text": "about"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "on"
          },
          {
            "id": "c4",
            "text": "of"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: of. Consist of = bao gồm/cấu thành từ; nước gồm oxygen và hydrogen theo câu bài tập.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 63
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-064",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "There is an increasing demand ------- taller buildings in big cities.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "of"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: for. Demand for something = nhu cầu đối với thứ gì; ở đây nhu cầu nhà cao tầng.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 64
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-065",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "This must be done ------- any price.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "at"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: at. At any price = bằng bất cứ giá nào; cụm cố định dùng at.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 65
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-066",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Your request ------- a scholarship has been taken into account.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "in"
          },
          {
            "id": "c3",
            "text": "under"
          },
          {
            "id": "c4",
            "text": "into"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: for. Request for a scholarship = yêu cầu/đơn xin học bổng; danh từ request đi với for.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 66
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-067",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "He succeeded ------- getting a scholarship.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: in. Succeed in V-ing = thành công trong việc gì; không dùng succeed on/about.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 67
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-068",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We just rested ------- a short time.",
        "choices": [
          {
            "id": "c1",
            "text": "at"
          },
          {
            "id": "c2",
            "text": "since"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "in"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: for. For a short time = trong một khoảng thời gian ngắn; since cần mốc bắt đầu.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 68
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-069",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I prefer coffee ------- tea.",
        "choices": [
          {
            "id": "c1",
            "text": "than"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "from"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: to. Prefer A to B = thích A hơn B; không dùng than trong cấu trúc prefer này.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 69
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-070",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Washington State is famous ------- its apples.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "of"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for. Famous for = nổi tiếng vì điều gì; Washington State nổi tiếng về táo.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 70
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-071",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "People who are afraid ------- heights are called acrophobes.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: of. Afraid of heights = sợ độ cao; tính từ afraid đi với of.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 71
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-072",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Water is essential ------- all life.",
        "choices": [
          {
            "id": "c1",
            "text": "on"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for. Essential for all life = cần thiết cho mọi sự sống; for chỉ đối tượng cần điều đó.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 72
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-073",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "This movie is based ------- a true story.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "at"
          },
          {
            "id": "c3",
            "text": "about"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: on. Based on a true story = dựa trên một câu chuyện có thật.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 73
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-074",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "What he said is contrary ------- common sense.",
        "choices": [
          {
            "id": "c1",
            "text": "for"
          },
          {
            "id": "c2",
            "text": "about"
          },
          {
            "id": "c3",
            "text": "of"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: to. Contrary to = trái với; common sense = lẽ thường.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 74
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-075",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "This style of architecture is typical ------- the Colonial period.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "to"
          },
          {
            "id": "c3",
            "text": "about"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: of. Typical of a period = đặc trưng của một thời kỳ.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 75
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-076",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "This variety of seed is inferior ------- the type I planted last year.",
        "choices": [
          {
            "id": "c1",
            "text": "with"
          },
          {
            "id": "c2",
            "text": "upon"
          },
          {
            "id": "c3",
            "text": "up"
          },
          {
            "id": "c4",
            "text": "to"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: to. Inferior to = kém hơn; không dùng than dù nghĩa có sự so sánh.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 76
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-077",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "I am sure he didn’t break the plate ------- purpose.",
        "choices": [
          {
            "id": "c1",
            "text": "in"
          },
          {
            "id": "c2",
            "text": "at"
          },
          {
            "id": "c3",
            "text": "for"
          },
          {
            "id": "c4",
            "text": "on"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: on. On purpose = cố ý; cụm cố định trái nghĩa by accident = vô tình.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 77
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-078",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We can’t get access ------- the Internet where we live.",
        "choices": [
          {
            "id": "c1",
            "text": "to"
          },
          {
            "id": "c2",
            "text": "on"
          },
          {
            "id": "c3",
            "text": "at"
          },
          {
            "id": "c4",
            "text": "with"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: to. Access to the Internet = quyền/khả năng truy cập Internet; danh từ access đi với to.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 78
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-079",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "Mrs. Liz was accused ------- having stolen the car.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "in"
          },
          {
            "id": "c4",
            "text": "upon"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: of. Be accused of V-ing = bị buộc tội làm gì.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 79
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s03-080",
        "packId": "pack-on-tap-ngu-phap-main-s03",
        "part": 5,
        "prompt": "We are here to provide you ------- the best service possible.",
        "choices": [
          {
            "id": "c1",
            "text": "of"
          },
          {
            "id": "c2",
            "text": "with"
          },
          {
            "id": "c3",
            "text": "to"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: with. Provide someone with something = cung cấp cho ai thứ gì; cấu trúc khác là provide something for someone.",
        "topicTags": [
          "Prepositions",
          "GIỚI TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 80
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s04",
      "title": "Liên từ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 25,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-001",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I wanted to go to the party, ------- I was too tired.",
        "choices": [
          {
            "id": "c1",
            "text": "and"
          },
          {
            "id": "c2",
            "text": "but"
          },
          {
            "id": "c3",
            "text": "so"
          },
          {
            "id": "c4",
            "text": "for"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: but. But nối tương phản: muốn dự tiệc nhưng quá mệt; and bổ sung, so chỉ kết quả, for giải thích nguyên nhân.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-002",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "------- it was raining heavily, we decided to stay at home.",
        "choices": [
          {
            "id": "c1",
            "text": "Although"
          },
          {
            "id": "c2",
            "text": "Because"
          },
          {
            "id": "c3",
            "text": "Therefore"
          },
          {
            "id": "c4",
            "text": "However"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: Because. Because + mệnh đề giải thích lý do ở nhà là mưa lớn; therefore/however không thay liên từ phụ thuộc ở vị trí này.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-003",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "She is studying hard ------- she can pass the final exam.",
        "choices": [
          {
            "id": "c1",
            "text": "because"
          },
          {
            "id": "c2",
            "text": "although"
          },
          {
            "id": "c3",
            "text": "so that"
          },
          {
            "id": "c4",
            "text": "but"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: so that. So that + mệnh đề chỉ mục đích: học để có thể thi đậu; because chỉ nguyên nhân.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-004",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "You can have ------- tea ------- coffee for breakfast.",
        "choices": [
          {
            "id": "c1",
            "text": "both/or"
          },
          {
            "id": "c2",
            "text": "not only/and"
          },
          {
            "id": "c3",
            "text": "either/or"
          },
          {
            "id": "c4",
            "text": "neither/and"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án C: either/or. Either ... or ... là cặp liên từ đúng, nối hai lựa chọn tea và coffee. Ba phương án còn lại ghép sai cặp: both phải đi với and; not only thường đi với but also; neither đi với nor. Nghĩa: Bạn có thể chọn trà hoặc cà phê cho bữa sáng. Điền lần lượt hai thành phần vào hai chỗ trống. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-005",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "He is ------- intelligent ------- handsome.",
        "choices": [
          {
            "id": "c1",
            "text": "both/and"
          },
          {
            "id": "c2",
            "text": "either/and"
          },
          {
            "id": "c3",
            "text": "so/that"
          },
          {
            "id": "c4",
            "text": "as/as"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: both/and. Both ... and ... nối hai tính từ song song: both intelligent and handsome = vừa thông minh vừa đẹp trai. Either phải đi với or; so ... that cần mệnh đề kết quả sau that; as ... as cần đối tượng so sánh sau as, không phải chỉ tính từ handsome. Nghĩa: Anh ấy vừa thông minh vừa đẹp trai. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-006",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I will call you ------- I arrive at the airport.",
        "choices": [
          {
            "id": "c1",
            "text": "when"
          },
          {
            "id": "c2",
            "text": "while"
          },
          {
            "id": "c3",
            "text": "but"
          },
          {
            "id": "c4",
            "text": "so"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: when. When I arrive = khi tôi đến; mệnh đề thời gian tương lai dùng hiện tại đơn, không cần will.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-007",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "He is not a fan of horror movies, ------- is his sister.",
        "choices": [
          {
            "id": "c1",
            "text": "so"
          },
          {
            "id": "c2",
            "text": "but"
          },
          {
            "id": "c3",
            "text": "nor"
          },
          {
            "id": "c4",
            "text": "and"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: nor. Nor + trợ động từ + chủ ngữ để nói người thứ hai cũng không: nor is his sister.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-008",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "She speaks English fluently; ------- , her writing skills need improvement.",
        "choices": [
          {
            "id": "c1",
            "text": "moreover"
          },
          {
            "id": "c2",
            "text": "therefore"
          },
          {
            "id": "c3",
            "text": "however"
          },
          {
            "id": "c4",
            "text": "otherwise"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: however. However diễn tả tương phản: nói lưu loát nhưng kỹ năng viết cần cải thiện; dấu chấm phẩy phù hợp trạng từ nối.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-009",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "Make sure you finish your homework; ------- you won’t be able to watch TV.",
        "choices": [
          {
            "id": "c1",
            "text": "otherwise"
          },
          {
            "id": "c2",
            "text": "therefore"
          },
          {
            "id": "c3",
            "text": "because"
          },
          {
            "id": "c4",
            "text": "although"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: otherwise. Otherwise = nếu không thì; không làm xong bài sẽ không được xem TV.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-010",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "We have to wait ------- the rain stops.",
        "choices": [
          {
            "id": "c1",
            "text": "since"
          },
          {
            "id": "c2",
            "text": "until"
          },
          {
            "id": "c3",
            "text": "after"
          },
          {
            "id": "c4",
            "text": "while"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: until. Wait until = chờ cho đến khi; until đánh dấu điểm kết thúc việc chờ.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-011",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "------- he has a lot of money, he lives a very simple life.",
        "choices": [
          {
            "id": "c1",
            "text": "Because"
          },
          {
            "id": "c2",
            "text": "As soon as"
          },
          {
            "id": "c3",
            "text": "Even though"
          },
          {
            "id": "c4",
            "text": "So that"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: Even though. Even though + mệnh đề chỉ nhượng bộ: dù có nhiều tiền vẫn sống giản dị.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-012",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I was listening to music ------- my brother was reading a book.",
        "choices": [
          {
            "id": "c1",
            "text": "because of"
          },
          {
            "id": "c2",
            "text": "while"
          },
          {
            "id": "c3",
            "text": "during"
          },
          {
            "id": "c4",
            "text": "despite"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án B: while. Sau chỗ trống là mệnh đề my brother was reading a book, nên cần liên từ while. Because of, during và despite là giới từ/cụm giới từ, không đứng trực tiếp trước mệnh đề đầy đủ này. Hai hành động đang diễn ra đồng thời trong quá khứ: tôi nghe nhạc trong khi anh/em trai đọc sách. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-013",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "------- its high price, many people still buy that phone.",
        "choices": [
          {
            "id": "c1",
            "text": "Although"
          },
          {
            "id": "c2",
            "text": "Because of"
          },
          {
            "id": "c3",
            "text": "In spite of"
          },
          {
            "id": "c4",
            "text": "Because"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: In spite of. In spite of + cụm danh từ its high price; although cần mệnh đề, because of chỉ nguyên nhân không hợp ý nhượng bộ.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-014",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "You should bring an umbrella ------- it rains.",
        "choices": [
          {
            "id": "c1",
            "text": "in case"
          },
          {
            "id": "c2",
            "text": "because of"
          },
          {
            "id": "c3",
            "text": "despite"
          },
          {
            "id": "c4",
            "text": "so that"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: in case. In case + mệnh đề = phòng khi, nói việc chuẩn bị trước cho khả năng trời mưa. Because of và despite không đi trực tiếp với mệnh đề it rains; so that chỉ mục đích, trong khi mang ô không nhằm khiến trời mưa. Nghĩa: Bạn nên mang ô để phòng khi trời mưa. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-015",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "He passed the exam ------- his hard work.",
        "choices": [
          {
            "id": "c1",
            "text": "because"
          },
          {
            "id": "c2",
            "text": "because of"
          },
          {
            "id": "c3",
            "text": "despite"
          },
          {
            "id": "c4",
            "text": "although"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: because of. Because of + danh từ his hard work = nhờ chăm chỉ; because/although cần mệnh đề.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-016",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I like this car; ------- , it is too expensive for me.",
        "choices": [
          {
            "id": "c1",
            "text": "moreover"
          },
          {
            "id": "c2",
            "text": "on the other hand"
          },
          {
            "id": "c3",
            "text": "as a result"
          },
          {
            "id": "c4",
            "text": "for example"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: on the other hand. On the other hand đưa ra mặt đối lập: thích xe nhưng giá quá cao; as a result là kết quả, moreover bổ sung.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-017",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "He ------- woke up late ------- missed the bus.",
        "choices": [
          {
            "id": "c1",
            "text": "not only/but also"
          },
          {
            "id": "c2",
            "text": "either/and"
          },
          {
            "id": "c3",
            "text": "both/but"
          },
          {
            "id": "c4",
            "text": "so/that"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: not only/but also. Not only ... but also ... nối hai cụm động từ song song: woke up late và missed the bus. Either/and và both/but ghép sai cặp. So ... that cần cấu trúc khác, chẳng hạn woke up so late that he missed the bus. Nghĩa: Anh ấy không chỉ dậy muộn mà còn lỡ xe buýt. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-018",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "You won’t succeed ------- you work hard.",
        "choices": [
          {
            "id": "c1",
            "text": "if"
          },
          {
            "id": "c2",
            "text": "when"
          },
          {
            "id": "c3",
            "text": "unless"
          },
          {
            "id": "c4",
            "text": "while"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: unless. Unless = if not: sẽ không thành công nếu không làm việc chăm chỉ.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-019",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "She didn’t say a word, ------- just looked at me.",
        "choices": [
          {
            "id": "c1",
            "text": "because of"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "despite"
          },
          {
            "id": "c4",
            "text": "but"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: but. But nối hai cụm động từ tương phản cùng chủ ngữ: didn’t say a word nhưng just looked at me. Because of và despite không nối trực tiếp cụm looked đã chia thì; for khi nối nguyên nhân cần một mệnh đề đầy đủ, ở đây sau nó thiếu chủ ngữ. Nghĩa: Cô ấy chẳng nói lời nào mà chỉ nhìn tôi. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-020",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "He was so tired ------- he fell asleep immediately.",
        "choices": [
          {
            "id": "c1",
            "text": "so"
          },
          {
            "id": "c2",
            "text": "that"
          },
          {
            "id": "c3",
            "text": "because"
          },
          {
            "id": "c4",
            "text": "and"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: that. So + tính từ + that + mệnh đề: mệt đến mức ngủ ngay; chỗ trống cần that.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-021",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I respect him ------- he is an honest man.",
        "choices": [
          {
            "id": "c1",
            "text": "so"
          },
          {
            "id": "c2",
            "text": "for"
          },
          {
            "id": "c3",
            "text": "but"
          },
          {
            "id": "c4",
            "text": "yet"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: for. For là liên từ giải thích nguyên nhân trong văn phong trang trọng: kính trọng vì anh ấy trung thực.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-022",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "------- being tired, he completed the race.",
        "choices": [
          {
            "id": "c1",
            "text": "Although"
          },
          {
            "id": "c2",
            "text": "Despite"
          },
          {
            "id": "c3",
            "text": "Because"
          },
          {
            "id": "c4",
            "text": "Because of"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: Despite. Despite + V-ing chỉ nhượng bộ: dù mệt vẫn hoàn thành cuộc đua; although cần mệnh đề đầy đủ.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-023",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "I would rather stay at home ------- go out tonight.",
        "choices": [
          {
            "id": "c1",
            "text": "than"
          },
          {
            "id": "c2",
            "text": "but"
          },
          {
            "id": "c3",
            "text": "or"
          },
          {
            "id": "c4",
            "text": "and"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: than. Would rather V than V = thích làm việc này hơn việc kia; hai động từ stay và go cùng nguyên mẫu không to.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-024",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "The weather was bad; ------- , the flight was delayed.",
        "choices": [
          {
            "id": "c1",
            "text": "however"
          },
          {
            "id": "c2",
            "text": "therefore"
          },
          {
            "id": "c3",
            "text": "moreover"
          },
          {
            "id": "c4",
            "text": "nevertheless"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: therefore. Therefore nối kết quả: thời tiết xấu nên chuyến bay chậm; however/nevertheless diễn tả đối lập.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s04-025",
        "packId": "pack-on-tap-ngu-phap-main-s04",
        "part": 5,
        "prompt": "------- you apologize, I will not forgive you.",
        "choices": [
          {
            "id": "c1",
            "text": "If"
          },
          {
            "id": "c2",
            "text": "As long as"
          },
          {
            "id": "c3",
            "text": "Unless"
          },
          {
            "id": "c4",
            "text": "Provided that"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: Unless. Unless you apologize = nếu bạn không xin lỗi; khớp ý không tha thứ trừ khi xin lỗi.",
        "topicTags": [
          "Conjunctions",
          "LIÊN TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s05",
      "title": "Định lượng từ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 40,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-001",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "I’m afraid we no longer sell that model of laptop because we had ------- a lot of complaints.",
        "choices": [
          {
            "id": "c1",
            "text": "so"
          },
          {
            "id": "c2",
            "text": "such"
          },
          {
            "id": "c3",
            "text": "enough"
          },
          {
            "id": "c4",
            "text": "too"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: such. Such a lot of complaints là cụm đúng: rất nhiều lời phàn nàn; so a lot không đúng cấu trúc.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-002",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "There was hardly ------- money left in the bank account.",
        "choices": [
          {
            "id": "c1",
            "text": "no more"
          },
          {
            "id": "c2",
            "text": "some"
          },
          {
            "id": "c3",
            "text": "no"
          },
          {
            "id": "c4",
            "text": "any"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: any. Hardly mang nghĩa gần phủ định nên dùng any money; không chồng hardly với no để diễn đạt nghĩa không còn tiền.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-003",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Gardeners transplant bushes and flowers by moving them from one place to ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "other"
          },
          {
            "id": "c2",
            "text": "others"
          },
          {
            "id": "c3",
            "text": "another"
          },
          {
            "id": "c4",
            "text": "each other"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: another. From one place to another = từ nơi này sang nơi khác; another đứng độc lập chỉ một nơi khác.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-004",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "In the developed world, there are not ------- jobs left which don’t use computers to carry out many daily tasks.",
        "choices": [
          {
            "id": "c1",
            "text": "some"
          },
          {
            "id": "c2",
            "text": "any"
          },
          {
            "id": "c3",
            "text": "none"
          },
          {
            "id": "c4",
            "text": "much."
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: any. Not any jobs = không còn công việc nào; jobs đếm được số nhiều nên không dùng much.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-005",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "She spent ------- her free time watching TV.",
        "choices": [
          {
            "id": "c1",
            "text": "a few"
          },
          {
            "id": "c2",
            "text": "most of"
          },
          {
            "id": "c3",
            "text": "a lot"
          },
          {
            "id": "c4",
            "text": "most"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: most of. Most of her free time cần of trước cụm có sở hữu her; most her không đúng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-006",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Unfortunately, we’ve made -------",
        "choices": [
          {
            "id": "c1",
            "text": "little progress"
          },
          {
            "id": "c2",
            "text": "a few progresses"
          },
          {
            "id": "c3",
            "text": "little progresses"
          },
          {
            "id": "c4",
            "text": "few progress"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: little progress. Progress không đếm được; little progress = ít tiến bộ, hợp Unfortunately; không thêm s hoặc dùng a few.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-007",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "------- students in our class is 45.",
        "choices": [
          {
            "id": "c1",
            "text": "A large amount of"
          },
          {
            "id": "c2",
            "text": "A lot of"
          },
          {
            "id": "c3",
            "text": "A number of"
          },
          {
            "id": "c4",
            "text": "The number of"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: The number of. The number of + danh từ số nhiều + động từ số ít: số học sinh là 45; a number of mang nghĩa nhiều học sinh.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-008",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "The two cars for sale were in poor condition, so I didn’t buy -------",
        "choices": [
          {
            "id": "c1",
            "text": "neither of them"
          },
          {
            "id": "c2",
            "text": "either of them"
          },
          {
            "id": "c3",
            "text": "each of them"
          },
          {
            "id": "c4",
            "text": "none of them"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: either of them. Didn’t buy either of them = không mua chiếc nào trong hai chiếc; tránh phủ định kép didn’t ... neither.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-009",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "The pair of jeans I bought for my son didn’t fit him, so I went to the store and asked for -------",
        "choices": [
          {
            "id": "c1",
            "text": "the other ones"
          },
          {
            "id": "c2",
            "text": "others ones"
          },
          {
            "id": "c3",
            "text": "another pair"
          },
          {
            "id": "c4",
            "text": "another jeans"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: another pair. Another pair = một chiếc/quần khác tính theo đơn vị pair; jeans là danh từ số nhiều không đi trực tiếp với another.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-010",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "This winter wasn’t ------- as difficult as last winter.",
        "choices": [
          {
            "id": "c1",
            "text": "almost"
          },
          {
            "id": "c2",
            "text": "nearly"
          },
          {
            "id": "c3",
            "text": "closely"
          },
          {
            "id": "c4",
            "text": "just"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: nearly. Not nearly as difficult as = không khó bằng, chênh lệch đáng kể; not almost as không phải cách diễn đạt tự nhiên tương đương.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-011",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "If you book in advance you will ------- certainly have a better table at our restaurant.",
        "choices": [
          {
            "id": "c1",
            "text": "mostly"
          },
          {
            "id": "c2",
            "text": "almost"
          },
          {
            "id": "c3",
            "text": "most"
          },
          {
            "id": "c4",
            "text": "the most"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: almost. Almost certainly = gần như chắc chắn; almost bổ nghĩa mức độ cho certainly, mostly không mang nghĩa đó.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-012",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Our village had ------- money available for education that the schools had to close.",
        "choices": [
          {
            "id": "c1",
            "text": "so little"
          },
          {
            "id": "c2",
            "text": "such little"
          },
          {
            "id": "c3",
            "text": "so much"
          },
          {
            "id": "c4",
            "text": "such much"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: so little. So little money ... that ... = ít tiền đến mức; money không đếm được và hệ quả trường đóng cửa cho thấy thiếu tiền.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-013",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "I had a red pen but I seem to have lost it; I think I’d better buy ------- one.",
        "choices": [
          {
            "id": "c1",
            "text": "the other"
          },
          {
            "id": "c2",
            "text": "another"
          },
          {
            "id": "c3",
            "text": "others"
          },
          {
            "id": "c4",
            "text": "the"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: another. Another one = một chiếc khác thay cho bút đã mất; the other cần bộ hai đối tượng xác định.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-014",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "------- companies have announced economic losses recently.",
        "choices": [
          {
            "id": "c1",
            "text": "A large number of"
          },
          {
            "id": "c2",
            "text": "A several of"
          },
          {
            "id": "c3",
            "text": "A great deal of"
          },
          {
            "id": "c4",
            "text": "Plenty of the"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: A large number of. A large number of + companies đếm được số nhiều; a great deal of dùng với không đếm được. Plenty of the companies vẫn đúng nếu ngữ cảnh đã xác định nhóm công ty, nhưng nguồn không nêu nhóm đó.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-015",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "In life, ------- can make a mistake; we’re all human.",
        "choices": [
          {
            "id": "c1",
            "text": "anyone"
          },
          {
            "id": "c2",
            "text": "someone"
          },
          {
            "id": "c3",
            "text": "some people"
          },
          {
            "id": "c4",
            "text": "not anybody"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: anyone. Anyone = bất kỳ ai, hợp nhận định ai cũng có thể sai; not anybody phủ định không hợp ý.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-016",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Peter has been studying for almost three years and he will have this degree and return to his country in ------- six months.",
        "choices": [
          {
            "id": "c1",
            "text": "others"
          },
          {
            "id": "c2",
            "text": "the other"
          },
          {
            "id": "c3",
            "text": "other"
          },
          {
            "id": "c4",
            "text": "another"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: another. Another six months = thêm sáu tháng nữa; another vẫn dùng trước số + đơn vị thời gian. Nguồn ghi this degree, có vẻ muốn nói his degree.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-017",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "John contributed fifty dollars, but he wishes he could contribute ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "more fifty dollars"
          },
          {
            "id": "c2",
            "text": "one other fifty dollars"
          },
          {
            "id": "c3",
            "text": "the same amount also"
          },
          {
            "id": "c4",
            "text": "another fifty"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: another fifty. Another fifty = thêm 50 đô nữa; another + số lượng, không dùng more fifty mà dùng fifty more.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-018",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "In the United States, ------- the states but Hawaii is an island.",
        "choices": [
          {
            "id": "c1",
            "text": "all of"
          },
          {
            "id": "c2",
            "text": "neither of"
          },
          {
            "id": "c3",
            "text": "none of"
          },
          {
            "id": "c4",
            "text": "no of"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: none of. None of the states but Hawaii is ... nghĩa là không bang nào ngoại trừ Hawaii; none of phù hợp phủ định và is. Dữ kiện địa lý được đơn giản hóa: Hawaii là quần đảo, không phải chỉ một đảo.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-019",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "------- of transportation has given someone the idea for a new type of toy.",
        "choices": [
          {
            "id": "c1",
            "text": "Mostly forms"
          },
          {
            "id": "c2",
            "text": "Most of form"
          },
          {
            "id": "c3",
            "text": "Almost forms"
          },
          {
            "id": "c4",
            "text": "Almost every form"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: Almost every form. Almost every + danh từ đếm được số ít diễn tả gần như mọi loại, phù hợp động từ has số ít. Mostly là trạng từ không tạo cụm danh từ này; most of cần danh từ có từ hạn định hoặc đại từ; almost không bổ nghĩa trực tiếp cho forms. Nghĩa: Gần như mỗi loại phương tiện vận chuyển đều từng gợi ý tưởng cho một loại đồ chơi. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-020",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Joanne has only one eye, she lost -------",
        "choices": [
          {
            "id": "c1",
            "text": "other"
          },
          {
            "id": "c2",
            "text": "other ones"
          },
          {
            "id": "c3",
            "text": "another one"
          },
          {
            "id": "c4",
            "text": "the other"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: the other. The other = bên còn lại trong hai mắt; another không xác định mắt còn lại của cùng người.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-021",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "------- her fiction describes women in unhappy marriages.",
        "choices": [
          {
            "id": "c1",
            "text": "Many of"
          },
          {
            "id": "c2",
            "text": "A large number of"
          },
          {
            "id": "c3",
            "text": "A great volume of"
          },
          {
            "id": "c4",
            "text": "Much of"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: Much of. Much of her fiction: fiction không đếm được, có từ sở hữu her nên dùng much of.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-022",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Is there ------- at all I can help you with?",
        "choices": [
          {
            "id": "c1",
            "text": "every"
          },
          {
            "id": "c2",
            "text": "anything"
          },
          {
            "id": "c3",
            "text": "some"
          },
          {
            "id": "c4",
            "text": "any"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án B: anything. Anything là đại từ có thể đứng độc lập và phù hợp câu hỏi nhấn mạnh at all. Every, some và any trong các phương án này không tạo được danh ngữ độc lập chỉ việc cần giúp trong cấu trúc đang xét; chẳng hạn cần any task, không phải any at all I can help you with. With cuối câu hoàn tất help someone with something. Nghĩa: Có việc gì tôi có thể giúp bạn không? Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-023",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "John paid $2 for his meal, ------- he had thought it would cost.",
        "choices": [
          {
            "id": "c1",
            "text": "not as much"
          },
          {
            "id": "c2",
            "text": "not so much as"
          },
          {
            "id": "c3",
            "text": "less as"
          },
          {
            "id": "c4",
            "text": "not so many as"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: not so much as. Not so much as he had thought it would cost = không nhiều bằng dự tính; money không đếm được nên không dùng many.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-024",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "He has ------- money in the bank.",
        "choices": [
          {
            "id": "c1",
            "text": "a large number of"
          },
          {
            "id": "c2",
            "text": "lot of"
          },
          {
            "id": "c3",
            "text": "a lots of"
          },
          {
            "id": "c4",
            "text": "a lot of"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: a lot of. A lot of money là cụm đúng; lot of thiếu a, a lots of sai, a large number of không dùng với money.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-025",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "In a laboratory test, Engine A used 5 liters of fuel and Engine B used 20 liters to perform the same task. Engine A therefore consumed ------- fuel than Engine B did.",
        "choices": [
          {
            "id": "c1",
            "text": "much less"
          },
          {
            "id": "c2",
            "text": "much fewer"
          },
          {
            "id": "c3",
            "text": "a lot higher"
          },
          {
            "id": "c4",
            "text": "far more"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: much less. Engine A dùng 5 lít, ít hơn rõ rệt so với 20 lít của B, nên chọn much less = ít hơn nhiều. Fuel không đếm được nên không dùng fewer; higher không kết hợp trực tiếp với fuel để chỉ lượng nhiên liệu trong cấu trúc này; far more trái dữ kiện. Nghĩa: Động cơ A tiêu thụ ít nhiên liệu hơn nhiều so với B. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-026",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Only three of the students in my class are girls; ------- are all boys.",
        "choices": [
          {
            "id": "c1",
            "text": "the other"
          },
          {
            "id": "c2",
            "text": "another"
          },
          {
            "id": "c3",
            "text": "other student"
          },
          {
            "id": "c4",
            "text": "the others"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: the others. The others thay cho toàn bộ những học sinh còn lại trong lớp đã xác định, nên phù hợp are số nhiều. The other chỉ một đối tượng nếu không có danh từ theo sau; another chỉ một đối tượng khác và không phù hợp are số nhiều; other student thiếu từ hạn định và sai số. Three of the students cần the trước nhóm học sinh xác định. Nghĩa: Chỉ ba học sinh trong lớp là nữ, số còn lại đều là nam. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-027",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Researchers have discovered 2,000 types of new plants but also say ------- are at risk.",
        "choices": [
          {
            "id": "c1",
            "text": "many"
          },
          {
            "id": "c2",
            "text": "much"
          },
          {
            "id": "c3",
            "text": "the other"
          },
          {
            "id": "c4",
            "text": "variety"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: many. Many thay cho nhiều loại cây đếm được số nhiều; much dùng danh từ không đếm được; the other chỉ một đối tượng còn lại.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-028",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "There is too ------- bad news on TV tonight.",
        "choices": [
          {
            "id": "c1",
            "text": "many"
          },
          {
            "id": "c2",
            "text": "much"
          },
          {
            "id": "c3",
            "text": "a few"
          },
          {
            "id": "c4",
            "text": "a little"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: much. Too much bad news: news không đếm được dù có s; too many dùng số nhiều đếm được.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-029",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "He bought three shirts; one for him and ------- for his children.",
        "choices": [
          {
            "id": "c1",
            "text": "others"
          },
          {
            "id": "c2",
            "text": "the other"
          },
          {
            "id": "c3",
            "text": "another"
          },
          {
            "id": "c4",
            "text": "the others"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: the others. The others chỉ hai chiếc áo còn lại trong ba chiếc đã xác định; the other chỉ một chiếc, another chỉ một chiếc khác.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-030",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "------- study hard before an examination.",
        "choices": [
          {
            "id": "c1",
            "text": "Most the students"
          },
          {
            "id": "c2",
            "text": "Most of the students"
          },
          {
            "id": "c3",
            "text": "Most of students"
          },
          {
            "id": "c4",
            "text": "Almost students"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: Most of the students. Most of the students đúng vì the students là nhóm xác định; có thể viết Most students nhưng không viết Most of students.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-031",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "There are several means of mass communication. The newspaper is one. Television is -------",
        "choices": [
          {
            "id": "c1",
            "text": "another"
          },
          {
            "id": "c2",
            "text": "other"
          },
          {
            "id": "c3",
            "text": "the another"
          },
          {
            "id": "c4",
            "text": "the other"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: another. Another = một phương tiện khác trong nhiều phương tiện, không phải chỉ hai; the other thường chỉ đối tượng cuối của bộ hai.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-032",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "They asked me a lot of questions, ------- I couldn’t answer.",
        "choices": [
          {
            "id": "c1",
            "text": "much of which"
          },
          {
            "id": "c2",
            "text": "both of them"
          },
          {
            "id": "c3",
            "text": "neither of which"
          },
          {
            "id": "c4",
            "text": "most of which"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: most of which. Most of which mở mệnh đề quan hệ chỉ phần lớn câu hỏi không trả lời được; không dùng them để nối trực tiếp hai mệnh đề bằng dấu phẩy.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-033",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Actors and pop stars are known for their extravagant spending habits and ------- end up broke.",
        "choices": [
          {
            "id": "c1",
            "text": "them all"
          },
          {
            "id": "c2",
            "text": "many of whom"
          },
          {
            "id": "c3",
            "text": "many of them"
          },
          {
            "id": "c4",
            "text": "many of which"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: many of them. Sau and cần chủ ngữ mệnh đề độc lập many of them; many of whom tạo mệnh đề quan hệ không phù hợp cách nối hiện tại.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-034",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "He had spent ------- time writing an essay on his childhood.",
        "choices": [
          {
            "id": "c1",
            "text": "a few"
          },
          {
            "id": "c2",
            "text": "a large number of"
          },
          {
            "id": "c3",
            "text": "a great deal of"
          },
          {
            "id": "c4",
            "text": "many"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: a great deal of. A great deal of time: time là danh từ không đếm được; a few/many/a large number of dùng đếm được.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-035",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "The writer has ------- finished his new novel.",
        "choices": [
          {
            "id": "c1",
            "text": "most of"
          },
          {
            "id": "c2",
            "text": "most"
          },
          {
            "id": "c3",
            "text": "all most"
          },
          {
            "id": "c4",
            "text": "almost"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: almost. Almost finished = gần hoàn thành; most of cần cụm danh từ, all most không phải từ đúng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-036",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Unemployment is a serious problem in the area; there are ------- jobs for the people there.",
        "choices": [
          {
            "id": "c1",
            "text": "a little"
          },
          {
            "id": "c2",
            "text": "a few"
          },
          {
            "id": "c3",
            "text": "few"
          },
          {
            "id": "c4",
            "text": "little"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: few. Few jobs = ít việc, hàm ý thiếu, hợp serious problem; a few tích cực hơn, little dùng không đếm được.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-037",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "All the boys are good at cooking, but ------- is as good as the girls.",
        "choices": [
          {
            "id": "c1",
            "text": "either"
          },
          {
            "id": "c2",
            "text": "neither"
          },
          {
            "id": "c3",
            "text": "every"
          },
          {
            "id": "c4",
            "text": "none"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: none. None nói không người nào trong nhóm nhiều người; neither/either thường dùng khi có hai, every cần danh từ theo sau.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-038",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "Scandinavia consists of four countries. One is Denmark, ------- are Finland, Norway and Sweden.",
        "choices": [
          {
            "id": "c1",
            "text": "others"
          },
          {
            "id": "c2",
            "text": "the other"
          },
          {
            "id": "c3",
            "text": "the others"
          },
          {
            "id": "c4",
            "text": "other"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: the others. The others chỉ toàn bộ những nước còn lại đã liệt kê; nguồn dùng Scandinavia theo nghĩa rộng, trong khi nhóm có Finland thường được gọi chính xác hơn là Nordic countries.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-039",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "People can usually obtain a sufficient ------- of calcium from the food they eat.",
        "choices": [
          {
            "id": "c1",
            "text": "variety"
          },
          {
            "id": "c2",
            "text": "source"
          },
          {
            "id": "c3",
            "text": "amount"
          },
          {
            "id": "c4",
            "text": "number"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án C: amount. A sufficient amount of calcium = một lượng canxi đủ. Calcium không đếm được nên kết hợp amount, không dùng number. Variety nhấn mạnh nhiều loại chứ không phải lượng canxi; source là nguồn, không diễn đạt lượng cần hấp thu. Mạo từ a đứng trước sufficient amount vì amount là danh từ đếm được số ít. Nghĩa: Mọi người thường có thể nhận đủ canxi từ thực phẩm. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s05-040",
        "packId": "pack-on-tap-ngu-phap-main-s05",
        "part": 5,
        "prompt": "They have considered all the 100 applications, ------- seem suitable for the position.",
        "choices": [
          {
            "id": "c1",
            "text": "neither of them"
          },
          {
            "id": "c2",
            "text": "neither of which"
          },
          {
            "id": "c3",
            "text": "none of them"
          },
          {
            "id": "c4",
            "text": "none of which"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: none of which. None of which nối mệnh đề quan hệ phủ định với 100 đơn đã nhắc; neither chỉ hai, none of them sau dấu phẩy tạo lỗi nối câu trong văn viết chuẩn.",
        "topicTags": [
          "Quantifiers",
          "ĐỊNH LƯỢNG TỪ"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s06",
      "title": "Sự hoà hợp giữa chủ ngữ và động từ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 50,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-001",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Each of you ------- a share in the work.",
        "choices": [
          {
            "id": "c1",
            "text": "to have"
          },
          {
            "id": "c2",
            "text": "have"
          },
          {
            "id": "c3",
            "text": "having"
          },
          {
            "id": "c4",
            "text": "has"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: has. Each of you có trung tâm each số ít nên has; không chia theo you.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-002",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "There are small ------- between British and American English.",
        "choices": [
          {
            "id": "c1",
            "text": "differences"
          },
          {
            "id": "c2",
            "text": "difference"
          },
          {
            "id": "c3",
            "text": "differently"
          },
          {
            "id": "c4",
            "text": "different"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: differences. There are và small cần danh từ số nhiều differences; differently là trạng từ.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-003",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The quality of these recordings ------- not very good.",
        "choices": [
          {
            "id": "c1",
            "text": "be"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "am"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. Chủ ngữ chính quality số ít nên is; of these recordings không quyết định số động từ.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-004",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The number of students in this class ------- limited to thirty.",
        "choices": [
          {
            "id": "c1",
            "text": "be"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "is"
          },
          {
            "id": "c4",
            "text": "am"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: is. The number of ... = số lượng, là số ít nên is; khác a number of ... + động từ số nhiều.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-005",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Not only the air but also the oceans ------- been polluted seriously.",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "is having"
          },
          {
            "id": "c4",
            "text": "are having"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: have. Not only ... but also chia theo thành phần gần động từ oceans số nhiều: have been polluted.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-006",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Working in the factory ------- not what children should do",
        "choices": [
          {
            "id": "c1",
            "text": "be"
          },
          {
            "id": "c2",
            "text": "is"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "have been"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is. Working in the factory là một cụm danh động từ làm chủ ngữ số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-007",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "A large number of students in this school ------- English quite fluently",
        "choices": [
          {
            "id": "c1",
            "text": "speaks"
          },
          {
            "id": "c2",
            "text": "is speaking"
          },
          {
            "id": "c3",
            "text": "has spoken"
          },
          {
            "id": "c4",
            "text": "speak"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: speak. A large number of students = nhiều học sinh, chia số nhiều speak.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-008",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Bread and butter ------- what she asks for",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "will be"
          },
          {
            "id": "c4",
            "text": "have been"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Bread and butter được hiểu là một món ăn/bữa ăn kết hợp nên dùng is trong câu này.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-009",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Either John or his wife ------- breakfast each morning.",
        "choices": [
          {
            "id": "c1",
            "text": "make"
          },
          {
            "id": "c2",
            "text": "is making"
          },
          {
            "id": "c3",
            "text": "makes"
          },
          {
            "id": "c4",
            "text": "made"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: makes. Either ... or chia theo chủ ngữ gần nhất his wife số ít; mỗi sáng là thói quen nên makes.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-010",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Some of the milk I bought last night ------- not fresh anymore.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "is being"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "are"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Some of the milk chia theo milk không đếm được nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-011",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The use of credit cards in place of cash ------- increased rapidly in recent years.",
        "choices": [
          {
            "id": "c1",
            "text": "to have"
          },
          {
            "id": "c2",
            "text": "have"
          },
          {
            "id": "c3",
            "text": "has"
          },
          {
            "id": "c4",
            "text": "having"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: has. Trung tâm chủ ngữ là use số ít, không phải cards; in recent years dùng has increased.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-012",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Neither of the answers ------- correct.",
        "choices": [
          {
            "id": "c1",
            "text": "are"
          },
          {
            "id": "c2",
            "text": "is"
          },
          {
            "id": "c3",
            "text": "be"
          },
          {
            "id": "c4",
            "text": "have been"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: is. Neither of the answers trong văn phạm trang trọng chia số ít is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-013",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The weather in the southern states ------- very hot during the summer.",
        "choices": [
          {
            "id": "c1",
            "text": "get"
          },
          {
            "id": "c2",
            "text": "have got"
          },
          {
            "id": "c3",
            "text": "is got"
          },
          {
            "id": "c4",
            "text": "gets"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: gets. Weather không đếm được, chủ ngữ số ít nên gets; không dùng is got cho trạng thái trở nên nóng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-014",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Each of the residents in this community ------- responsible for keeping this park clean.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "am"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "were"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Each of the residents số ít nên is, dù residents có s.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-015",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Anything ------- better than going to the movies tonight.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "am"
          },
          {
            "id": "c4",
            "text": "were"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Anything là đại từ bất định số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-016",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "What time ------- the news on TV?",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "am"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "were"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. News không đếm được, chia số ít is dù tận cùng bằng s.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-017",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The effects of cigarette smoking ------- been proven to be extremely harmful.",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "to have"
          },
          {
            "id": "c4",
            "text": "having"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: have. Trung tâm chủ ngữ là effects số nhiều, nên dùng have been proven, không phải has. To have và having không làm trợ động từ hữu hạn của câu này. Sau proven to cần be trước tính từ harmful: have been proven to be harmful = đã được chứng minh là có hại. Không chia theo cigarette smoking vì đó chỉ là thành phần trong cụm of. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-018",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Advertisements on TV ------- becoming more competitive than ever before.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "was"
          },
          {
            "id": "c4",
            "text": "was"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: are. Advertisements số nhiều nên are becoming; cụm on TV không đổi số chủ ngữ.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-019",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "One of the countries I would like to visit ------- Italy",
        "choices": [
          {
            "id": "c1",
            "text": "be"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "am"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. One of the countries có trung tâm one số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-020",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "A pair of jeans ------- in the washing machine right now.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "have been"
          },
          {
            "id": "c4",
            "text": "were"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: is. Chủ ngữ có trung tâm a pair số ít nên dùng is, dù jeans có hình thức số nhiều. Right now xác định trạng thái hiện tại, loại were; have been vừa sai hòa hợp với a pair vừa không phù hợp nghĩa thời gian đang xét. Nghĩa: Một chiếc quần jeans hiện đang ở trong máy giặt. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-021",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Three weeks ------- not enough for the holiday.",
        "choices": [
          {
            "id": "c1",
            "text": "are"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "was"
          },
          {
            "id": "c4",
            "text": "be"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: was. Three weeks được xem là một lượng thời gian nên động từ số ít; trong các lựa chọn chỉ was là dạng hữu hạn số ít phù hợp.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-022",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Linguistics ------- out the ways in which languages work",
        "choices": [
          {
            "id": "c1",
            "text": "find"
          },
          {
            "id": "c2",
            "text": "founded"
          },
          {
            "id": "c3",
            "text": "finds"
          },
          {
            "id": "c4",
            "text": "finding"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: finds. Linguistics là tên ngành ngôn ngữ học, hình thức có s nhưng số ít nên finds.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-023",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The Philippines ------- of more than 7000 islands.",
        "choices": [
          {
            "id": "c1",
            "text": "consist"
          },
          {
            "id": "c2",
            "text": "consisting"
          },
          {
            "id": "c3",
            "text": "consisted"
          },
          {
            "id": "c4",
            "text": "consists"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: consists. The Philippines là tên một quốc gia nên dùng consists số ít, không chia theo s ở tên.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-024",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The police ------- to interview Fred about a robbery.",
        "choices": [
          {
            "id": "c1",
            "text": "want"
          },
          {
            "id": "c2",
            "text": "wants"
          },
          {
            "id": "c3",
            "text": "wanting"
          },
          {
            "id": "c4",
            "text": "has wanted"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: want. The police chỉ tập thể nhiều cảnh sát, dùng want số nhiều.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-025",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Can I borrow your scissors? Mine ------- not sharp enough.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "isn’t"
          },
          {
            "id": "c4",
            "text": "aren’t"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: are. Scissors là danh từ số nhiều; mine thay my scissors nên are.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-026",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "A number of workers ------- asked for a rise since last month.",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "having"
          },
          {
            "id": "c4",
            "text": "to have"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: have. A number of workers số nhiều; since last month dùng have asked.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-027",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Some foods ------- him ill.",
        "choices": [
          {
            "id": "c1",
            "text": "to make"
          },
          {
            "id": "c2",
            "text": "making"
          },
          {
            "id": "c3",
            "text": "makes"
          },
          {
            "id": "c4",
            "text": "make"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: make. Foods số nhiều nên make; không dùng makes.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-028",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "There ------- only a few people at the meeting last night.",
        "choices": [
          {
            "id": "c1",
            "text": "been"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "was"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: were. A few people số nhiều và last night là quá khứ: were.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-029",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Collecting old coins and paper notes ------- one of my hobbies.",
        "choices": [
          {
            "id": "c1",
            "text": "being"
          },
          {
            "id": "c2",
            "text": "were"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. Collecting old coins and paper notes là một hoạt động sưu tập làm chủ ngữ số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-030",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Mr. Thomson with his wife and his three children ------- abroad",
        "choices": [
          {
            "id": "c1",
            "text": "to be"
          },
          {
            "id": "c2",
            "text": "have been"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. With his wife ... là thành phần bổ sung; chủ ngữ Mr. Thomson số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-031",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Neither Daisy nor I ------- glad to do that.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "has been"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: am. Neither ... nor chia theo thành phần gần động từ I nên am.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-032",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The picture of the soldiers ------- back a lot of memories.",
        "choices": [
          {
            "id": "c1",
            "text": "bring"
          },
          {
            "id": "c2",
            "text": "bringed"
          },
          {
            "id": "c3",
            "text": "brings"
          },
          {
            "id": "c4",
            "text": "are bringing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: brings. Trung tâm chủ ngữ picture số ít, không phải soldiers: brings back memories.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-033",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Anybody who ------- a fever must go home immediately",
        "choices": [
          {
            "id": "c1",
            "text": "has"
          },
          {
            "id": "c2",
            "text": "have"
          },
          {
            "id": "c3",
            "text": "is"
          },
          {
            "id": "c4",
            "text": "are"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has. Anybody số ít nên động từ trong mệnh đề who cũng là has.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-034",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The English ------- to drink tea.",
        "choices": [
          {
            "id": "c1",
            "text": "likes"
          },
          {
            "id": "c2",
            "text": "to like"
          },
          {
            "id": "c3",
            "text": "like"
          },
          {
            "id": "c4",
            "text": "has liked"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: like. The English chỉ người Anh nói chung, là nhóm người số nhiều nên like.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-035",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "That you take a computer course ------- very necessary.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "have been"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. That you take a computer course là cả mệnh đề làm chủ ngữ, được xem là số ít nên is.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-036",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "A pack of wild dogs ------- frightened all the ducks away",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "have been"
          },
          {
            "id": "c4",
            "text": "has been"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has. A pack of wild dogs chia theo trung tâm pack số ít nên has frightened.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-037",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Every elementary school teacher ------- to take this examination.",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "having"
          },
          {
            "id": "c4",
            "text": "to have"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án B: has. Every + danh từ đếm được số ít tạo chủ ngữ số ít: every elementary school teacher. Động từ chính phải là has, tạo has to take = phải dự thi. Have sai hòa hợp; having và to have không làm động từ hữu hạn ở đây. Nghĩa: Mỗi giáo viên tiểu học đều phải làm bài kiểm tra này. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-038",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The jury at this trial ------- members of the local communities",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "be"
          },
          {
            "id": "c4",
            "text": "has been"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: are. Jury ở đây được xét như các thành viên khác nhau, thể hiện bằng members nên dùng are; cách chia này thường gặp trong Anh-Anh.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-039",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Most of the students in this class ------- from South Africa",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "am"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "comes"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: are. Most of the students chia theo students số nhiều nên are.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-040",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Half of the money ------- to Mr. Lam.",
        "choices": [
          {
            "id": "c1",
            "text": "belongs"
          },
          {
            "id": "c2",
            "text": "belong"
          },
          {
            "id": "c3",
            "text": "to belong"
          },
          {
            "id": "c4",
            "text": "belonging"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: belongs. Half of the money chia theo money không đếm được nên belongs.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-041",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The office ------- on weekends, so visitors cannot enter.",
        "choices": [
          {
            "id": "c1",
            "text": "close"
          },
          {
            "id": "c2",
            "text": "closing"
          },
          {
            "id": "c3",
            "text": "is closed"
          },
          {
            "id": "c4",
            "text": "are closed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án C: is closed. The office là số ít nên is closed mô tả trạng thái đóng cửa. Are closed sai hòa hợp; close là động từ nguyên mẫu chưa chia đúng với office; closing thiếu trợ động từ. So visitors cannot enter giải thích hệ quả của việc đóng cửa. Nghĩa: Văn phòng đóng cửa vào cuối tuần nên khách không thể vào. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-042",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The keys of the house ------- lost.",
        "choices": [
          {
            "id": "c1",
            "text": "have"
          },
          {
            "id": "c2",
            "text": "has"
          },
          {
            "id": "c3",
            "text": "have been"
          },
          {
            "id": "c4",
            "text": "has been"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: have been. Keys số nhiều, ở thể bị động hoàn thành have been lost = đã bị mất; has been sai hòa hợp.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-043",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Ten miles ------- a very long distance for us to walk.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "be"
          },
          {
            "id": "c4",
            "text": "am"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Ten miles được xem là một khoảng cách nên is, không chia theo hình thức miles.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-044",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The books borrowed from the library ------- on my desk.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "is being"
          },
          {
            "id": "c4",
            "text": "are being"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: are. Trung tâm books số nhiều nên are; borrowed from the library là cụm bổ nghĩa bị động.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 44
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-045",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The boy who won the two medals ------- a friend of mine.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "be"
          },
          {
            "id": "c4",
            "text": "being"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Chủ ngữ chính the boy số ít nên is, không chia theo two medals trong mệnh đề quan hệ.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 45
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-046",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Three fifths of the land in this area ------- used for community purposes.",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "have"
          },
          {
            "id": "c4",
            "text": "has"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is. Three fifths of chia theo land không đếm được nên is used.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 46
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-047",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The pilot along with his passengers ------- rescued last night.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "have been"
          },
          {
            "id": "c3",
            "text": "was"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: was. Along with his passengers không đổi số của pilot; last night yêu cầu quá khứ nên was rescued.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 47
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-048",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Where ------- your family live?",
        "choices": [
          {
            "id": "c1",
            "text": "is"
          },
          {
            "id": "c2",
            "text": "are"
          },
          {
            "id": "c3",
            "text": "doing"
          },
          {
            "id": "c4",
            "text": "does"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: does. Hỏi hiện tại đơn với động từ thường live cần trợ động từ does khi xem your family là một đơn vị số ít. Sau does giữ live nguyên mẫu. Is/are không dùng trực tiếp với live nguyên mẫu; doing không phải trợ động từ hữu hạn. Câu này dùng cách chia family như một đơn vị. Nghĩa: Gia đình bạn sống ở đâu? Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 48
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-049",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "The trousers you bought for me ------- me.",
        "choices": [
          {
            "id": "c1",
            "text": "doesn’t fit"
          },
          {
            "id": "c2",
            "text": "don’t fit"
          },
          {
            "id": "c3",
            "text": "isn’t fit"
          },
          {
            "id": "c4",
            "text": "aren’t fit"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: don’t fit. Trousers là danh từ số nhiều nên don’t fit; fit ở đây là động từ thường, không dùng isn’t/aren’t fit.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 49
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s06-050",
        "packId": "pack-on-tap-ngu-phap-main-s06",
        "part": 5,
        "prompt": "Either you or I ------- able to do that job.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "is"
          },
          {
            "id": "c3",
            "text": "are"
          },
          {
            "id": "c4",
            "text": "be"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: am. Either ... or chia theo chủ ngữ gần nhất I nên am.",
        "topicTags": [
          "Subject-Verb Agreement",
          "SỰ HOÀ HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ"
        ],
        "difficulty": "easy",
        "allowsChoiceShuffle": true,
        "originalNumber": 50
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s07",
      "title": "Mệnh đề quan hệ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 64,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-001",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The local shop deals in many kinds of hair products ------- from reasonably priced shampoos to rather expensive dyes.",
        "choices": [
          {
            "id": "c1",
            "text": "ranging"
          },
          {
            "id": "c2",
            "text": "are ranged"
          },
          {
            "id": "c3",
            "text": "range"
          },
          {
            "id": "c4",
            "text": "are ranging"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: ranging. Ranging from ... to ... là cụm V-ing chủ động rút gọn, bổ nghĩa products; không thêm động từ hữu hạn sau deals.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-002",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The students ------- yesterday voiced their objection to the school’s new regulations.",
        "choices": [
          {
            "id": "c1",
            "text": "interview"
          },
          {
            "id": "c2",
            "text": "who interview"
          },
          {
            "id": "c3",
            "text": "interviewing"
          },
          {
            "id": "c4",
            "text": "interviewed"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: interviewed. Students được phỏng vấn nên dùng interviewed = who were interviewed; yesterday chỉ thời gian phỏng vấn.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-003",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "These news apps ------- a few months ago have become ubiquitous.",
        "choices": [
          {
            "id": "c1",
            "text": "launching"
          },
          {
            "id": "c2",
            "text": "launched"
          },
          {
            "id": "c3",
            "text": "to launch"
          },
          {
            "id": "c4",
            "text": "which launch"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: launched. Apps được ra mắt nên launched = which were launched; không dùng launching chủ động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-004",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The police wanted to ask some residents ------- the fire.",
        "choices": [
          {
            "id": "c1",
            "text": "to witness"
          },
          {
            "id": "c2",
            "text": "witnessing"
          },
          {
            "id": "c3",
            "text": "witnessed"
          },
          {
            "id": "c4",
            "text": "that witnessing"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: witnessing. Residents là những người chứng kiến đám cháy: witnessing rút gọn who witnessed/were witnessing.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-005",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The brochure ------- all the hotels in the area and their facilities will be given to each guest free of charge.",
        "choices": [
          {
            "id": "c1",
            "text": "details"
          },
          {
            "id": "c2",
            "text": "to detail"
          },
          {
            "id": "c3",
            "text": "detailing"
          },
          {
            "id": "c4",
            "text": "detailed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: detailing. Brochure liệt kê thông tin nên detailing chủ động, rút gọn which details; detailed mang nghĩa được mô tả.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-006",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The woman ------- with the virus has made a speedy recovery.",
        "choices": [
          {
            "id": "c1",
            "text": "infected"
          },
          {
            "id": "c2",
            "text": "infecting"
          },
          {
            "id": "c3",
            "text": "infection"
          },
          {
            "id": "c4",
            "text": "to infect"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: infected. Người phụ nữ bị nhiễm virus nên infected = who was infected; infection là danh từ.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-007",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Lucy is the most creative student ------- the competition.",
        "choices": [
          {
            "id": "c1",
            "text": "join"
          },
          {
            "id": "c2",
            "text": "joined"
          },
          {
            "id": "c3",
            "text": "to join"
          },
          {
            "id": "c4",
            "text": "who join"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: to join. Sau so sánh nhất the most creative có thể dùng to join làm cụm quan hệ rút gọn; join chưa chia hoặc who join sai hòa hợp.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-008",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Those ------- part in the seminar will be given a free copy of the book “Road to IELTS”.",
        "choices": [
          {
            "id": "c1",
            "text": "take"
          },
          {
            "id": "c2",
            "text": "took"
          },
          {
            "id": "c3",
            "text": "taken"
          },
          {
            "id": "c4",
            "text": "taking"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: taking. Those taking part = những người tham gia; V-ing mang nghĩa chủ động, take part in = tham gia.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-009",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The new president ------- a few weeks ago contracted the coronavirus.",
        "choices": [
          {
            "id": "c1",
            "text": "who elected"
          },
          {
            "id": "c2",
            "text": "to elect"
          },
          {
            "id": "c3",
            "text": "elected"
          },
          {
            "id": "c4",
            "text": "electing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: elected. President được bầu nên elected = who was elected; who elected thiếu nghĩa bị động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-010",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "These activities ------- for young people become less popular.",
        "choices": [
          {
            "id": "c1",
            "text": "designed"
          },
          {
            "id": "c2",
            "text": "designing"
          },
          {
            "id": "c3",
            "text": "design"
          },
          {
            "id": "c4",
            "text": "to design"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: designed. Activities được thiết kế cho người trẻ nên designed là phân từ bị động rút gọn.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-011",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "James was the only male student ------- in the yoga class.",
        "choices": [
          {
            "id": "c1",
            "text": "who participate"
          },
          {
            "id": "c2",
            "text": "to participating"
          },
          {
            "id": "c3",
            "text": "participated"
          },
          {
            "id": "c4",
            "text": "to participate"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: to participate. Sau the only male student dùng nguyên mẫu có to để bổ nghĩa: to participate in the yoga class. Who participate sai hòa hợp với student số ít; to participating không đúng nguyên mẫu; participated không thể tự làm mệnh đề quan hệ chủ động khi thiếu từ nối. Nghĩa: James là nam sinh duy nhất tham gia lớp yoga. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-012",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The students ------- truant yesterday were punished by the head teacher.",
        "choices": [
          {
            "id": "c1",
            "text": "playing"
          },
          {
            "id": "c2",
            "text": "to play"
          },
          {
            "id": "c3",
            "text": "play"
          },
          {
            "id": "c4",
            "text": "played"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: playing. Students playing truant = học sinh trốn học; playing rút gọn mệnh đề chủ động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-013",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "You should change your lifestyle by turning off the lights when not in use to reduce the amount of electricity -------.",
        "choices": [
          {
            "id": "c1",
            "text": "is consuming"
          },
          {
            "id": "c2",
            "text": "consuming"
          },
          {
            "id": "c3",
            "text": "consumed"
          },
          {
            "id": "c4",
            "text": "is consumed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: consumed. Electricity bị tiêu thụ nên consumed = which is consumed; không thêm is vì không có đại từ quan hệ nối mệnh đề.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-014",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Your bill ------- $20 should be fully paid by Thursday, September 30.",
        "choices": [
          {
            "id": "c1",
            "text": "total"
          },
          {
            "id": "c2",
            "text": "totalled"
          },
          {
            "id": "c3",
            "text": "totalling"
          },
          {
            "id": "c4",
            "text": "to total"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: totalling. Bill totalling $20 = hóa đơn có tổng 20 đô; totalling là phân từ hiện tại chủ động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-015",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "We provide some temporary shelters for those ------- by the recent storm.",
        "choices": [
          {
            "id": "c1",
            "text": "affected"
          },
          {
            "id": "c2",
            "text": "to affect"
          },
          {
            "id": "c3",
            "text": "affecting"
          },
          {
            "id": "c4",
            "text": "affect"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: affected. Those affected by the storm = những người bị bão ảnh hưởng; affected mang nghĩa bị động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-016",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Ha Nam was the first province ------- social distancing rules.",
        "choices": [
          {
            "id": "c1",
            "text": "relax"
          },
          {
            "id": "c2",
            "text": "to relax"
          },
          {
            "id": "c3",
            "text": "relaxed"
          },
          {
            "id": "c4",
            "text": "relaxation"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: to relax. Sau the first province dùng to relax; relax social distancing rules = nới lỏng giãn cách.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-017",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The whole area was devastated by the hurricane ------- unexpectedly last night.",
        "choices": [
          {
            "id": "c1",
            "text": "came"
          },
          {
            "id": "c2",
            "text": "to come"
          },
          {
            "id": "c3",
            "text": "which was come"
          },
          {
            "id": "c4",
            "text": "coming"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: coming. Coming bổ nghĩa hurricane bằng cụm phân từ chủ động; came thiếu đại từ quan hệ, which was come sai vì come không có bị động như vậy.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-018",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The government grudgingly supported businesses ------- by the pandemic.",
        "choices": [
          {
            "id": "c1",
            "text": "hit"
          },
          {
            "id": "c2",
            "text": "to hit"
          },
          {
            "id": "c3",
            "text": "which hit"
          },
          {
            "id": "c4",
            "text": "hitting"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: hit. Businesses hit by the pandemic = doanh nghiệp bị đại dịch tác động; hit là quá khứ phân từ cũng viết hit.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-019",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The phones ------- in that shop are the most affordable in town.",
        "choices": [
          {
            "id": "c1",
            "text": "sold"
          },
          {
            "id": "c2",
            "text": "selling"
          },
          {
            "id": "c3",
            "text": "to sell"
          },
          {
            "id": "c4",
            "text": "sell"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: sold. Phones sold in that shop = điện thoại được bán ở cửa hàng; sold mang nghĩa bị động.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-020",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Even little things like turning off the lights when not in use can make a difference to the amount of electricity -------.",
        "choices": [
          {
            "id": "c1",
            "text": "is consuming"
          },
          {
            "id": "c2",
            "text": "consuming"
          },
          {
            "id": "c3",
            "text": "consumed"
          },
          {
            "id": "c4",
            "text": "is consumed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: consumed. Electricity consumed = điện được tiêu thụ; consumed rút gọn which is consumed, không dùng consuming.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-021",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The local shop deals in many kinds of hair products ------- from reasonably priced shampoos to rather expensive dyes.",
        "choices": [
          {
            "id": "c1",
            "text": "ranging"
          },
          {
            "id": "c2",
            "text": "are ranged"
          },
          {
            "id": "c3",
            "text": "range"
          },
          {
            "id": "c4",
            "text": "are ranging"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: ranging. Ranging from ... to ... bổ nghĩa chủ động cho products; đây là câu trùng với câu 1 cùng chủ điểm. Câu này trùng nội dung với q-s07-001; giữ lại để bảo toàn thứ tự nguồn.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses",
          "Duplicate"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-022",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "However, the information ------- was gathered in a recent study of Australian teenagers’ use of and attitudes towards technology suggests that this view doesn’t reflect the reality of their everyday existence.",
        "choices": [
          {
            "id": "c1",
            "text": "when"
          },
          {
            "id": "c2",
            "text": "which"
          },
          {
            "id": "c3",
            "text": "where"
          },
          {
            "id": "c4",
            "text": "who"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: which. Information là vật và chỗ trống làm chủ ngữ của was gathered nên which; when/where là trạng từ quan hệ, who chỉ người.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-023",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "We should participate in the movements ------- the natural environment.",
        "choices": [
          {
            "id": "c1",
            "text": "organizing to conserve"
          },
          {
            "id": "c2",
            "text": "organized conserving"
          },
          {
            "id": "c3",
            "text": "which organize to conserve"
          },
          {
            "id": "c4",
            "text": "organized to conserve"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: organized to conserve. Movements organized to conserve ... = phong trào được tổ chức để bảo tồn; organized là bị động, to conserve chỉ mục đích.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-024",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The leaves of the white mulberry provide food for silkworms, ------- silk fabrics are woven.",
        "choices": [
          {
            "id": "c1",
            "text": "from cocoons"
          },
          {
            "id": "c2",
            "text": "whose cocoons"
          },
          {
            "id": "c3",
            "text": "from whose cocoons"
          },
          {
            "id": "c4",
            "text": "whose cocoons are from"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: from whose cocoons. From whose cocoons = từ kén của những con tằm đó; whose chỉ sở hữu, from cần cho nghĩa dệt vải từ kén.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-025",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Sam’s uncle, ------- is very rich, came to visit our orphanage.",
        "choices": [
          {
            "id": "c1",
            "text": "that"
          },
          {
            "id": "c2",
            "text": "who"
          },
          {
            "id": "c3",
            "text": "whom"
          },
          {
            "id": "c4",
            "text": "whose"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: who. Sau dấu phẩy dùng who làm chủ ngữ chỉ người; that không dùng trong mệnh đề quan hệ không xác định này.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-026",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The party, ------- I was the guest of honor, was extremely enjoyable.",
        "choices": [
          {
            "id": "c1",
            "text": "at that"
          },
          {
            "id": "c2",
            "text": "at which"
          },
          {
            "id": "c3",
            "text": "to that"
          },
          {
            "id": "c4",
            "text": "to which"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: at which. At the party nên dùng at which; không dùng at that sau giới từ trong mệnh đề quan hệ.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-027",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Books and magazines ------- around made his room very untidy.",
        "choices": [
          {
            "id": "c1",
            "text": "that lying"
          },
          {
            "id": "c2",
            "text": "laying"
          },
          {
            "id": "c3",
            "text": "which lied"
          },
          {
            "id": "c4",
            "text": "lying"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: lying. Lying around = nằm rải rác, là cụm phân từ hiện tại bổ nghĩa chủ động cho books and magazines. Lie ở nghĩa nằm có V-ing là lying; laying thuộc lay = đặt thứ gì và cần tân ngữ. That lying thiếu động từ hữu hạn; which lied dùng lied nghĩa là nói dối, không phải quá khứ lay của lie = nằm. Nghĩa: Sách báo nằm vương vãi khiến phòng rất bừa bộn. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-028",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Maria Sharapova became the first Russian ------- a Wimbledon single title.",
        "choices": [
          {
            "id": "c1",
            "text": "to win"
          },
          {
            "id": "c2",
            "text": "that was winning"
          },
          {
            "id": "c3",
            "text": "who wins"
          },
          {
            "id": "c4",
            "text": "which won"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: to win. Sau the first Russian dùng to win, diễn tả người Nga đầu tiên giành danh hiệu.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-029",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Dr. Sales is a person ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "in that I don’t have much confidence"
          },
          {
            "id": "c2",
            "text": "whom I don’t have much confidence in him."
          },
          {
            "id": "c3",
            "text": "in whom I don’t have much confidence"
          },
          {
            "id": "c4",
            "text": "I don’t have much confidence"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: in whom I don’t have much confidence. Have confidence in someone nên in whom I don’t have much confidence; không dùng that sau giới từ hoặc lặp him.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-030",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The president, ------- by a reporter, reassured his people that he was in perfect health.",
        "choices": [
          {
            "id": "c1",
            "text": "who interviewed"
          },
          {
            "id": "c2",
            "text": "interviewing"
          },
          {
            "id": "c3",
            "text": "interviewed"
          },
          {
            "id": "c4",
            "text": "whom was interviewed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: interviewed. President được phỏng vấn nên interviewed by a reporter; who interviewed là chủ động, whom was sai chức năng.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-031",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The new computer system ------- for the post office will allow accounts to be managed over the Internet.",
        "choices": [
          {
            "id": "c1",
            "text": "design"
          },
          {
            "id": "c2",
            "text": "designing"
          },
          {
            "id": "c3",
            "text": "designed"
          },
          {
            "id": "c4",
            "text": "which designing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: designed. System được thiết kế cho bưu điện nên designed = which was designed.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-032",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "This is the strongest sandstorm ------- China in almost ten years.",
        "choices": [
          {
            "id": "c1",
            "text": "affect"
          },
          {
            "id": "c2",
            "text": "which affecting"
          },
          {
            "id": "c3",
            "text": "affected"
          },
          {
            "id": "c4",
            "text": "to affect"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: to affect. Sau so sánh nhất the strongest sandstorm có thể dùng nguyên mẫu to affect để bổ nghĩa: cơn bão cát mạnh nhất tác động đến Trung Quốc trong gần mười năm. Affect nguyên mẫu không to không tạo cụm bổ nghĩa đúng; which affecting thiếu động từ hữu hạn; affected mang nghĩa bị tác động và không phù hợp tân ngữ China ở đây. Sandstorm thay cách diễn đạt dust and sand weather chưa tự nhiên của nguồn. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-033",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The sandstorm originated in Mongolia, ------- six people have died, and 81 are missing, according to Chinese state-run outlet The Paper.",
        "choices": [
          {
            "id": "c1",
            "text": "whom"
          },
          {
            "id": "c2",
            "text": "where"
          },
          {
            "id": "c3",
            "text": "which"
          },
          {
            "id": "c4",
            "text": "why"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: where. Mongolia là địa điểm nơi sáu người thiệt mạng nên where = in which.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-034",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Your online identity, in particular your Facebook profile, could in fact be considered the ultimate CV- a personal, honest and spontaneous description of how you see yourself and how those ------- know you see you.",
        "choices": [
          {
            "id": "c1",
            "text": "what"
          },
          {
            "id": "c2",
            "text": "who"
          },
          {
            "id": "c3",
            "text": "which"
          },
          {
            "id": "c4",
            "text": "where"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: who. Those who know you = những người biết bạn; who là chủ ngữ chỉ người.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-035",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I couldn’t remember the time ------- there was no internet.",
        "choices": [
          {
            "id": "c1",
            "text": "what"
          },
          {
            "id": "c2",
            "text": "who"
          },
          {
            "id": "c3",
            "text": "which"
          },
          {
            "id": "c4",
            "text": "when"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: when. The time when ... = thời kỳ khi chưa có Internet; when chỉ thời gian.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-036",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "It was in this house ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "where I was born"
          },
          {
            "id": "c2",
            "text": "in which I was born"
          },
          {
            "id": "c3",
            "text": "that I was born"
          },
          {
            "id": "c4",
            "text": "I was born"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: that I was born. Đây là câu chẻ It was + thành phần nhấn mạnh + that + mệnh đề; chọn that I was born.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-037",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Marie Curie was the first and only woman ------- two Nobel Prizes.",
        "choices": [
          {
            "id": "c1",
            "text": "who win"
          },
          {
            "id": "c2",
            "text": "that wins"
          },
          {
            "id": "c3",
            "text": "to have won"
          },
          {
            "id": "c4",
            "text": "to be won"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: to have won. Sau the first and only woman dùng to have won để diễn tả thành tích đã đạt; won là chủ động, không phải người được trao bằng cấu trúc to be won.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-038",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I think the Chinese are the people ------- habits are the most peculiar to us.",
        "choices": [
          {
            "id": "c1",
            "text": "which"
          },
          {
            "id": "c2",
            "text": "whom"
          },
          {
            "id": "c3",
            "text": "when"
          },
          {
            "id": "c4",
            "text": "whose"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: whose. People whose habits ... cần whose chỉ sở hữu: thói quen của những người đó.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-039",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I saw several buildings, ------- were damaged by the earthquake.",
        "choices": [
          {
            "id": "c1",
            "text": "most of which"
          },
          {
            "id": "c2",
            "text": "most of them"
          },
          {
            "id": "c3",
            "text": "all of whom"
          },
          {
            "id": "c4",
            "text": "some of whose"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: most of which. Most of which mở mệnh đề quan hệ chỉ phần lớn tòa nhà; most of them gây nối hai mệnh đề chỉ bằng dấu phẩy.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-040",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The people to ------- she was speaking didn’t know German.",
        "choices": [
          {
            "id": "c1",
            "text": "who"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "that"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: whom. Sau giới từ to dùng whom chỉ người; không dùng that, whose hoặc who trong văn phạm trang trọng được kiểm tra.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-041",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The restaurant ------- we had our dinner was the most expensive in this city.",
        "choices": [
          {
            "id": "c1",
            "text": "where"
          },
          {
            "id": "c2",
            "text": "which"
          },
          {
            "id": "c3",
            "text": "when"
          },
          {
            "id": "c4",
            "text": "that"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: where. Restaurant là nơi dùng bữa nên where = at which; which/that sẽ thiếu giới từ nếu thay trong cấu trúc này.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-042",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I never forget the time ------- my motorbike broke down in a very crowded street.",
        "choices": [
          {
            "id": "c1",
            "text": "where"
          },
          {
            "id": "c2",
            "text": "what"
          },
          {
            "id": "c3",
            "text": "when"
          },
          {
            "id": "c4",
            "text": "in which"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: when. The time when motorbike broke down cần when chỉ thời gian; where chỉ nơi, in which kém tự nhiên với thời điểm sự cố này.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-043",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The top model about ------- I was telling you is on TV now.",
        "choices": [
          {
            "id": "c1",
            "text": "who"
          },
          {
            "id": "c2",
            "text": "which"
          },
          {
            "id": "c3",
            "text": "that"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: whom. Sau about dùng whom chỉ người; that không đứng ngay sau giới từ trong mệnh đề quan hệ.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-044",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Mexico City, ------- is the fastest growing city in the world, has a very large population.",
        "choices": [
          {
            "id": "c1",
            "text": "what"
          },
          {
            "id": "c2",
            "text": "that"
          },
          {
            "id": "c3",
            "text": "whose"
          },
          {
            "id": "c4",
            "text": "which"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: which. Mexico City là vật/địa danh, mệnh đề sau dấu phẩy làm chủ ngữ nên which; that không dùng không xác định.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 44
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-045",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Before coming to my office, please check the appointments ------- are listed in my official calendar.",
        "choices": [
          {
            "id": "c1",
            "text": "that"
          },
          {
            "id": "c2",
            "text": "why"
          },
          {
            "id": "c3",
            "text": "when"
          },
          {
            "id": "c4",
            "text": "where"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: that. Appointments là vật, chỗ trống làm chủ ngữ của are listed nên that; why/when/where không làm chủ ngữ như vậy.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 45
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-046",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "She is talking about the author, ------- book is one of the best-sellers this year.",
        "choices": [
          {
            "id": "c1",
            "text": "which"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "that"
          },
          {
            "id": "c4",
            "text": "who"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: whose. Author whose book = tác giả có cuốn sách; whose đứng trước danh từ book để chỉ sở hữu.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 46
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-047",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "He bought all the books ------- are needed for the next exam.",
        "choices": [
          {
            "id": "c1",
            "text": "that"
          },
          {
            "id": "c2",
            "text": "what"
          },
          {
            "id": "c3",
            "text": "those"
          },
          {
            "id": "c4",
            "text": "who"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: that. Books là vật và chỗ trống làm chủ ngữ của are needed nên that; không dùng what sau tiền ngữ books.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 47
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-048",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The reason ------- I phoned him was to invite him to a party.",
        "choices": [
          {
            "id": "c1",
            "text": "what"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "why"
          },
          {
            "id": "c4",
            "text": "which"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: why. The reason why ... = lý do vì sao; why tương ứng for which.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 48
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-049",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I don’t agree with ------- you have just said.",
        "choices": [
          {
            "id": "c1",
            "text": "what"
          },
          {
            "id": "c2",
            "text": "who"
          },
          {
            "id": "c3",
            "text": "when"
          },
          {
            "id": "c4",
            "text": "which"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: what. What you have just said = điều bạn vừa nói; what đã bao gồm nghĩa the thing that nên không cần tiền ngữ.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 49
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-050",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The children, ------- parents are famous teachers, are taught well.",
        "choices": [
          {
            "id": "c1",
            "text": "that"
          },
          {
            "id": "c2",
            "text": "whom"
          },
          {
            "id": "c3",
            "text": "whose"
          },
          {
            "id": "c4",
            "text": "their"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: whose. Children whose parents ... = trẻ có cha mẹ ...; whose chỉ quan hệ sở hữu với parents.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 50
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-051",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Do you know the boy to ------- we spoke at the party last week?",
        "choices": [
          {
            "id": "c1",
            "text": "which"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "who"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: whom. Sau giới từ to dùng whom chỉ người trong mệnh đề quan hệ: the boy to whom we spoke. Who có thể làm tân ngữ trong nhiều cấu trúc hiện đại, nhưng không dùng thay whom ngay sau giới từ đặt trước trong mẫu văn viết trang trọng này. Whose chỉ sở hữu; which chỉ vật. Nghĩa: Bạn có biết cậu bé chúng ta đã nói chuyện cùng ở bữa tiệc tuần trước không? Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 51
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-052",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The man ------- next to me kept talking during the film, ------- really annoyed me.",
        "choices": [
          {
            "id": "c1",
            "text": "having sat/ that"
          },
          {
            "id": "c2",
            "text": "sitting/ which"
          },
          {
            "id": "c3",
            "text": "to sit/ what"
          },
          {
            "id": "c4",
            "text": "sitting/ who"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: sitting/ which. Sitting next to me rút gọn mệnh đề chủ động; which sau dấu phẩy chỉ cả việc người đó nói chuyện gây khó chịu.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Reduced Relative Clauses"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 52
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-053",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The old lady ------- we were traveling told us her life story.",
        "choices": [
          {
            "id": "c1",
            "text": "of whom"
          },
          {
            "id": "c2",
            "text": "with whom"
          },
          {
            "id": "c3",
            "text": "whose"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: with whom. Travel with someone nên with whom; whom đứng sau giới từ chỉ người.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 53
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-054",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The purse ------- she had lost last week was found yesterday.",
        "choices": [
          {
            "id": "c1",
            "text": "which"
          },
          {
            "id": "c2",
            "text": "what"
          },
          {
            "id": "c3",
            "text": "whose"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: which. Purse là vật và làm tân ngữ của lost nên which; what không đi sau tiền ngữ purse.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 54
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-055",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "I called my cousin, ------- is a mechanic, to fix my car, ------- was broken.",
        "choices": [
          {
            "id": "c1",
            "text": "who/ which"
          },
          {
            "id": "c2",
            "text": "that/ all of which"
          },
          {
            "id": "c3",
            "text": "who/ all of which"
          },
          {
            "id": "c4",
            "text": "who/ what"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: who/ which. Cousin là người làm chủ ngữ nên who; car là vật làm chủ ngữ nên which. Không dùng all of which cho một chiếc xe ở đây.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 55
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-056",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "My only blue tie, ------- Richard wants to wear, is really an expensive one.",
        "choices": [
          {
            "id": "c1",
            "text": "that"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "which"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: which. Tie là vật, làm tân ngữ của wear trong mệnh đề sau dấu phẩy nên which; that không dùng không xác định.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 56
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-057",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "This is the village ------- my family and I lived for six years.",
        "choices": [
          {
            "id": "c1",
            "text": "in which"
          },
          {
            "id": "c2",
            "text": "that"
          },
          {
            "id": "c3",
            "text": "on which"
          },
          {
            "id": "c4",
            "text": "in where"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: in which. Live in the village nên in which = where; không viết in where hoặc on which cho nơi sinh sống.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 57
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-058",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Is that the man ------- ?",
        "choices": [
          {
            "id": "c1",
            "text": "whom you lent the money"
          },
          {
            "id": "c2",
            "text": "whom did you lend the money"
          },
          {
            "id": "c3",
            "text": "you lent the money"
          },
          {
            "id": "c4",
            "text": "you lent the money to"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: you lent the money to. Lend money to someone nên you lent the money to; A thiếu to, B đảo câu hỏi bên trong mệnh đề quan hệ, C cũng thiếu to.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 58
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-059",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "She is a famous actress ------- everybody admires.",
        "choices": [
          {
            "id": "c1",
            "text": "to whom"
          },
          {
            "id": "c2",
            "text": "whom"
          },
          {
            "id": "c3",
            "text": "to which"
          },
          {
            "id": "c4",
            "text": "of whom"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: whom. Admire someone không có giới từ nên whom làm tân ngữ; to whom/of whom sẽ thừa giới từ.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 59
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-060",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The wedding party, ------- I was the guest of honor, was jovial.",
        "choices": [
          {
            "id": "c1",
            "text": "at that"
          },
          {
            "id": "c2",
            "text": "to which"
          },
          {
            "id": "c3",
            "text": "to that"
          },
          {
            "id": "c4",
            "text": "at which"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: at which. Be guest of honor at the party nên at which; không dùng to which cho quan hệ này.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 60
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-061",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The food ------- I like best of all is pie alamode.",
        "choices": [
          {
            "id": "c1",
            "text": "who"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "whom"
          },
          {
            "id": "c4",
            "text": "that"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: that. Food là vật và làm tân ngữ của like nên that; who/whom chỉ người, whose chỉ sở hữu.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 61
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-062",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "The old building ------- was behind the local church fell down.",
        "choices": [
          {
            "id": "c1",
            "text": "of which"
          },
          {
            "id": "c2",
            "text": "which"
          },
          {
            "id": "c3",
            "text": "whose"
          },
          {
            "id": "c4",
            "text": "whom"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: which. Building là vật, chỗ trống làm chủ ngữ của was nên which.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 62
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-063",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "Lots of women work in the office, ------- enjoy their work.",
        "choices": [
          {
            "id": "c1",
            "text": "many of them"
          },
          {
            "id": "c2",
            "text": "of which many"
          },
          {
            "id": "c3",
            "text": "many of which"
          },
          {
            "id": "c4",
            "text": "many of whom"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: many of whom. Many of whom chỉ nhiều người phụ nữ, nối mệnh đề sau dấu phẩy; many of them tạo lỗi nối câu trong văn viết chuẩn.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 63
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s07-064",
        "packId": "pack-on-tap-ngu-phap-main-s07",
        "part": 5,
        "prompt": "They would like a teacher ------- native language is English.",
        "choices": [
          {
            "id": "c1",
            "text": "who"
          },
          {
            "id": "c2",
            "text": "whose"
          },
          {
            "id": "c3",
            "text": "whom"
          },
          {
            "id": "c4",
            "text": "that"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: whose. Teacher whose native language ... cần whose chỉ ngôn ngữ mẹ đẻ của giáo viên.",
        "topicTags": [
          "Relative Clauses",
          "MỆNH ĐỀ QUAN HỆ",
          "Relative Pronouns and Adverbs"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 64
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s08",
      "title": "Câu chủ động - bị động",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 43,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-001",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Since the computer ------- it has made considerable changes to our daily life.",
        "choices": [
          {
            "id": "c1",
            "text": "invented"
          },
          {
            "id": "c2",
            "text": "was invented"
          },
          {
            "id": "c3",
            "text": "is invented"
          },
          {
            "id": "c4",
            "text": "has invented"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was invented. Máy tính được phát minh ở quá khứ: was invented; mệnh đề chính hiện tại hoàn thành tính thay đổi từ đó đến nay.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-002",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The headmaster has decided that three lecture halls ------- in our school next semester.",
        "choices": [
          {
            "id": "c1",
            "text": "will build"
          },
          {
            "id": "c2",
            "text": "will be built"
          },
          {
            "id": "c3",
            "text": "are being built"
          },
          {
            "id": "c4",
            "text": "will be building"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will be built. Lecture halls được xây vào học kỳ sau nên will be built, tương lai bị động. Are being built có thể chỉ kế hoạch nhưng không phải lựa chọn dự kiến rõ nhất.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-003",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "In our hospital, patients ------- every morning.",
        "choices": [
          {
            "id": "c1",
            "text": "are examined"
          },
          {
            "id": "c2",
            "text": "were examining"
          },
          {
            "id": "c3",
            "text": "have examined"
          },
          {
            "id": "c4",
            "text": "can examine"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: are examined. Patients được khám mỗi sáng nên are examined; every morning chỉ thói quen hiện tại.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-004",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "No one can avoid ------- by advertisements.",
        "choices": [
          {
            "id": "c1",
            "text": "to be influenced"
          },
          {
            "id": "c2",
            "text": "influencing"
          },
          {
            "id": "c3",
            "text": "having influenced"
          },
          {
            "id": "c4",
            "text": "being influenced"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: being influenced. Avoid + V-ing; người chịu tác động quảng cáo nên being influenced, không dùng to be influenced.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-005",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The theory of relativity ------- by Einstein, who was a famous physicist.",
        "choices": [
          {
            "id": "c1",
            "text": "was developed"
          },
          {
            "id": "c2",
            "text": "developed"
          },
          {
            "id": "c3",
            "text": "is developed"
          },
          {
            "id": "c4",
            "text": "develops"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: was developed. Thuyết tương đối được Einstein phát triển trong quá khứ: was developed; by chỉ tác nhân.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-006",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The girl was used ------- birthday presents from her brothers.",
        "choices": [
          {
            "id": "c1",
            "text": "to receive"
          },
          {
            "id": "c2",
            "text": "to receiving"
          },
          {
            "id": "c3",
            "text": "to being received"
          },
          {
            "id": "c4",
            "text": "to be receiving"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: to receiving. Be used to + V-ing = quen với việc; cô gái quen nhận quà nên to receiving là chủ động, không phải nhận bị động.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-007",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "After the car crash last night, all the injured ------- to the hospital in an ambulance.",
        "choices": [
          {
            "id": "c1",
            "text": "was rushing"
          },
          {
            "id": "c2",
            "text": "were rushed"
          },
          {
            "id": "c3",
            "text": "was rushed"
          },
          {
            "id": "c4",
            "text": "were rushing"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: were rushed. The injured chỉ nhiều người bị thương; họ được đưa đi nên were rushed, quá khứ bị động số nhiều.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-008",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Only one of our gifted students ------- to participate in the final competition.",
        "choices": [
          {
            "id": "c1",
            "text": "has been chosen"
          },
          {
            "id": "c2",
            "text": "have been chosen"
          },
          {
            "id": "c3",
            "text": "were choosing"
          },
          {
            "id": "c4",
            "text": "chosen"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been chosen. Only one là số ít, đã được chọn nên has been chosen; không chia theo students ở cụm of.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-009",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Carbon dioxide ------- as one of the main contributors to the greenhouse effect.",
        "choices": [
          {
            "id": "c1",
            "text": "had identified"
          },
          {
            "id": "c2",
            "text": "has been identified"
          },
          {
            "id": "c3",
            "text": "has identified"
          },
          {
            "id": "c4",
            "text": "had been identified"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has been identified. Carbon dioxide được xác định là tác nhân nên has been identified; không có mốc quá khứ để ưu tiên had been.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-010",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "In no circumstances ------- on campus.",
        "choices": [
          {
            "id": "c1",
            "text": "should smoking be allowed"
          },
          {
            "id": "c2",
            "text": "should allow smoking"
          },
          {
            "id": "c3",
            "text": "smoking should be allowed"
          },
          {
            "id": "c4",
            "text": "we should allow smoking"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: should smoking be allowed. In no circumstances ở đầu câu yêu cầu đảo trợ động từ; should smoking be allowed có trật tự bị động đúng.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-011",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Only one of our gifted students ------- to participate in the final competition.",
        "choices": [
          {
            "id": "c1",
            "text": "has been chosen"
          },
          {
            "id": "c2",
            "text": "have been chosen"
          },
          {
            "id": "c3",
            "text": "were choosing"
          },
          {
            "id": "c4",
            "text": "chosen"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been chosen. Only one ... has been chosen: trung tâm one số ít và nghĩa được chọn; câu trùng câu 8. Câu này trùng nội dung với q-s08-008; giữ lại để bảo toàn thứ tự nguồn.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG",
          "Duplicate"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-012",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The headmaster has decided that three lecture halls ------- in our school next semester.",
        "choices": [
          {
            "id": "c1",
            "text": "will build"
          },
          {
            "id": "c2",
            "text": "will be built"
          },
          {
            "id": "c3",
            "text": "are being built"
          },
          {
            "id": "c4",
            "text": "will be building"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will be built. Giảng đường được xây vào học kỳ sau: will be built; câu trùng câu 2. Câu này trùng nội dung với q-s08-002; giữ lại để bảo toàn thứ tự nguồn.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG",
          "Duplicate"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-013",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "In the wake of increasing food poisoning, many consumers have turned to vegetables ------- organically.",
        "choices": [
          {
            "id": "c1",
            "text": "that grown"
          },
          {
            "id": "c2",
            "text": "grown"
          },
          {
            "id": "c3",
            "text": "which grows"
          },
          {
            "id": "c4",
            "text": "are grown"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: grown. Vegetables grown organically = rau được trồng hữu cơ; grown rút gọn which are grown.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-014",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "A lot of research in medical science has been ------- to improve human health.",
        "choices": [
          {
            "id": "c1",
            "text": "taken up"
          },
          {
            "id": "c2",
            "text": "given up"
          },
          {
            "id": "c3",
            "text": "made up"
          },
          {
            "id": "c4",
            "text": "carried out"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: carried out. Carry out research = tiến hành nghiên cứu; has been carried out là hiện tại hoàn thành bị động.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-015",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "As they remembered ------- about the danger of getting lost in the forest, the tourist closely followed the tour guide.",
        "choices": [
          {
            "id": "c1",
            "text": "being warned"
          },
          {
            "id": "c2",
            "text": "warning"
          },
          {
            "id": "c3",
            "text": "to be warned"
          },
          {
            "id": "c4",
            "text": "to warn"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: being warned. Remember being warned = nhớ đã được cảnh báo; remember to be warned không phải nhớ một trải nghiệm đã xảy ra.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-016",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The patients ------- with the new drug showed better signs of recovery than those receiving conventional medicine.",
        "choices": [
          {
            "id": "c1",
            "text": "treated"
          },
          {
            "id": "c2",
            "text": "having treated"
          },
          {
            "id": "c3",
            "text": "treating"
          },
          {
            "id": "c4",
            "text": "who treated"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: treated. Patients treated with ... = bệnh nhân được điều trị bằng ...; treated rút gọn who were treated.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-017",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Despacito, ------- over four billion times on YouTube, is one of the most favourite songs among teenagers worldwide.",
        "choices": [
          {
            "id": "c1",
            "text": "is viewed"
          },
          {
            "id": "c2",
            "text": "which viewed"
          },
          {
            "id": "c3",
            "text": "viewing"
          },
          {
            "id": "c4",
            "text": "viewed"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: viewed. Bài hát được xem nhiều lần nên viewed, rút gọn which has been viewed; is viewed sẽ tạo mệnh đề thiếu từ nối.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-018",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The children ------- by social networks are likely to suffer from depression and other health problems.",
        "choices": [
          {
            "id": "c1",
            "text": "are obsessed"
          },
          {
            "id": "c2",
            "text": "obsessing"
          },
          {
            "id": "c3",
            "text": "obsessed"
          },
          {
            "id": "c4",
            "text": "who obsessed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: obsessed. Children obsessed by social networks = trẻ bị mạng xã hội ám ảnh; obsessed rút gọn who are obsessed.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-019",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The film was so intriguing that the audience were all ------- to the screen until the end.",
        "choices": [
          {
            "id": "c1",
            "text": "stuck"
          },
          {
            "id": "c2",
            "text": "hooked"
          },
          {
            "id": "c3",
            "text": "attached"
          },
          {
            "id": "c4",
            "text": "glued"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: glued. Be glued to the screen = dán mắt vào màn hình; đây là cách kết hợp tự nhiên nhất cho việc xem chăm chú.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-020",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Joseph would never forget ------- by his boss through no fault of his own.",
        "choices": [
          {
            "id": "c1",
            "text": "to criticise"
          },
          {
            "id": "c2",
            "text": "to be criticizsed"
          },
          {
            "id": "c3",
            "text": "being criticised"
          },
          {
            "id": "c4",
            "text": "criticizing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: being criticised. Forget being criticised = quên trải nghiệm đã bị chỉ trích; forget to V là quên việc cần làm, không đúng ngữ cảnh.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-021",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Once ------- with sufficient information, the freshmen will feel more confident to start the new course.",
        "choices": [
          {
            "id": "c1",
            "text": "having provided"
          },
          {
            "id": "c2",
            "text": "are provided"
          },
          {
            "id": "c3",
            "text": "provided"
          },
          {
            "id": "c4",
            "text": "providing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: provided. Once provided with ... rút gọn once they are provided with; bỏ đồng thời chủ ngữ và be, không để are provided một mình.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-022",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Once ------- for viruses, the software can be installed in the school computer system for use.",
        "choices": [
          {
            "id": "c1",
            "text": "tested"
          },
          {
            "id": "c2",
            "text": "testing"
          },
          {
            "id": "c3",
            "text": "is tested"
          },
          {
            "id": "c4",
            "text": "has tested"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: tested. Once tested = một khi được kiểm tra; rút gọn once it is tested, mang nghĩa bị động.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-023",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Has your house ------- recently?",
        "choices": [
          {
            "id": "c1",
            "text": "was decorated"
          },
          {
            "id": "c2",
            "text": "decorated"
          },
          {
            "id": "c3",
            "text": "been decorated"
          },
          {
            "id": "c4",
            "text": "is decorated"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: been decorated. Has your house been decorated ...? là câu hỏi hiện tại hoàn thành bị động; không thêm was/is sau has.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-024",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "English and French ------- in Canada.",
        "choices": [
          {
            "id": "c1",
            "text": "are speaking"
          },
          {
            "id": "c2",
            "text": "were spoken here"
          },
          {
            "id": "c3",
            "text": "are spoken"
          },
          {
            "id": "c4",
            "text": "speak"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: are spoken. Ngôn ngữ được nói ở Canada nên are spoken, hiện tại đơn bị động số nhiều.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-025",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "So much progress ------- That there may be spacefrights to Mars",
        "choices": [
          {
            "id": "c1",
            "text": "is being made"
          },
          {
            "id": "c2",
            "text": "are being made"
          },
          {
            "id": "c3",
            "text": "will be made"
          },
          {
            "id": "c4",
            "text": "will being made"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is being made. Progress không đếm được nên is being made; make progress là cụm cố định. Nguồn viết spacefrights, có vẻ muốn nói spaceflights.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-026",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "All students at Tay Bac university ------- uniforms on Monday.",
        "choices": [
          {
            "id": "c1",
            "text": "are asked to wear"
          },
          {
            "id": "c2",
            "text": "ask to wear"
          },
          {
            "id": "c3",
            "text": "asked to wear"
          },
          {
            "id": "c4",
            "text": "to asked wearing"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: are asked to wear. Be asked to wear = được yêu cầu mặc; are asked to wear vừa đủ trợ động từ, phân từ và to V.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-027",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "------- Coca-cola ------- by Louis Lassen?",
        "choices": [
          {
            "id": "c1",
            "text": "were/invented"
          },
          {
            "id": "c2",
            "text": "was/invented"
          },
          {
            "id": "c3",
            "text": "are/invent"
          },
          {
            "id": "c4",
            "text": "is/invented"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was/invented. Coca-cola số ít, hỏi phát minh trong quá khứ: Was ... invented? Tên người phát minh trong nguồn cần kiểm chứng riêng, không dùng bài tập làm nguồn lịch sử.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-028",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The payments on new houses should ------- within 10 days of the date of the contract",
        "choices": [
          {
            "id": "c1",
            "text": "receive"
          },
          {
            "id": "c2",
            "text": "received"
          },
          {
            "id": "c3",
            "text": "to receive"
          },
          {
            "id": "c4",
            "text": "be received"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: be received. Should + be + quá khứ phân từ: should be received = nên được nhận; không dùng should received.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-029",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Travel expenses should be ------- no later than 30 calendar days after returning from a business trip.",
        "choices": [
          {
            "id": "c1",
            "text": "submit"
          },
          {
            "id": "c2",
            "text": "submits"
          },
          {
            "id": "c3",
            "text": "submitted"
          },
          {
            "id": "c4",
            "text": "submissions"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: submitted. Should be đã có sẵn nên chỉ điền submitted, quá khứ phân từ: chi phí phải được nộp.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-030",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Please complete all the questions ------- on the claim form and provide a signature where requested.",
        "choices": [
          {
            "id": "c1",
            "text": "contained"
          },
          {
            "id": "c2",
            "text": "is containing"
          },
          {
            "id": "c3",
            "text": "have contained"
          },
          {
            "id": "c4",
            "text": "contains"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: contained. Questions contained on the form = câu hỏi có trong mẫu; contained rút gọn which are contained.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-031",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Since no more information ------- , the game will probably not come out this year or even next year.",
        "choices": [
          {
            "id": "c1",
            "text": "has been released"
          },
          {
            "id": "c2",
            "text": "has released"
          },
          {
            "id": "c3",
            "text": "is releasing"
          },
          {
            "id": "c4",
            "text": "will release"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: has been released. Information được công bố nên has been released; không đếm được và since ở đây mang nghĩa bởi vì.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 31
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-032",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The contributions made by Dr. Victor Hettigoda to the product development research ------- by her boss.",
        "choices": [
          {
            "id": "c1",
            "text": "were commended"
          },
          {
            "id": "c2",
            "text": "is commending"
          },
          {
            "id": "c3",
            "text": "commended"
          },
          {
            "id": "c4",
            "text": "commends"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: were commended. Contributions là số nhiều và được sếp khen nên were commended; không dùng is commending.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 32
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-033",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "We are pleased to announce that the eagerly anticipated tablet computer brochure ------- on our website.",
        "choices": [
          {
            "id": "c1",
            "text": "has launched"
          },
          {
            "id": "c2",
            "text": "has been launched"
          },
          {
            "id": "c3",
            "text": "launch"
          },
          {
            "id": "c4",
            "text": "is launching"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: has been launched. Brochure được đưa lên trang web nên has been launched; brochure không tự thực hiện hành động launch.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 33
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-034",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "By the time Mr. Greenfield returns from his business trip, the company’s new policy -------",
        "choices": [
          {
            "id": "c1",
            "text": "was decided"
          },
          {
            "id": "c2",
            "text": "will be deciding"
          },
          {
            "id": "c3",
            "text": "had decided"
          },
          {
            "id": "c4",
            "text": "will have been decided"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: will have been decided. By the time ... returns đặt hạn tương lai; chính sách sẽ đã được quyết định: will have been decided.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 34
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-035",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Note that the hotel’s pool and pool deck ------- until construction on them is completed later this month.",
        "choices": [
          {
            "id": "c1",
            "text": "will close"
          },
          {
            "id": "c2",
            "text": "will be closed"
          },
          {
            "id": "c3",
            "text": "have closed"
          },
          {
            "id": "c4",
            "text": "close"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will be closed. Pool and pool deck sẽ đóng/không mở cho đến khi xây xong: will be closed, nghĩa trạng thái bị đóng.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 35
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-036",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "All employees ------- to turn off the lights when exciting a vacant room to conserve electricity.",
        "choices": [
          {
            "id": "c1",
            "text": "are asked"
          },
          {
            "id": "c2",
            "text": "ask"
          },
          {
            "id": "c3",
            "text": "have asked"
          },
          {
            "id": "c4",
            "text": "are asking"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: are asked. Employees được yêu cầu nên are asked to turn off; nguồn có exciting có vẻ là lỗi của exiting = rời phòng.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 36
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-037",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "“The maintenance people didn’t remove the chairs from the ballroom”. “Don’t worry. They ------- them before the dance begins”.",
        "choices": [
          {
            "id": "c1",
            "text": "will have been moved"
          },
          {
            "id": "c2",
            "text": "will have moved"
          },
          {
            "id": "c3",
            "text": "were moved"
          },
          {
            "id": "c4",
            "text": "moved"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will have moved. They là nhân viên bảo trì chủ động di chuyển ghế; them là tân ngữ nên will have moved, không dùng bị động.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 37
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-038",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "I wanted ------- by the head of the company, but it was impossible.",
        "choices": [
          {
            "id": "c1",
            "text": "to see"
          },
          {
            "id": "c2",
            "text": "to be seen"
          },
          {
            "id": "c3",
            "text": "seeing"
          },
          {
            "id": "c4",
            "text": "being to see"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: to be seen. Want + to V; người nói muốn được người đứng đầu tiếp nên to be seen là nguyên mẫu bị động.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 38
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-039",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The flight attendant reminded the man that smoking ------- there.",
        "choices": [
          {
            "id": "c1",
            "text": "was not allowed"
          },
          {
            "id": "c2",
            "text": "was not allowing"
          },
          {
            "id": "c3",
            "text": "not to allow"
          },
          {
            "id": "c4",
            "text": "not allow"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án A: was not allowed. Smoking là hành vi không được cho phép nên cần bị động was not allowed. Was not allowing là chủ động tiếp diễn, sai hướng nghĩa; not to allow và not allow không tạo vị ngữ hữu hạn sau that smoking. Was phù hợp mạch tường thuật quá khứ reminded. Nghĩa: Tiếp viên nhắc người đàn ông rằng không được hút thuốc ở đó. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 39
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-040",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "Many people believe we can look forward to the day when even our household jobs like cleaning and decorating ------- by computer-control robots.",
        "choices": [
          {
            "id": "c1",
            "text": "will be doing"
          },
          {
            "id": "c2",
            "text": "are being done"
          },
          {
            "id": "c3",
            "text": "would be done"
          },
          {
            "id": "c4",
            "text": "will be done."
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: will be done.. Công việc nhà sẽ được robot làm trong tương lai: will be done; by chỉ tác nhân robot.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 40
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-041",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "He couldn’t afford to ------- his car repaired.",
        "choices": [
          {
            "id": "c1",
            "text": "pay"
          },
          {
            "id": "c2",
            "text": "make"
          },
          {
            "id": "c3",
            "text": "do"
          },
          {
            "id": "c4",
            "text": "get"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: get. Get + vật + quá khứ phân từ = nhờ làm gì; get his car repaired là nhờ sửa xe.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 41
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-042",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "I got everyone in the family ------- Jane’s birthday card before I sent it to her.",
        "choices": [
          {
            "id": "c1",
            "text": "sign"
          },
          {
            "id": "c2",
            "text": "signed"
          },
          {
            "id": "c3",
            "text": "to sign"
          },
          {
            "id": "c4",
            "text": "having signed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: to sign. Get + người + to V: got everyone to sign; make/have someone V dùng cấu trúc khác.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 42
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s08-043",
        "packId": "pack-on-tap-ngu-phap-main-s08",
        "part": 5,
        "prompt": "The old church ------- in the last storm.",
        "choices": [
          {
            "id": "c1",
            "text": "is said to have collapsed"
          },
          {
            "id": "c2",
            "text": "is said to be collapsed"
          },
          {
            "id": "c3",
            "text": "is said that it was collapsed"
          },
          {
            "id": "c4",
            "text": "is said to have been collapsed"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: is said to have collapsed. Is said to have collapsed là bị động tường thuật; to have collapsed chỉ vụ sập trước hiện tại. Collapse là nội động từ nên không dùng been collapsed.",
        "topicTags": [
          "Active and Passive Voice",
          "CÂU CHỦ ĐỘNG - BỊ ĐỘNG"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 43
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s09",
      "title": "Câu điều kiện",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 20,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-001",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If the train is late, we ------- to the office.",
        "choices": [
          {
            "id": "c1",
            "text": "walk"
          },
          {
            "id": "c2",
            "text": "will walk"
          },
          {
            "id": "c3",
            "text": "would walk"
          },
          {
            "id": "c4",
            "text": "walks"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will walk. Loại 1: If + hiện tại đơn, will + nguyên mẫu; tàu trễ thì sẽ đi bộ, nên will walk.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-002",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "She ------- if she has time.",
        "choices": [
          {
            "id": "c1",
            "text": "calls"
          },
          {
            "id": "c2",
            "text": "would call"
          },
          {
            "id": "c3",
            "text": "will call"
          },
          {
            "id": "c4",
            "text": "calling"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: will call. Loại 1: if she has time là điều kiện có thể xảy ra, mệnh đề chính dùng will call; calls cũng đúng nếu nói thói quen nên ngữ cảnh tương lai là cách hiểu dự kiến.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-003",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If it ------- too much, I will buy the smaller one.",
        "choices": [
          {
            "id": "c1",
            "text": "costs"
          },
          {
            "id": "c2",
            "text": "will cost"
          },
          {
            "id": "c3",
            "text": "would cost"
          },
          {
            "id": "c4",
            "text": "cost"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: costs. If + hiện tại đơn; it số ít nên costs, không dùng will cost trong điều kiện thông thường.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-004",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If the class ------- full, we will find another one.",
        "choices": [
          {
            "id": "c1",
            "text": "are"
          },
          {
            "id": "c2",
            "text": "will be"
          },
          {
            "id": "c3",
            "text": "were"
          },
          {
            "id": "c4",
            "text": "is"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is. If the class is full là hiện tại đơn số ít; không dùng will be hoặc were với mệnh đề chính will find này.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-005",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "What will we do if the taxi ------- ?",
        "choices": [
          {
            "id": "c1",
            "text": "don’t come"
          },
          {
            "id": "c2",
            "text": "didn’t come"
          },
          {
            "id": "c3",
            "text": "doesn’t come"
          },
          {
            "id": "c4",
            "text": "had not come"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: doesn’t come. Taxi số ít nên phủ định hiện tại doesn’t come; sau doesn’t động từ giữ nguyên mẫu.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-006",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If it snowed this summer, we ------- skiing.",
        "choices": [
          {
            "id": "c1",
            "text": "goes"
          },
          {
            "id": "c2",
            "text": "will go"
          },
          {
            "id": "c3",
            "text": "would go"
          },
          {
            "id": "c4",
            "text": "go"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: would go. Snowed diễn tả giả định khó xảy ra nên loại 2: would go, không dùng will go.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-007",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If you drove more carefully, you ------- so many accidents.",
        "choices": [
          {
            "id": "c1",
            "text": "would not have"
          },
          {
            "id": "c2",
            "text": "will not have"
          },
          {
            "id": "c3",
            "text": "wouldn’t have had"
          },
          {
            "id": "c4",
            "text": "has"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: would not have. Loại 2: If + quá khứ đơn drove, would + nguyên mẫu have; would not have ở đây chưa phải hoàn thành vì không có V3 theo sau.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-008",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If he ------- up earlier, he’d get to work on time.",
        "choices": [
          {
            "id": "c1",
            "text": "gets"
          },
          {
            "id": "c2",
            "text": "will get"
          },
          {
            "id": "c3",
            "text": "got"
          },
          {
            "id": "c4",
            "text": "had got"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: got. He’d get = he would get, báo loại 2; điều kiện dùng got, không dùng had got của loại 3.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-009",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "I would tell you more about it if we ------- more time.",
        "choices": [
          {
            "id": "c1",
            "text": "has"
          },
          {
            "id": "c2",
            "text": "will have"
          },
          {
            "id": "c3",
            "text": "have"
          },
          {
            "id": "c4",
            "text": "had"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: had. Would tell báo giả định hiện tại; if we had more time dùng quá khứ đơn had = có.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-010",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If I ------- you, I wouldn’t worry about going to university.",
        "choices": [
          {
            "id": "c1",
            "text": "am"
          },
          {
            "id": "c2",
            "text": "be"
          },
          {
            "id": "c3",
            "text": "were"
          },
          {
            "id": "c4",
            "text": "had been"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: were. If I were you là giả định đưa lời khuyên; were dùng cho mọi ngôi theo cấu trúc trang trọng.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-011",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If you ------- any money, I’d give you some.",
        "choices": [
          {
            "id": "c1",
            "text": "hadn’t had"
          },
          {
            "id": "c2",
            "text": "haven’t had"
          },
          {
            "id": "c3",
            "text": "don’t have"
          },
          {
            "id": "c4",
            "text": "didn’t have"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: didn’t have. I’d give = I would give, loại 2; if you didn’t have any money dùng quá khứ đơn phủ định.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-012",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "You’d earn more money if you ------- more products.",
        "choices": [
          {
            "id": "c1",
            "text": "to sell"
          },
          {
            "id": "c2",
            "text": "sell"
          },
          {
            "id": "c3",
            "text": "sold"
          },
          {
            "id": "c4",
            "text": "will sell"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: sold. You’d earn = you would earn; điều kiện giả định dùng sold, quá khứ đơn của sell.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-013",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If I ------- so busy yesterday, I would have visited you.",
        "choices": [
          {
            "id": "c1",
            "text": "were not"
          },
          {
            "id": "c2",
            "text": "wasn’t"
          },
          {
            "id": "c3",
            "text": "aren’t"
          },
          {
            "id": "c4",
            "text": "hadn’t been"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: hadn’t been. Yesterday và would have visited báo loại 3; điều kiện quá khứ trái thực tế dùng hadn’t been.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-014",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If you had seen the film, you ------- it.",
        "choices": [
          {
            "id": "c1",
            "text": "will enjoy"
          },
          {
            "id": "c2",
            "text": "would enjoy"
          },
          {
            "id": "c3",
            "text": "would have enjoyed"
          },
          {
            "id": "c4",
            "text": "enjoyed"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: would have enjoyed. If you had seen dùng quá khứ hoàn thành; kết quả loại 3 dùng would have enjoyed.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-015",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "She would have gone to the university if she ------- the opportunity.",
        "choices": [
          {
            "id": "c1",
            "text": "has"
          },
          {
            "id": "c2",
            "text": "will have"
          },
          {
            "id": "c3",
            "text": "had had"
          },
          {
            "id": "c4",
            "text": "had"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: had had. Would have gone là kết quả trái quá khứ; điều kiện dùng had had, had thứ nhất là trợ động từ, had thứ hai nghĩa là có.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-016",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If he had been more careful, he ------- an accident.",
        "choices": [
          {
            "id": "c1",
            "text": "would not have had"
          },
          {
            "id": "c2",
            "text": "will not have"
          },
          {
            "id": "c3",
            "text": "does not have"
          },
          {
            "id": "c4",
            "text": "would not have"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: would not have had. Had been more careful là loại 3; kết quả dùng would not have had an accident.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-017",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "If you’d stayed at home, there ------- any trouble.",
        "choices": [
          {
            "id": "c1",
            "text": "would not be"
          },
          {
            "id": "c2",
            "text": "will not be"
          },
          {
            "id": "c3",
            "text": "is not"
          },
          {
            "id": "c4",
            "text": "would not have been"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: would not have been. You’d stayed = you had stayed; kết quả quá khứ giả định dùng would not have been.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-018",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "What would you do if he ------- tomorrow?",
        "choices": [
          {
            "id": "c1",
            "text": "resigned"
          },
          {
            "id": "c2",
            "text": "will resign"
          },
          {
            "id": "c3",
            "text": "resigns"
          },
          {
            "id": "c4",
            "text": "to resign"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: resigned. Would you do báo loại 2, dù có tomorrow vẫn dùng resigned để giả định tương lai.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Second Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-019",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "I’ll do it if he ------- me.",
        "choices": [
          {
            "id": "c1",
            "text": "asking"
          },
          {
            "id": "c2",
            "text": "will ask"
          },
          {
            "id": "c3",
            "text": "asked"
          },
          {
            "id": "c4",
            "text": "asks"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: asks. I’ll do = I will do, loại 1; if he asks dùng hiện tại đơn số ít, không dùng will ask.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "First Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s09-020",
        "packId": "pack-on-tap-ngu-phap-main-s09",
        "part": 5,
        "prompt": "I wouldn’t have believed it if I ------- it with my own eyes.",
        "choices": [
          {
            "id": "c1",
            "text": "not to see"
          },
          {
            "id": "c2",
            "text": "didn’t see"
          },
          {
            "id": "c3",
            "text": "don’t see"
          },
          {
            "id": "c4",
            "text": "hadn’t seen"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: hadn’t seen. Wouldn’t have believed báo loại 3; điều kiện dùng hadn’t seen để nói nếu đã không tận mắt chứng kiến.",
        "topicTags": [
          "Conditionals",
          "CÂU ĐIỀU KIỆN",
          "Third Conditional"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s10",
      "title": "Cấu trúc so sánh",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 30,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-001",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "In Vietnam, it is normally ------- in the South than in the North.",
        "choices": [
          {
            "id": "c1",
            "text": "hot"
          },
          {
            "id": "c2",
            "text": "hotter"
          },
          {
            "id": "c3",
            "text": "hottest"
          },
          {
            "id": "c4",
            "text": "hoter"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: hotter. Có than nên dùng so sánh hơn hotter; hot nhân đôi t trước er, hoter sai chính tả.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-002",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "The food is ------- than the last time I ate it.",
        "choices": [
          {
            "id": "c1",
            "text": "badder"
          },
          {
            "id": "c2",
            "text": "bad"
          },
          {
            "id": "c3",
            "text": "worse"
          },
          {
            "id": "c4",
            "text": "worst"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: worse. Bad có so sánh hơn bất quy tắc worse, không dùng badder; worst là so sánh nhất.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-003",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Ho Chi Minh City is ------- than Hanoi.",
        "choices": [
          {
            "id": "c1",
            "text": "big"
          },
          {
            "id": "c2",
            "text": "bigger"
          },
          {
            "id": "c3",
            "text": "biggest"
          },
          {
            "id": "c4",
            "text": "biger"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: bigger. Big có so sánh hơn bigger, nhân đôi g; biggest là so sánh nhất.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-004",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Her voice is ------- than her sister’s.",
        "choices": [
          {
            "id": "c1",
            "text": "beautiful"
          },
          {
            "id": "c2",
            "text": "more beautiful"
          },
          {
            "id": "c3",
            "text": "beautifully"
          },
          {
            "id": "c4",
            "text": "more beautifully"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: more beautiful. Voice được mô tả bằng tính từ, so sánh hơn của beautiful là more beautiful; không dùng trạng từ beautifully.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-005",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Her literature result is much ------- than it was last year.",
        "choices": [
          {
            "id": "c1",
            "text": "good"
          },
          {
            "id": "c2",
            "text": "well"
          },
          {
            "id": "c3",
            "text": "more well"
          },
          {
            "id": "c4",
            "text": "better"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: better. Good có so sánh hơn better; much có thể nhấn mạnh better, không dùng more well.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-006",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Cinderella danced ------- than any other girl at the ball.",
        "choices": [
          {
            "id": "c1",
            "text": "more graceful"
          },
          {
            "id": "c2",
            "text": "gracefuler"
          },
          {
            "id": "c3",
            "text": "gracefully"
          },
          {
            "id": "c4",
            "text": "more gracefully"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: more gracefully. Bổ nghĩa danced cần trạng từ; gracefully là trạng từ dài nên more gracefully, không dùng more graceful.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-007",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "This book is the ------- of all.",
        "choices": [
          {
            "id": "c1",
            "text": "bored"
          },
          {
            "id": "c2",
            "text": "boring"
          },
          {
            "id": "c3",
            "text": "more boring"
          },
          {
            "id": "c4",
            "text": "most boring"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: most boring. The ... of all đòi so sánh nhất: most boring; boring mô tả sách gây chán, bored chỉ cảm xúc.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-008",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Mary speaks English very ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "fluent"
          },
          {
            "id": "c2",
            "text": "fluently"
          },
          {
            "id": "c3",
            "text": "more fluently"
          },
          {
            "id": "c4",
            "text": "most fluently"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: fluently. Bổ nghĩa speaks cần trạng từ fluently; very không dùng trực tiếp trước dạng so sánh hơn more fluently ở đây.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-009",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Tom runs faster than John and David runs the ------- in the group.",
        "choices": [
          {
            "id": "c1",
            "text": "fast"
          },
          {
            "id": "c2",
            "text": "most fast"
          },
          {
            "id": "c3",
            "text": "fastest"
          },
          {
            "id": "c4",
            "text": "most fastly"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: fastest. Trong cả nhóm dùng so sánh nhất fastest; fast đồng thời là tính từ và trạng từ, fastly không đúng.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-010",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "There is nothing ------- than going swimming in hot weather.",
        "choices": [
          {
            "id": "c1",
            "text": "gooder"
          },
          {
            "id": "c2",
            "text": "good"
          },
          {
            "id": "c3",
            "text": "better"
          },
          {
            "id": "c4",
            "text": "best"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: better. Có than nên dùng better, dạng bất quy tắc của good/well; gooder sai.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-011",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Mary is ------- responsible as Peter.",
        "choices": [
          {
            "id": "c1",
            "text": "more"
          },
          {
            "id": "c2",
            "text": "the most"
          },
          {
            "id": "c3",
            "text": "much"
          },
          {
            "id": "c4",
            "text": "as"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: as. So sánh bằng as + tính từ + as, nên as responsible as.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-012",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "She is ------- student in my class.",
        "choices": [
          {
            "id": "c1",
            "text": "most hard-working"
          },
          {
            "id": "c2",
            "text": "more hard-working"
          },
          {
            "id": "c3",
            "text": "the most hard-working"
          },
          {
            "id": "c4",
            "text": "as hard-working"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: the most hard-working. Trong cả lớp dùng the most hard-working; cần the trước so sánh nhất.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-013",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "He drives ------- his brother.",
        "choices": [
          {
            "id": "c1",
            "text": "more careful than"
          },
          {
            "id": "c2",
            "text": "more carefully"
          },
          {
            "id": "c3",
            "text": "more carefully than"
          },
          {
            "id": "c4",
            "text": "as careful as"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: more carefully than. Bổ nghĩa drives cần trạng từ carefully và nối đối tượng so sánh bằng than: more carefully than.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-014",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Tuan writes more ------- with fewer mistakes than the previous term.",
        "choices": [
          {
            "id": "c1",
            "text": "careless"
          },
          {
            "id": "c2",
            "text": "careful"
          },
          {
            "id": "c3",
            "text": "carefully"
          },
          {
            "id": "c4",
            "text": "carelessly"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: carefully. More đã có sẵn, cần trạng từ carefully bổ nghĩa writes; ít lỗi hơn xác nhận nghĩa cẩn thận hơn.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-015",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "My father is happy because I get ------- results at school.",
        "choices": [
          {
            "id": "c1",
            "text": "bad"
          },
          {
            "id": "c2",
            "text": "good"
          },
          {
            "id": "c3",
            "text": "intelligent"
          },
          {
            "id": "c4",
            "text": "well"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: good. Trước results cần tính từ good; well thường là trạng từ, intelligent không kết hợp tự nhiên với results ở đây.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-016",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Peter does better at school because he works ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "harder"
          },
          {
            "id": "c2",
            "text": "more carelessly"
          },
          {
            "id": "c3",
            "text": "more lazily"
          },
          {
            "id": "c4",
            "text": "worse"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: harder. Kết quả học tốt hơn vì works harder = làm việc/học chăm hơn; các lựa chọn còn lại đều mang nghĩa xấu hơn.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-017",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "He can do sums more ------- and read faster.",
        "choices": [
          {
            "id": "c1",
            "text": "badly"
          },
          {
            "id": "c2",
            "text": "quickly"
          },
          {
            "id": "c3",
            "text": "difficultly"
          },
          {
            "id": "c4",
            "text": "fastly"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: quickly. Sau more cần trạng từ quickly để bổ nghĩa do sums; fastly sai dạng, difficultly không tự nhiên ở đây.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-018",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Jane is not ------- her brother.",
        "choices": [
          {
            "id": "c1",
            "text": "more intelligent as"
          },
          {
            "id": "c2",
            "text": "intelligent as"
          },
          {
            "id": "c3",
            "text": "so intelligent as"
          },
          {
            "id": "c4",
            "text": "so intelligent that"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: so intelligent as. Phủ định so sánh bằng dùng not so/as + tính từ + as: not so intelligent as.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-019",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "She is a very ------- pupil. She spends most of her time studying.",
        "choices": [
          {
            "id": "c1",
            "text": "hard-working"
          },
          {
            "id": "c2",
            "text": "difficult"
          },
          {
            "id": "c3",
            "text": "hard"
          },
          {
            "id": "c4",
            "text": "easy"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: hard-working. Hard-working pupil = học sinh chăm chỉ, được giải thích bởi dành nhiều thời gian học; hard pupil không có nghĩa tương đương.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-020",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "My English this term is ------- than that of last year.",
        "choices": [
          {
            "id": "c1",
            "text": "good"
          },
          {
            "id": "c2",
            "text": "gooder"
          },
          {
            "id": "c3",
            "text": "better"
          },
          {
            "id": "c4",
            "text": "best"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: better. Có than nên dùng better, không dùng gooder hoặc best.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-021",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "------- you study for these exams, ------- you will do.",
        "choices": [
          {
            "id": "c1",
            "text": "The harder / the better"
          },
          {
            "id": "c2",
            "text": "The more / the much"
          },
          {
            "id": "c3",
            "text": "The hardest / the best"
          },
          {
            "id": "c4",
            "text": "The more hard / the more good"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: The harder / the better. The + so sánh hơn ..., the + so sánh hơn ...: càng học chăm, càng làm tốt; harder và better là dạng đúng.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 21
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-022",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "My neighbor is driving me mad! It seems that ------- it is at night, ------- he plays his music!",
        "choices": [
          {
            "id": "c1",
            "text": "the less / the more loud"
          },
          {
            "id": "c2",
            "text": "the less / less"
          },
          {
            "id": "c3",
            "text": "the more late / the more loudlier"
          },
          {
            "id": "c4",
            "text": "the later / the louder"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: the later / the louder. The later ..., the louder ... = càng khuya, càng mở nhạc to; không dùng more late hoặc loudlier.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 22
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-023",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Thanks to the progress of science and technology, our lives have become ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "more and more good"
          },
          {
            "id": "c2",
            "text": "better and better"
          },
          {
            "id": "c3",
            "text": "the more and more good"
          },
          {
            "id": "c4",
            "text": "gooder and gooder"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: better and better. Better and better = ngày càng tốt hơn; gooder sai, more and more good không phải dạng chuẩn của good.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 23
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-024",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "The Sears Tower is ------- building in Chicago.",
        "choices": [
          {
            "id": "c1",
            "text": "taller"
          },
          {
            "id": "c2",
            "text": "the more tall"
          },
          {
            "id": "c3",
            "text": "the tallest"
          },
          {
            "id": "c4",
            "text": "taller and taller"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: the tallest. So sánh với toàn Chicago dùng the tallest; the more tall không phải so sánh nhất.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 24
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-025",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Peter is ------- John.",
        "choices": [
          {
            "id": "c1",
            "text": "younger and more intelligent than"
          },
          {
            "id": "c2",
            "text": "more young and intelligent than"
          },
          {
            "id": "c3",
            "text": "more intelligent and more young than"
          },
          {
            "id": "c4",
            "text": "the more intelligent and younger than"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: younger and more intelligent than. Hai tính từ so sánh hơn song song: younger and more intelligent than; young không dùng more young.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 25
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-026",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "San Diego is ------- town in Southern California.",
        "choices": [
          {
            "id": "c1",
            "text": "more nice and nice"
          },
          {
            "id": "c2",
            "text": "the nicer"
          },
          {
            "id": "c3",
            "text": "the nicest"
          },
          {
            "id": "c4",
            "text": "nicer and nicer"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: the nicest. Trong một vùng dùng the nicest, so sánh nhất của nice; nguồn gọi San Diego là town dù thường được gọi city.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 26
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-027",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "It gets ------- when the winter is coming.",
        "choices": [
          {
            "id": "c1",
            "text": "cold and cold"
          },
          {
            "id": "c2",
            "text": "the coldest and coldest"
          },
          {
            "id": "c3",
            "text": "colder and colder"
          },
          {
            "id": "c4",
            "text": "more and more cold"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: colder and colder. Colder and colder = ngày càng lạnh; tính từ ngắn lặp dạng so sánh hơn.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 27
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-028",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "The faster we finish, ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "the sooner we can leave"
          },
          {
            "id": "c2",
            "text": "we can leave sooner and sooner"
          },
          {
            "id": "c3",
            "text": "the sooner can we leave"
          },
          {
            "id": "c4",
            "text": "we can leave the sooner"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: the sooner we can leave. The faster ..., the sooner we can leave; giữ trật tự chủ ngữ we trước can, không đảo trong cấu trúc này.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 28
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-029",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "Of all athletes, Alex is ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "the less qualified"
          },
          {
            "id": "c2",
            "text": "the less and less qualified"
          },
          {
            "id": "c3",
            "text": "the more and more qualified"
          },
          {
            "id": "c4",
            "text": "the least qualified"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: the least qualified. Of all athletes yêu cầu so sánh nhất: the least qualified = kém đủ năng lực nhất.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 29
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s10-030",
        "packId": "pack-on-tap-ngu-phap-main-s10",
        "part": 5,
        "prompt": "The faster Thanh walks, ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "more tired"
          },
          {
            "id": "c2",
            "text": "the more tired he gets"
          },
          {
            "id": "c3",
            "text": "he gets tired"
          },
          {
            "id": "c4",
            "text": "he gets more tired"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: the more tired he gets. The faster ..., the more tired he gets = càng đi nhanh, càng mệt; cần cả the và mệnh đề đầy đủ.",
        "topicTags": [
          "Comparisons",
          "CẤU TRÚC SO SÁNH"
        ],
        "difficulty": "medium",
        "allowsChoiceShuffle": true,
        "originalNumber": 30
      }
    ]
  },
  {
    "pack": {
      "schemaVersion": "1.0.0",
      "id": "pack-on-tap-ngu-phap-main-s11",
      "title": "Cấu trúc đảo ngữ",
      "description": "503 câu ôn ngữ pháp theo 11 chủ điểm, có đáp án và lời giải tiếng Việt. Đã biên tập 24 câu có lỗi hoặc đáp án chưa duy nhất; các câu biên tập được ghi chú trong explanation. Đây là bài tập ngữ pháp dạng câu đơn, dùng part=5 để tương thích website, không phải đề TOEIC chính thức. Đáp án do phân tích, không phải bảng đáp án chính thức của tác giả. ID có mã chủ điểm để tránh trùng số câu gốc.",
      "sourceLabel": "Tài liệu người dùng cung cấp — main.pdf",
      "partsIncluded": [
        5
      ],
      "questionCount": 20,
      "createdAt": 1792655550695,
      "updatedAt": 1792655550695
    },
    "groups": [],
    "questions": [
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-001",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Not only ------- to determine the depth of the ocean floor, but it is also used to locate oil.",
        "choices": [
          {
            "id": "c1",
            "text": "seismology is used"
          },
          {
            "id": "c2",
            "text": "using seismology"
          },
          {
            "id": "c3",
            "text": "is seismology used"
          },
          {
            "id": "c4",
            "text": "to use seismology"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: is seismology used. Not only đầu câu yêu cầu đảo be trước chủ ngữ: is seismology used; nghĩa vừa được dùng đo độ sâu vừa tìm dầu.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 1
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-002",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "------- advised on what and how to prepare for the interview, he might have got the job.",
        "choices": [
          {
            "id": "c1",
            "text": "Had he been"
          },
          {
            "id": "c2",
            "text": "If he had"
          },
          {
            "id": "c3",
            "text": "Unless he had been"
          },
          {
            "id": "c4",
            "text": "Were he to be"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: Had he been. Đảo điều kiện loại 3: Had he been advised = If he had been advised; been cần cho nghĩa được tư vấn.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 2
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-003",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Not until 1856 ------- across the Mississippi River.",
        "choices": [
          {
            "id": "c1",
            "text": "the first bridge was built"
          },
          {
            "id": "c2",
            "text": "was the first bridge built"
          },
          {
            "id": "c3",
            "text": "the first bridge built"
          },
          {
            "id": "c4",
            "text": "did the first bridge build"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: was the first bridge built. Not until + mốc thời gian đầu câu yêu cầu đảo mệnh đề chính; was the first bridge built là quá khứ bị động.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 3
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-004",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Only when you grow up ------- the truth.",
        "choices": [
          {
            "id": "c1",
            "text": "you will know"
          },
          {
            "id": "c2",
            "text": "you know"
          },
          {
            "id": "c3",
            "text": "do you know"
          },
          {
            "id": "c4",
            "text": "will you know"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: will you know. Only when đầu câu kéo đảo mệnh đề chính: will you know, diễn tả chỉ khi lớn lên mới biết.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 4
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-005",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "-------, Mozart was an accomplished composer while still a child.",
        "choices": [
          {
            "id": "c1",
            "text": "Remarkable as it seems"
          },
          {
            "id": "c2",
            "text": "As it seems remarkable"
          },
          {
            "id": "c3",
            "text": "No matter remarkable it seems"
          },
          {
            "id": "c4",
            "text": "Remarkable however it seem"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: Remarkable as it seems. Tính từ + as + chủ ngữ + động từ là nhượng bộ: Remarkable as it seems = dù nghe có vẻ đáng kinh ngạc.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 5
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-006",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Out ------- for a walk after she finished doing her homework.",
        "choices": [
          {
            "id": "c1",
            "text": "did go Mary"
          },
          {
            "id": "c2",
            "text": "Mary go"
          },
          {
            "id": "c3",
            "text": "Mary did went"
          },
          {
            "id": "c4",
            "text": "went Mary"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án D: went Mary. Đảo toàn phần sau trạng từ chỉ hướng out có mẫu out + động từ + chủ ngữ danh từ: Out went Mary. Did go Mary sai trật tự trợ động từ; Mary go sai thì và hòa hợp; did went sai vì sau did phải dùng nguyên mẫu go. Nghĩa: Sau khi làm xong bài tập, Mary đi ra ngoài dạo bộ. Câu đã được biên tập từ tài liệu gốc để có một đáp án đúng rõ ràng.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 6
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-007",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "------- she could not say anything.",
        "choices": [
          {
            "id": "c1",
            "text": "So upset was she that"
          },
          {
            "id": "c2",
            "text": "So upset was she"
          },
          {
            "id": "c3",
            "text": "However upset was she that"
          },
          {
            "id": "c4",
            "text": "Therefore upset was she that"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: So upset was she that. So + tính từ + be + chủ ngữ + that: So upset was she that ... = cô ấy buồn đến mức ...; không bỏ that.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 7
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-008",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "------- with my previous job, I would have won a higher promotion and I ------- in this unfortunate position now.",
        "choices": [
          {
            "id": "c1",
            "text": "Unless I had stayed / am not"
          },
          {
            "id": "c2",
            "text": "If I stayed / would not be"
          },
          {
            "id": "c3",
            "text": "If had I stayed / will not be"
          },
          {
            "id": "c4",
            "text": "Had I stayed / would not be"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: Had I stayed / would not be. Had I stayed là đảo điều kiện quá khứ; would not be ... now là kết quả hiện tại, tạo điều kiện hỗn hợp.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 8
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-009",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Not only ------- to speak to him, but she also vowed never to see him again.",
        "choices": [
          {
            "id": "c1",
            "text": "she refused"
          },
          {
            "id": "c2",
            "text": "did she refuse"
          },
          {
            "id": "c3",
            "text": "she did refuse"
          },
          {
            "id": "c4",
            "text": "when she refused"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: did she refuse. Not only đầu câu với quá khứ đơn cần did she refuse; sau did dùng refuse nguyên mẫu.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 9
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-010",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "------- an emergency arise, call 911.",
        "choices": [
          {
            "id": "c1",
            "text": "Should"
          },
          {
            "id": "c2",
            "text": "If"
          },
          {
            "id": "c3",
            "text": "Will"
          },
          {
            "id": "c4",
            "text": "Were"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: Should. Should an emergency arise = If an emergency should arise; đảo điều kiện diễn tả khả năng bất chợt.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 10
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-011",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Nowhere in the northern section of the United States ------- for growing citrus crops.",
        "choices": [
          {
            "id": "c1",
            "text": "is there suitability of the climate"
          },
          {
            "id": "c2",
            "text": "where the climate is suitable"
          },
          {
            "id": "c3",
            "text": "the climate is suitable"
          },
          {
            "id": "c4",
            "text": "is the climate suitable"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: is the climate suitable. Nowhere đầu câu yêu cầu đảo is trước chủ ngữ the climate; suitable for growing = phù hợp trồng trọt.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 11
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-012",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Only after she had finished the course did she realize she ------- a wrong choice.",
        "choices": [
          {
            "id": "c1",
            "text": "had made"
          },
          {
            "id": "c2",
            "text": "has made"
          },
          {
            "id": "c3",
            "text": "had been making"
          },
          {
            "id": "c4",
            "text": "was making"
          }
        ],
        "correctChoiceId": "c1",
        "explanation": "Đáp án dự kiến A: had made. Chọn lựa sai đã xảy ra trước lúc nhận ra nên had made; phần did she realize đã thực hiện đảo ngữ sau Only after.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 12
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-013",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Never ------- him stand on the deserted station platform.",
        "choices": [
          {
            "id": "c1",
            "text": "will I forget to see"
          },
          {
            "id": "c2",
            "text": "I will forget to see"
          },
          {
            "id": "c3",
            "text": "will I forget seeing"
          },
          {
            "id": "c4",
            "text": "I will forget seeing"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: will I forget seeing. Never đầu câu yêu cầu will I; forget seeing là không quên trải nghiệm đã thấy, còn forget to see là quên thực hiện việc gặp/xem.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 13
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-014",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "The instructor blew his whistle and ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "off the runners were running"
          },
          {
            "id": "c2",
            "text": "off ran the runners"
          },
          {
            "id": "c3",
            "text": "off were running the runners"
          },
          {
            "id": "c4",
            "text": "the runners runs off"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: off ran the runners. Off đầu câu với chủ ngữ danh từ cho đảo toàn phần: off ran the runners = các vận động viên chạy đi.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 14
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-015",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Seldom ------- far enough north to disturb South Pacific shipping lanes.",
        "choices": [
          {
            "id": "c1",
            "text": "Antarctic icebergs will move"
          },
          {
            "id": "c2",
            "text": "will Antarctic icebergs move"
          },
          {
            "id": "c3",
            "text": "will move Antarctic icebergs"
          },
          {
            "id": "c4",
            "text": "move Antarctic icebergs will"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: will Antarctic icebergs move. Seldom đầu câu yêu cầu đảo trợ động từ: will Antarctic icebergs move; giữ move nguyên mẫu sau will.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 15
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-016",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "------- will China be the first to use nuclear weapons.",
        "choices": [
          {
            "id": "c1",
            "text": "At any time"
          },
          {
            "id": "c2",
            "text": "At no time"
          },
          {
            "id": "c3",
            "text": "At a time"
          },
          {
            "id": "c4",
            "text": "At one time"
          }
        ],
        "correctChoiceId": "c2",
        "explanation": "Đáp án dự kiến B: At no time. At no time là cụm phủ định làm phát sinh đảo will China; các cụm thời gian còn lại không đòi đảo này.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 16
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-017",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "He listened so attentively that not a word ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "he had missed"
          },
          {
            "id": "c2",
            "text": "he missed"
          },
          {
            "id": "c3",
            "text": "he didn’t miss"
          },
          {
            "id": "c4",
            "text": "did he miss"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: did he miss. Not a word được đưa lên đầu mệnh đề nên did he miss; sau did dùng miss, không thêm phủ định vì not a word đã phủ định.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 17
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-018",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "We spent nearly 3 hours waiting outside the station, then out ------- .",
        "choices": [
          {
            "id": "c1",
            "text": "the star came"
          },
          {
            "id": "c2",
            "text": "did the star come"
          },
          {
            "id": "c3",
            "text": "came the star"
          },
          {
            "id": "c4",
            "text": "be the star coming"
          }
        ],
        "correctChoiceId": "c3",
        "explanation": "Đáp án dự kiến C: came the star. Out + động từ + danh từ chủ ngữ: out came the star; không thêm did trong đảo hướng đi này.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 18
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-019",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "The African killer bees could not be handled safely, nor -------.",
        "choices": [
          {
            "id": "c1",
            "text": "their honey could be harvested"
          },
          {
            "id": "c2",
            "text": "harvested could their honey be"
          },
          {
            "id": "c3",
            "text": "could not their honey be harvested"
          },
          {
            "id": "c4",
            "text": "could their honey be harvested"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: could their honey be harvested. Nor nối một ý phủ định thứ hai và yêu cầu đảo could their honey be harvested; không thêm not vì nor đã phủ định.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 19
      },
      {
        "id": "pack-on-tap-ngu-phap-main-q-s11-020",
        "packId": "pack-on-tap-ngu-phap-main-s11",
        "part": 5,
        "prompt": "Down ------- when he was passing under the tree.",
        "choices": [
          {
            "id": "c1",
            "text": "an apple fall"
          },
          {
            "id": "c2",
            "text": "an apple fell"
          },
          {
            "id": "c3",
            "text": "did an apple fall"
          },
          {
            "id": "c4",
            "text": "fell an apple"
          }
        ],
        "correctChoiceId": "c4",
        "explanation": "Đáp án dự kiến D: fell an apple. Down đầu câu với danh từ chủ ngữ cho đảo toàn phần fell an apple; an apple fell là trật tự thông thường không đáp ứng mẫu đảo đang kiểm tra.",
        "topicTags": [
          "Inversion",
          "CẤU TRÚC ĐẢO NGỮ"
        ],
        "difficulty": "hard",
        "allowsChoiceShuffle": true,
        "originalNumber": 20
      }
    ]
  }
];
