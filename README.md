# ENT Senior Care — UI V1 & UI V2

Prototype có hai hệ thiết kế dùng chung các chức năng Consentform được port từ file engineer gửi: `design-reference/engineer-reference.html`. UI V1 dùng Cliently Figma Light/Dark; UI V2 dùng Inter, icon ENT tự vẽ và minh họa workflow ENT.

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

Census Audit và Face-sheet Intake thường dùng workflow persistent mới, với file gốc lưu local, review/identity, visit evidence, coverage, duplicate check, retry attachment và report snapshot. Các link trong Demo cases cũ vẫn dùng sandbox sample riêng. Facility navigation dùng cùng danh sách facility của Consentform.

UI library có Button, Input, Select, Dropdown, Table, Checkbox, Radio, Tasks Status, Universal Cards, Pagination; kèm Emails, Tasks List/Kanban, Notes, 9 mục Workspace Settings và Help & Center. Những page này dùng bộ dữ liệu sandbox riêng trong phiên, không phải email/task live của tài khoản đang đăng nhập.

`#cases` có 36 scenario cũ và 8 scenario Consentform bổ sung. Một số case Census/Intake chuẩn bị lại sample của workflow để trình bày trạng thái.

## Lưu trữ và giới hạn

Toàn bộ là dữ liệu giả, không gọi backend Railway, không gửi email/SMS/voice, không upload Google Drive và không tạo hồ sơ DrChrono thật.

Consentform facility, resident, signature, lịch khám, tài khoản, delivery history và session lưu trong localStorage; file upload lưu trong IndexedDB. Reload giữ dữ liệu và cả hai edition cùng đọc một store. Reset có snapshot khôi phục lần trước; file blob được giữ để phục hồi tài liệu.

Các route Census/Intake thường lưu metadata và file gốc trong browser sau khi upload hoàn tất. Các case Census/Intake cũ và Emails/Tasks/Notes/Workspace Settings vẫn là sandbox sample trong bộ nhớ. Theme lưu trên thiết bị; edition lưu trong tab. Font Inter tải từ Google Fonts; asset Cliently và minh họa ENT nằm trong `assets/`. Inter 400/500/600 và Manrope 800 được xuất riêng trong `exported-fonts/`.

Phân quyền/password ở đây chỉ mô phỏng trong browser; dữ liệu và password demo không được bảo mật như production. Bản tích hợp thật cần server authentication/authorization, storage, delivery providers, signed-document audit và API clinical riêng. PDF dùng font cơ bản, chuyển ký tự ngoài ASCII sang ký tự thay thế; đây là document demo.

## Kiểm tra và bàn giao

```sh
node --test tests/care-domain.test.cjs
```

19 domain tests đã pass. UI được kiểm tra theo role, Light/Dark, chuyển edition, public signing, retry, file persistence, scheduling và mobile controls. Chi tiết: `QA.md` và `FUNCTIONAL-COVERAGE.md`; design tokens/provenance: `DESIGN-HANDOFF.md`.

`ENT-care-design-system-demo.zip` chứa code, asset local, source engineer, tài liệu và ảnh QA. Giải nén rồi chạy HTTP server như trên.


## Senior document reader

Document lists and files have larger text and labelled controls on iPad/mobile. Open a saved file or signed consent to use Text view, Page view, visible zoom, Back to top and close confirmation. PDF.js runs locally; uploaded file bytes remain unchanged. Text reflow uses selectable PDF text. Scans/images retain original layout and need OCR for text reflow. Generated demo placeholders use PDF content even if their legacy sample filename ends in JPG; the reader downloads these generated samples with a PDF extension.

Code: `senior-documents.js` and `senior-documents.css`. Integration: `app.js`, `care.js`. Local QA: `tests/artifacts/document-reader.html#v2`. Run checks with `node --test tests/care-domain.test.cjs tests/senior-documents.test.cjs`.

## Census / Intake — reference mới ngày 14/10

`#census` và `#intake` dùng chung chức năng trên V1/V2: upload file thật, review và lưu sau reload; thêm/sửa/loại dòng có lý do; xác nhận identity, ghi nhận/thu hồi visit, coverage độc lập; đọc lại có so sánh; report snapshot, CSV và in. Intake hỗ trợ nhiều file, xác nhận từng trường, Mark reviewed, kết nối EMR demo và retry attachment giữ nguyên patient ID.

PDF có selectable text được đọc local bằng PDF.js; ảnh/scans nhập tay, TIFF tải để xem bên ngoài. Không gọi Drive/EMR/OCR/eligibility thật. File gốc giữ trong IndexedDB, metadata ở `ent-clinical-workflows.v1`. Upload đang đọc có thể tiếp tục khi chuyển trang trong tab; đóng/reload tab trước khi upload hoàn tất cần chọn lại file.

Mapping: `design-reference/REFERENCE-2-FEATURE-COVERAGE.md`. Tests: `node --test tests/care-domain.test.cjs tests/senior-documents.test.cjs tests/clinical-workflows.test.cjs`.

## Census Audit detail — phạm vi đã chốt

Trang chính tiếp tục là V1/V2 của dự án. Chỉ phần Census Audit detail dùng bố cục mới từ `design-reference/engineer-index-2.html`: header gọn, navigation Census review / Audit results / Report, danh sách cạnh tài liệu gốc và popup sửa resident theo yêu cầu mới nhất ngày 15/10. Mã và CSS mới được giới hạn trong `census-detail.js` / `census-detail.css`. Home và Intake không được thay bằng bundle React của file tham chiếu.

## Census comparison refinement — 14 October

Review/resident detail now prioritize a compact header and independently scrolling list/form and original-PDF panes on iPad. Optional metadata lives in Audit info; page/zoom controls stay at the bottom. Mobile and enlarged text have labelled view switches. The new renderer uses local PDF.js and does not alter source bytes. Evidence and limits: `design-reference/CENSUS-COMPARISON-UX.md` (from the project root).

Residents, To check và Audit results đều mở cùng popup sửa resident theo file index cũ. Tài liệu gốc và dòng tô sáng ở phía trên, chín trường in trên census ở dưới (3/2/1 cột theo diện tích và cỡ chữ). Identity, completed visits và coverage vẫn độc lập, truy cập bằng tab hoặc menu Review section trên mobile. Lưu/Previous/Next giữ ở footer; đóng hay đổi dòng có xác nhận nếu chưa lưu. Màn Audit dùng header và thống kê gọn, search/filter ở hàng dưới tabs. Chi tiết kiểm tra: `design-reference/CENSUS-ROW-POPUP.md`.

Cross-tab review drafts: data updates now keep dirty review forms in place. The known total draft 7 was restored without saving and survived a subsequent save in another tab. Session/access changes still refresh. 51 tests pass, including three production-listener regression tests.

## Shared UI consistency — October 15

Product typography now uses 16px body/controls, 14px supporting text, 18px record names and 20–24px headings; actual document text remains 18px and zoomable. Touch actions remain at least 48px. Both editions use the shared final `care-ui.css` layer. Repeated copy is removed, primary Home workflows are grouped, and icons retain visible action labels.

54 tests pass (`node --test tests/*.test.cjs`). Final browser matrix: 15 routes × V1/V2 × 768×1024 / 390×844 = 60 states. Audit, limitations and evidence: [SENIOR-UI-CONSISTENCY-AUDIT.md](design-reference/SENIOR-UI-CONSISTENCY-AUDIT.md). Earlier QA notes are historical; this section supersedes their product font sizes.

### Census stage/component consistency

Review, Audit results and Report now share the same audit header/navigation. Report opens without creating a snapshot; Create report is explicit inside that tab. Census buttons inherit global desktop/touch sizes, normal iPad/desktop audit filters share one row, and the popup sample table follows app components. 58 tests pass. See design-reference/CENSUS-SYSTEM-CONSISTENCY.md.

### Latest desktop/Census clarity refinement

Wide mouse desktops use 38px controls / 14px control text; iPad/mobile keeps 48px / 16px. Census detail now has a breadcrumb instead of All audits beside the heading, and the list has one title. Row correction has one required whole-row confirmation instead of nine Verify checkboxes; edits clear it. 61 tests pass. See design-reference/CENSUS-CLARITY-FIXES.md.


### Census results — unified filters, October 15

One aligned Search / Show residents / Identity / Coverage toolbar replaces the duplicate pills, resident-list selector and Actions menu. Clear is conditional; matches refresh lives in Audit details. Mobile keeps full-width Search and expandable filters; desktop/touch shared sizes remain 38/48px. 63 tests pass. Scope and evidence: design-reference/CENSUS-UNIFIED-FILTERS.md.
