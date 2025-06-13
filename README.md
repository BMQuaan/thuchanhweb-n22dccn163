# 🟢 GreenMart Backend

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
PORT=5000
MONGO_URI=<MongoDB connection>
JWT_SECRET=<your_secret_key>
```

Khởi động:

```bash
npm run dev     # Chạy với nodemon
npm start       # Production
```

---

## 📂 Cấu trúc thư mục

```
src/
├── controllers/     # Logic xử lý API
├── models/          # Các schema / ORM
├── routes/          # Định tuyến API
├── middlewares/     # Auth, logger, error handler
├── utils/           # Tiện ích
└── server.js        # Entry point
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
