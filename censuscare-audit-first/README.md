# CensusCare — Audit-first prototype

Prototype đề xuất cho CensusCare (app.censuscare.spartan-dev.io): **census audit là trung tâm**. Facility chỉ chứa các audit của nó theo dạng row và danh sách Residents. Toàn bộ là dữ liệu giả, không gọi backend.

## Mở demo

`index.html` là một file chạy độc lập. Mở thẳng trong trình duyệt, hoặc chạy server từ thư mục gốc của repo:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Sau đó mở `http://127.0.0.1:4173/censuscare-audit-first/`. Font Geist tải từ Google Fonts; khi offline, trang dùng font hệ thống.

## Luồng demo

1. **Census audits** (home): tab To review / All / Reviewed, lọc theo facility.
2. **Linden · 10/16/2026**: filter tab All / Due / Not due / New patient / Not covered / Missing face sheets.
   - Sắp xếp theo cột, chọn nhiều dòng, rồi Request face sheets hoặc Download CSV cho các dòng đã chọn.
   - Download gồm CSV, PDF và Print.
   - Edit để sửa ngày census và ghi chú của audit.
   - Badge Added / Moved trên từng resident; footer tóm tắt thay đổi so với census trước.
   - Phân trang: chọn 5 / 10 / 25 dòng mỗi trang. Ô chọn tất cả chỉ chọn các dòng của trang đang xem.
   - Request face sheets: panel rộng hai cột. Trái: danh sách resident thiếu face sheet (tìm theo tên/phòng, Select all, tag Requested / New admission). Phải: To, Cc (kiểm tra địa chỉ), nội dung email, file CSV/PDF đính kèm, tự nhắc sau 3 ngày. Nút gửi ghi số resident ("Send for 3 residents").
3. **Resident panel** — menu bên trái (Summary · Censuses · Face sheet · Insurance card · DrChrono · Notes · History), bên phải chỉ hiện mục đang chọn; badge báo mục cần chú ý (! cần quyết định, Old dữ liệu DrChrono cũ, Missing thiếu face sheet). Hai nguồn dữ liệu: tài liệu facility trong CensusCare và DrChrono:
   - **Sources**: chip Census / Face sheet / DrChrono kèm thời điểm đọc; DrChrono đọc trước census mới nhất thì chip chuyển màu cảnh báo.
   - **Decision** (Status · Coverage · Visit policy): mỗi dòng ghi giá trị gợi ý, nguồn gợi ý và lý do; ghi rõ phạm vi (This audit only / This resident, from now on). Đổi bằng tay thì hiện "You" và nút Use suggestion.
   - **Hai nguồn lệch nhau**: hiện hai giá trị cạnh nhau, người dùng chọn một (ví dụ Frias: face sheet không coverage, DrChrono có Medi-Cal). Refresh DrChrono sau khi đã quyết định mà gợi ý đổi (ví dụ Carney: có visit mới 10/22) thì hỏi Keep / Use.
   - **DrChrono**: patient, last visit, next appointment, insurance, visits 12 tháng; Refresh có trạng thái đang đọc và báo cái gì mới.
   - **Show history**: mọi gợi ý, lần đọc DrChrono và quyết định bằng tay, ai làm, lúc nào; quyết định gần nhất có Undo.
   - Edit details, và "Not a resident?" để loại một dòng khỏi số liệu, có Restore.
   - Lịch sử On censuses, Face sheet và Insurance card dạng timeline, cùng Notes.
4. **Upload**: wizard 3 bước Facility → Files → Review.
   - Bước Files: chọn loại file, ngày census và ghi chú.
   - Bước Review: bỏ tick từng thay đổi trước khi Apply, và quyết định cho face sheet không khớp (Link / Add / Skip).
5. **Facility**: tab Census audits và Residents (lọc theo status và coverage), Edit details.
   - **DrChrono office**: chọn office DrChrono khi thêm hoặc sửa facility; tên và city tự điền theo office. Office đã thuộc một facility khác thì báo "Already a facility" và không cho tạo trùng. Header facility hiện "DrChrono office: …", hoặc nút Link DrChrono office nếu chưa liên kết.
   - Upload bước 1: "Add a facility" ngay trong wizard (không rời upload). Chọn office đã có facility thì hiện "Use this facility". Tạo xong facility được chọn sẵn.
   - Upload bước 2: mục DrChrono (Connected · Ready, office đang dùng). Chưa kết nối DrChrono thì không cho Scan.
6. **⌘K search**, **Members**, **Feedback**.
7. **Settings**: DrChrono EHR (Connected by / on, Last check, tìm trong danh sách providers, Test connection, Reconnect, Disconnect; Connect mở màn hình Authorize giả lập). Sidebar và banner trang Census audits theo trạng thái kết nối. Due after; upload logo PNG / JPEG / WebP tối đa 2 MB, hiện ở sidebar; nút Use sample logo để demo.

## Chuyển động

Drawer trượt vào/ra, overlay mờ dần, menu và dropdown bật nhẹ, toast trồi lên rồi tắt, các khối mới xuất hiện (cảnh báo, thanh chọn, banner) hiện mềm, nút có trạng thái nhấn. Tất cả ≤ 280 ms và tắt khi hệ điều hành bật Reduce motion.

## Mã nguồn

- `src/Main.dc.html`: bản gốc của prototype, file của canvas Claude Design.
- `src/runtime.js`: runtime nhỏ để render template `{{hole}}`, `sc-if` / `sc-for` và `on*` handler ngoài canvas. Mỗi lần state đổi chỉ vá phần DOM thay đổi, nên focus, vị trí cuộn và animation không bị chạy lại.
- `src/build.py`: ghép hai file trên thành `index.html`.

Build lại sau khi sửa `src/Main.dc.html`:

```sh
python3 censuscare-audit-first/src/build.py censuscare-audit-first/src/Main.dc.html censuscare-audit-first/src/runtime.js censuscare-audit-first/index.html
```
