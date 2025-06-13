# 🟢 Backend - Website Siêu thị trực tuyến GreenMart

**GreenMart Backend** là server API cho một ứng dụng thương mại điện tử. Dự án cung cấp các chức năng cơ bản như quản lý người dùng, sản phẩm, đơn hàng, và giỏ hàng.

---

## ✅ Tính năng

* ✔️ Xác thực JWT (người dùng / admin)
* ✔️ CRUD sản phẩm
* ✔️ Quản lý giỏ hàng và đơn hàng
* ✔️ Phân quyền admin / user
* ✔️ Tìm kiếm, lọc, phân trang API

---

## ⚙️ Công nghệ

* Node.js + Express
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* Dotenv, CORS, Helmet

---

## 💪 Cài đặt

```bash
git clone https://github.com/BMQuaan/greenmart-backend.git
cd greenmart-backend
npm install
```

Tạo file `.env`:

```env
PORT=3000
MONGO_URL=mongodb+srv://greenmart:Greenmart123@greenmart.wnccwvo.mongodb.net/GreenMart?retryWrites=true&w=majority&appName=GreenMart

JWT_SECRET=182865cbe7b41daf860ce70519348a829091e65ede99cc11e07975fc219ff642
JWT_REFRESH_SECRET=05ff799218f7e768826c84a85acbbab1ec1334bc3e67cfb7a49965d133c5df77
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=daphfcudn
CLOUDINARY_API_KEY=612411374265656
CLOUDINARY_API_SECRET=h5Qc9CYvlJf-5GTje6IGiQ24zNA

EMAIL_USER=greenmart.project@gmail.com
EMAIL_PASS=pxsf uqzy hvzh outu

GOOGLE_CLIENT_ID=1054005180024-cv0rvp5sv4ohjqfk5o85au4j129hmsuc.apps.googleusercontent.com
```

Khởi chạy dự án:

```bash
npm start       # Production
```

---

## 📂 Cấu trúc thư mục

```
api\v1
├── controllers/      # Xử lý nghiệp vụ API
├── middlewares/      # Xác thực, kiểm lỗi, logger
├── models/           # Mongoose schemas
├── routes/           # Định nghĩa route
├── validations/      # Kiểm tra đầu vào 
config/               # Cấu hình kết nối 
dist/                 # Thư mục build
helper/               # Hàm tiện ích
node_modules/         # Thư viện npm
.env                  # Biến môi trường
.gitignore
index.ts              # Điểm khởi chạy app
package-lock.json
package.json
README.md
tsconfig.json         # Cấu hình TypeScript
```

---

## 📓 API Tiêu biểu

| Phương thức | Đường dẫn            | Mô tả                     |
| ----------- | -------------------- | ------------------------- |
| POST        | `/api/auth/register` | Đăng ký                   |
| POST        | `/api/auth/login`    | Đăng nhập                 |
| GET         | `/api/products`      | Danh sách sản phẩm        |
| POST        | `/api/products`      | Tạo sản phẩm (admin)      |
| PUT         | `/api/products/:id`  | Cập nhật sản phẩm         |
| DELETE      | `/api/products/:id`  | Xóa sản phẩm              |
| GET         | `/api/cart`          | Lấy giỏ hàng user         |
| POST        | `/api/cart`          | Thêm vào giỏ hàng         |
| DELETE      | `/api/cart/:itemId`  | Xóa khỏi giỏ hàng         |
| POST        | `/api/orders`        | Tạo đơn hàng              |
| GET         | `/api/orders`        | Xem đơn hàng (user/admin) |

---

## 🚀 Triển khai

Project sẵn sàng để deploy trên các nền tảng:

* Render / Vercel (kết hợp frontend)
* Docker
* CI/CD qua GitHub Actions

---

## 📚 Giấy phép

Dự án theo MIT License

---

## 🤝 Tác giả

* [BMQuaan - GitHub](https://github.com/BMQuaan)

> Vui lòng sao chép README này khi forking hoặc triển khai!
