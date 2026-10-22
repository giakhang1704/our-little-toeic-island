# Our Little TOEIC Island 🏝️

Website học và luyện thi TOEIC Listening & Reading cá nhân hóa hướng tới mục tiêu **800+ TOEIC**, kết hợp trải nghiệm hòn đảo ấm áp phát triển qua sự kiên trì từng ngày.

---

## Đảo mở rộng và phần thưởng

- Bản đồ có 16 ô trang trí, đảo hải đăng, góc đọc và đài ngắm sao. Trên điện thoại có thể vuốt ngang bản đồ.
- Giọt nước là điểm tích lũy: mở vật phẩm, vé quà và vé trợ giúp **không trừ điểm**.
- Mốc đầu tiên: ôm 5 điểm, trà sữa 15, ăn vặt 25, xem phim 40, bữa tối 60, ngày hẹn hò 100.
- Mỗi loại vé có mốc nhận riêng. Ví dụ trà sữa: 15, 30, 45 điểm; điểm vẫn giữ nguyên sau khi nhận và dùng vé.
- Vé quà ngoài đời nằm trong **Cửa Tiệm → Quà & đặc quyền → Ví quà**. Hai bạn tự sắp xếp việc nhận quà và đánh dấu đã dùng.
- Vé gợi ý chỉ loại một đáp án sai trong chế độ luyện tập; câu được trợ giúp sẽ được đánh dấu cần ôn lại.
- Có 7 nhiệm vụ mỗi ngày và 6 cột mốc dài hạn. Thưởng mốc chỉ nhận một lần, không đặt lại khi tải trang.
- Dữ liệu điểm, vật phẩm và vé lưu trên trình duyệt; sao lưu JSON bao gồm trạng thái vé đã dùng.

Chạy `npm test` để kiểm tra mở quà không trừ điểm, chống nhận trùng, dùng vé một lần, sao lưu và nhiệm vụ.

---

## 🚀 Tính Năng Hoàn Chỉnh Theo Kế Hoạch (Project Plan)

### 1. Đảo Của Tôi (My Island)
- **Cảnh 2D Đảo Tương Tác**:
  - **Ngôi Nhà & Hộp Thư**: Nơi đọc những bức thư yêu thương mở khóa theo tiến trình.
  - **Vườn Ôn Tập**: Hiển thị các chùm cây ôn tập theo phương pháp ngắt quãng (Spaced Repetition).
  - **Cầu Tàu Luyện Tập**: Bến thuyền đưa người học vào các phòng thi Mini-Test và bài luyện Part 1 - 7.
  - **Bạn Đồng Hành (Mèo Mochi)**: Trò chuyện ngẫu nhiên, nhắc nhở học tập và mời chơi minigame.
  - **4 Ô Trang Trí Đảo**: Tự do đặt cây hoa anh đào, ghế gỗ, đèn đá, dù bãi biển mua từ Cửa Hàng.
- **Tiếp Tục Học (Continue Learning)**: Nút hành động ưu tiên ở vị trí cao nhất trên trang chủ, tự động điều hướng đến các cây cần tưới hoặc bài luyện mới.
- **3 Nhiệm Vụ Hàng Ngày (Daily Missions)**: Tự động điều chỉnh theo dữ liệu bài tập sẵn có, tặng thưởng giọt nước khi hoàn thành.

### 2. Minigame Độc Quyền
- **Minigame A: Thư Cho Mèo (Mail for the Cat)**:
  - Đồng hành cùng Mochi soát lỗi 5 câu ngữ pháp Part 5.
  - Nhận lời giải ngay lập tức khi chọn đáp án, xem lại bảng tổng kết trước khi đóng dấu sáp đỏ gửi thư.
  - Thưởng **8 giọt nước** sau mỗi vòng chơi.
- **Minigame B: Vườn Ôn Tập (Review Garden)**:
  - Mọi câu làm sai hoặc đánh dấu "đoán mò" sẽ tự động hóa thành một mầm cây.
  - Các giai đoạn phát triển: **Hạt Mầm 🌱 → Cây Non 🌿 → Nụ Hoa 🌷 → Đơm Hoa Rực Rỡ 🌸**.
  - **Cây không bao giờ chết** nếu nghỉ học một vài hôm (không phạt người học).

### 3. Luyện Tập & Đo Lường (Practice & Test Modes)
- **Tách biệt rõ ràng 2 chế độ**:
  - **Chế độ Luyện Tập (Practice)**: Hiện lời giải chi tiết, hiển thị transcript nghe, cho phép nghe lại audio không giới hạn và gắn thẻ nguyên nhân làm sai.
  - **Chế độ Mini-Test**: Bấm giờ nghiêm ngặt, ẩn lời giải và transcript đến khi nộp bài.
- **Hỗ trợ đầy đủ 7 Parts của bài thi TOEIC**:
  - **Part 1 (Photos)**: Trực quan hóa hình ảnh sắc nét và đọc audio phát âm chuẩn.
  - **Part 2 (Question - Response)**: Ẩn văn bản khi nghe, chỉ hiển thị sau khi đã chọn đáp án.
  - **Part 3 & Part 4 (Conversations & Talks)**: Chùm 3 câu hỏi đi kèm bài nói và đoạn hội thoại.
  - **Part 5 (Incomplete Sentences)**: Điền từ vào chỗ trống kèm xáo trộn an toàn (Safe Choice Shuffle).
  - **Part 6 (Text Completion)**: Đoạn văn dài với các chỗ trống `[131]`, `[132]`...
  - **Part 7 (Reading Comprehension)**: Hỗ trợ đoạn văn đơn và đoạn văn kép (Job posting + Email).
  - **Bố cục di động**: Văn bản đọc hiểu nằm bên trên câu hỏi trên màn hình điện thoại và nằm cạnh câu hỏi trên màn hình máy tính lớn.

### 4. Kho Bài Học & Nhập Đề (Study Library)
- **Stage A (Structured Pack)**: Nhập và xuất bộ đề bằng tệp ZIP hoặc JSON kèm kiểm định Zod Schema.
- **Nhập Nhanh Part 5 (Text Importer)**: Dán văn bản thô theo mẫu đơn giản (câu hỏi, A, B, C, D, Key, Explanation) để tạo ngay bộ đề.
- **Stage B (Assisted PDF Import)**: Tải tài liệu PDF lên, hệ thống tự động bóc tách text, gợi ý ranh giới câu hỏi và cho phép người học xem lại, sửa đáp án trước khi lưu vào thư viện.

### 5. Tiến Độ & Thống Kê Hướng Tới 800+ TOEIC (Progress)
- Tỷ lệ chính xác theo từng Part 1 đến Part 7.
- Tỷ lệ theo chủ điểm ngữ pháp/từ vựng (có nhãn "Cần thêm dữ liệu" nếu làm dưới 3 câu).
- Phân tích nguyên nhân sai lặp lại (Thiếu từ vựng, bẫy ngữ pháp, đọc lướt ẩu, nghe nhầm âm, áp lực thời gian).
- Số lượng cây đã nở hoa thuần thục.

### 6. Cài Đặt & Sao Lưu Toàn Diện (Backup & Restore)
- Lưu trữ cục bộ bảo mật trên trình duyệt với Dexie (IndexedDB).
- **Sao Lưu Toàn Bộ (Full Backup)**: Xuất file JSON chứa toàn bộ bộ đề, câu hỏi, lịch sử làm bài, cây trong vườn, giọt nước, vật phẩm trang trí và thư từ.
- **Khôi Phục An Toàn (Safe Restore)**: Kiểm định file trước khi nạp, hiển thị bản xem trước và cho phép chọn chế độ Gộp (Merge) hoặc Ghi đè (Replace).
- **Web Audio Synthesizer**: Hiệu ứng âm thanh giọt nước ấm áp và chuông ngân khích lệ không cần tải file MP3 ngoài.

---

## 🛠 Hướng Dẫn Chạy Dự Án

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm run dev

# 3. Đóng gói cho môi trường thực tế
npm run build

# 4. Chạy bản preview đã đóng gói
npm run preview
```
