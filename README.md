# ENT Senior Care — Design system prototype

Bản demo thiết kế cho Consentform staff app, admin portal và hai workflow Census Audit / Face Sheet Intake. Dùng HTML, CSS, JavaScript thuần; không cần cài package.

## Mở demo

Mở `index.html` trong Chrome hoặc chạy từ thư mục dự án:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Truy cập `http://127.0.0.1:4173`.

Thiết kế theo [Cliently Light/Dark Mode trong Figma](https://www.figma.com/design/Kn4d4FIOmy9KhOsgjkTgXr/CRM-Dashboard-UI-Kit---Cliently?node-id=6146-19084). Font Inter cho UI, Manrope ExtraBold cho wordmark, tải từ Google Fonts. Nếu offline, trình duyệt dùng font sans-serif dự phòng. App không gửi dữ liệu form hay tài liệu đến dịch vụ khác.

## Nội dung

- Facilities: search, filter theo khả năng lên lịch, chi tiết facility, thêm facility / resident mẫu, đặt ngày clinic khi đủ consent.
- Census Audit: sample upload, review extraction, sửa dữ liệu, loại giường trống, resolve patient match, review insurance / staff decision, filter và export CSV.
- Face Sheet Intake: queue, sample extraction, source cạnh form, zoom, validation, draft, duplicate check, tạo / link patient và retry attachment.
- Users: hai nhóm Platform / ENT, tìm kiếm và filter, xem tài khoản mẫu ở chế độ read-only.
- Activity log: các thao tác trong phiên demo.
- UI Kit: Button, Input, Select, Dropdown, Table, Checkbox, Radio, Tasks Status, Universal Cards và Pagination cho cả Light/Dark.
- Dark mode: switch trên header đổi toàn bộ app; lựa chọn theme được lưu trên thiết bị sau reload.
- Demo cases (`#cases`): 36 case ENT mở trực tiếp, có search và filter theo workflow. Mỗi link chuẩn bị dữ liệu mẫu cho trạng thái đó.

## Các case có sẵn

- Facilities (8): overview, collecting, ready, scheduled, empty, create facility, add resident, schedule clinic.
- Census (13): toàn bộ kết quả, due, possible match, confirmed new, not due, Courtesy, upload, extraction, loading, empty search, eligibility unavailable, Filter, Export.
- Intake (10): queue, empty, upload, new patient, duplicate, validation, loading, created, linked, attachment retry.
- Administration (5): Platform, ENT, inactive account, activity history, shared components.

Tabs, search, match/insurance filters và Check insurance nằm cùng một hàng trên desktop. Queue intake có sẵn 5 hồ sơ mẫu: 2 draft, 2 completed và 1 retry. Cả 6 facility đều có danh sách resident mẫu tương ứng với summary.

UI Kit có thêm 5 page preview hoạt động trên dữ liệu mẫu:
- **Emails Page:** inbox, unread/archive, tìm kiếm, lọc facility, soạn thư và reply lưu trong phiên demo.
- **Tasks Page:** List/Kanban dùng chung dữ liệu, tạo/sửa task, phân công, checklist, hoàn thành, lọc, import/export JSON.
- **Note Page:** favorite/list, tạo/sửa/xóa note, màu từ Figma, menu và copy link nội bộ.
- **Settings Page:** Profile, Email & Calendar, Storage, Refer Team, Notification, Workspace, Members, Plans, Integration. Các thay đổi chỉ áp dụng vào demo.
- **Help & Center:** search, topics, articles, mục lục và FAQ mở rộng.

## UI V2 — ElevenLabs

Nút **UI V2** nằm ngay trước **UI V1** trên header. UI V2 mở Home theo bố cục ElevenLabs, rồi áp dụng cùng font, icon, component, light/dark theme vào các workflow ENT. **UI V1** chuyển về bản Cliently Figma. Cả hai bản dùng chung dữ liệu mẫu trong phiên.

UI V2 có Home, Facilities, Census, Intake, Tasks, Messages, Notes, Users, Activity, Settings, Help, Components và Demo cases. Search workspace (nút header hoặc `Cmd/Ctrl K`) tìm workflow, facility, resident, task và note. Banner, quickstarts và recents mở workflow tương ứng.

Heading dùng font Waldenburg lấy từ app nguồn; nội dung và controls dùng Inter. Icon SVG lấy từ ElevenLabs. Thanh trên cùng dùng gradient teal riêng cho ENT. Hình prism giữ nguyên khối và ánh sáng của asset nguồn, đổi sang teal, sage, sand và mist bằng filter hiển thị. Tham chiếu chi tiết: `design-reference/ELEVENLABS-AUDIT.md`.

Mở trực tiếp UI V2: `http://127.0.0.1:4173/#v2`. Lựa chọn phiên bản được giữ trong tab; theme được lưu trên thiết bị.

## Kịch bản demo 5–7 phút

1. **Facilities:** giới thiệu consent progress và trạng thái Ready to schedule. Mở Maple Grove để xem resident table. Oakridge đạt threshold, có thể đặt ngày clinic mẫu.
2. **Census Audit:** xem Due, Match, Insurance và Decision ở các cột riêng. Search Walter → Review → confirm match → save; lịch sử khám và Due mới được hiển thị.
3. **Upload census:** Use sample & review → xác nhận DOB của Walter → Confirm & run audit. Dòng Vacant bed bị loại. Export report xuất các hàng đang được filter và quyết định staff hiện tại.
4. **Face Sheet Intake:** New intake → chọn New patient → Use sample & extract. Đối chiếu nguồn với form. Có thể sửa và Save draft rồi mở lại.
5. Mở Demo options → chọn attachment failure → confirm review → Approve. Patient ID được giữ khi file lỗi; Retry attachment không tạo patient lần hai.
6. New intake → Possible existing patient → chọn Link existing patient → approve. Kết quả dùng DEMO-1042 và không overwrite hồ sơ.
7. **Users / UI Kit:** cho thấy bộ UI dùng chung cho staff và admin.

## Giới hạn đã ghi rõ trong UI

- Dữ liệu hoàn toàn giả. Không lấy tên, email, hồ sơ hoặc tài liệu bệnh nhân từ app live.
- OCR, matching, eligibility, consent records và DrChrono đều mô phỏng; chưa tích hợp backend.
- Chọn file census chỉ minh họa bước chọn file; extraction vẫn dùng sample. Face sheet local có preview PDF / ảnh nhưng form vẫn là sample.
- File local nằm trong bộ nhớ trình duyệt, không upload và không được lưu vào repository.
- Dữ liệu demo thay đổi chỉ tồn tại trong tab hiện tại. Reload hoặc Reset demo khôi phục dữ liệu ban đầu; lựa chọn Light/Dark vẫn được giữ.
- Mở một link Demo cases có thể khôi phục dữ liệu mẫu của workflow đó để trình bày lại trạng thái; đây không phải dữ liệu được lưu bền vững.
- Duplicate scenarios dùng dataset có sẵn, không phải thuật toán phát hiện trùng thật. Retry được mô phỏng bằng trạng thái trong bộ nhớ, chưa có idempotency phía server.
- Quy tắc 6 tháng là giả định demo: từ completed ENT visit đến census date. Cần khách hàng xác nhận trước khi triển khai.
- Không có ký consent thật, phân quyền backend, API eligibility hay tạo patient thật.

Xem `DESIGN-HANDOFF.md` để bàn giao cho team dev và `QA.md` để xem các kiểm tra đã chạy.

## Component library revision

UI Kit tại `#kit` có đầy đủ các component được yêu cầu. Button dùng các size 32/38/48px; field 48px, toolbar select 32px, Filter select 44px. Checkbox/radio 24px; Export dùng variant square 18px riêng. Tasks Status dùng 4 palette Light/Dark và dot SVG gốc. Universal Cards gồm Note, Task, Headcount. Pagination có Previous/Next, số trang và Show 8/16/all; Demo cases mặc định hiển thị cả 36 case.

`theme.js` quản lý theme và icon variant; `components.js` quản lý Tasks Status và gallery; `selects.js` dùng chung ở toolbar, popup và form.


## Bản demo đóng gói

`ENT-care-design-system-demo.zip` chứa cả bản Cliently Figma và UI V2, asset local, hướng dẫn và ảnh QA. Giải nén rồi chạy HTTP server theo hướng dẫn phía trên.

Banner Home dùng minh hoạ hồ sơ, checklist và lịch clinic riêng cho ENT. Quickstarts dùng bốn minh hoạ riêng cho Census, Intake, clinic và Facilities, đồng bộ với banner. Recents dùng minh hoạ công việc/lịch clinic.
