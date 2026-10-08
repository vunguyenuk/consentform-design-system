# ENT Senior Care — UI V1 & UI V2

Prototype có hai hệ thiết kế dùng chung các chức năng Consentform được port từ file engineer gửi: `design-reference/engineer-reference.html`. UI V1 dùng Cliently Figma Light/Dark; UI V2 dùng hệ UI đã audit từ ElevenLabs, với minh họa ENT riêng.

## Mở demo

Chạy trong thư mục dự án, không cần cài package:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Mở `http://127.0.0.1:4173`. Nên dùng HTTP server để file preview, IndexedDB và storage hoạt động nhất quán.

Bấm **Demo guide · switch role** trong sidebar hoặc **Demo guide** trên màn hình sign in để mở danh sách chức năng như file engineer. Có thể đăng nhập bằng form:

| Username | Password mặc định | Vai trò / kết quả |
| --- | --- | --- |
| admin | demo1234 | ENT admin; toàn bộ facility |
| staff | demo1234 | Facility staff; Sunrise Villa |
| tbrooks | demo1234 | Facility staff; Oak Terrace |
| dpark | demo1234 | Facility staff; Bayview |
| palmcourt.frontdesk | demo1234 | Facility staff; Palm Court |
| locked | demo1234 | Account deactivated |
| platform | demo1234 | Not an ENT account |

## Chức năng dùng chung trên cả hai UI

- **Admin:** danh sách / thêm facility, chi tiết và consent progress, đổi threshold, đặt / đổi ngày khám, tài khoản staff: tạo, sửa, activate/deactivate, reset password.
- **Residents:** roster, tìm kiếm, status và next action, phân trang; thêm/sửa resident, signer Self/POA/RP, validation email và số điện thoại quốc tế.
- **Consent:** gửi/resend theo kênh, reminder voice/SMS giả lập, retry delivery, copy/open/replace link, do-not-contact và khôi phục; xem lịch sử và kết quả từng kênh.
- **Public signing:** link hợp lệ/không hợp lệ/đã ký, chữ ký vẽ hoặc nhập, certification bắt buộc, receipt, xem trước và tải PDF demo.
- **Documents:** Face sheet / Insurance card PDF, PNG, JPG tối đa 10 MB; upload/replace/download trong browser. Retry lưu signed PDF tách khỏi thao tác ký.
- **Scheduling:** đạt threshold gửi một PCC alert giả lập; booked clinic nhận thêm chữ ký mới; đổi lịch cập nhật nhóm đã booked; kỳ đã qua lưu consent archive và mở vòng mới.
- **Activity:** email/SMS/voice, Request/Reminder/Alert, Delivered/Failed; search, facility, khoảng ngày và export CSV; workspace history.
- **Settings:** Profile, Preferences, Password, Sessions; timezone, Light/Dark/System, đổi mật khẩu và sign out everywhere trong demo.
- **Role access:** staff chỉ quản lý resident của facility được giao; trang và thao tác admin bị chặn. Menu và CTA Home phù hợp role.

Nút **UI V2** nằm trước **UI V1** trên header; bản được chọn có border đen. Chuyển UI trên các trang Consentform giữ nguyên route, dữ liệu và giá trị form đang nhập. Cả hai bản hỗ trợ Light/Dark.

Seed ban đầu có 4 facility / 62 resident: Sunrise Villa 14/15 chữ ký, Oak Terrace 17/15 ready, Bayview có clinic booked, Palm Court trống và thiếu Drive folder. Dữ liệu có thể thay đổi sau khi bạn thử chức năng. Demo guide có Reset và Restore previous demo data.

## Workflow và UI library đã có

Census Audit và Face Sheet Intake giữ các luồng sample: extraction review, patient matching, insurance/staff decision, duplicate check, approve, draft, link existing patient, retry attachment và export. Facility navigation dùng cùng danh sách facility của Consentform; dữ liệu clinical extraction vẫn là sandbox riêng.

UI library có Button, Input, Select, Dropdown, Table, Checkbox, Radio, Tasks Status, Universal Cards, Pagination; kèm Emails, Tasks List/Kanban, Notes, 9 mục Workspace Settings và Help & Center. Những page này dùng bộ dữ liệu sandbox riêng trong phiên, không phải email/task live của tài khoản đang đăng nhập.

`#cases` có 36 scenario cũ và 8 scenario Consentform bổ sung. Một số case Census/Intake chuẩn bị lại sample của workflow để trình bày trạng thái.

## Lưu trữ và giới hạn

Toàn bộ là dữ liệu giả, không gọi backend Railway, không gửi email/SMS/voice, không upload Google Drive và không tạo hồ sơ DrChrono thật.

Consentform facility, resident, signature, lịch khám, tài khoản, delivery history và session lưu trong localStorage; file upload lưu trong IndexedDB. Reload giữ dữ liệu và cả hai edition cùng đọc một store. Reset có snapshot khôi phục lần trước; file blob được giữ để phục hồi tài liệu.

Census/Intake và Emails/Tasks/Notes/Workspace Settings cũ vẫn dùng dữ liệu sample trong bộ nhớ, mất khi reload. Theme lưu trên thiết bị; edition lưu trong tab. Font Inter tải từ Google Fonts; font và asset ElevenLabs/Cliently còn lại nằm trong `assets/`.

Phân quyền/password ở đây chỉ mô phỏng trong browser; dữ liệu và password demo không được bảo mật như production. Bản tích hợp thật cần server authentication/authorization, storage, delivery providers, signed-document audit và API clinical riêng. PDF dùng font cơ bản, chuyển ký tự ngoài ASCII sang ký tự thay thế; đây là document demo.

## Kiểm tra và bàn giao

```sh
node --test tests/care-domain.test.cjs
```

19 domain tests đã pass. UI được kiểm tra theo role, Light/Dark, chuyển edition, public signing, retry, file persistence, scheduling và mobile controls. Chi tiết: `QA.md` và `FUNCTIONAL-COVERAGE.md`; design tokens/provenance: `DESIGN-HANDOFF.md`.

`ENT-care-design-system-demo.zip` chứa code, asset local, source engineer, tài liệu và ảnh QA. Giải nén rồi chạy HTTP server như trên.
