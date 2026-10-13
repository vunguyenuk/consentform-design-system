# Font đang dùng trong Consent Form Design System

Xuất ngày 13/10/2026. Đây là bản sao riêng; ứng dụng giữ nguyên cấu hình font hiện tại.

| Font | Weight được khai báo | Đang dùng ở đâu | File |
| --- | --- | --- | --- |
| Inter | 400 Regular, 500 Medium, 600 SemiBold | Nội dung, input, button, bảng của V1/V2; tiêu đề V1 | `Inter/*.ttf` |
| Manrope | 800 ExtraBold | Wordmark/logo V1 | `Manrope/Manrope-ExtraBold.ttf` |
| Waldenburg | 400 Regular, 500 Medium | Tiêu đề, số liệu và một số tiêu đề popup V2 | `Waldenburg/*.otf` + bản web `.woff2` |

Inter và Manrope là file TTF từ stylesheet Google Fonts đang được `index.html` sử dụng. Có thể cài các file TTF vào máy. Waldenburg gồm bản WOFF2 gốc có sẵn trong dự án và bản OTF giải nén để cài vào máy. Đã đối chiếu để đảm bảo giữ nguyên glyph và dữ liệu font.

`fonts.css` chứa khai báo để dùng toàn bộ font từ folder này. Giữ nguyên cấu trúc các thư mục khi copy sang project khác. `manifest.json` ghi nguồn và checksum từng file.

Đối chiếu mã nguồn: `index.html` (Google Fonts); `styles.css` (Inter và Manrope); `v2.css` (Waldenburg Regular/Medium); `care.css` (số liệu V2).

Không xuất Waldenburg Bold/Bold SemiCondensed vì hai file này có trong assets nhưng chưa được CSS của ứng dụng khai báo sử dụng. Các kiểu chữ hệ thống như sans-serif, monospace và Georgia là fallback hoặc chữ mô phỏng tài liệu/chữ ký, không phải font tải kèm của UI.
