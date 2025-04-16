const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./data');

const app = express();
const mysql = require('mysql2');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'buiminhquan', 
  database: 'thuchanhweb'
});

db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối DB:', err);
    return;
  }
  console.log('Đã kết nối MySQL!');
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi truy vấn dữ liệu' });
    }
    res.json(results);
  });
});

app.post('/products', (req, res) => {
  const { name, description, price } = req.body;
  const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
  db.query(sql, [name, description, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi thêm sản phẩm' });
    }
    res.status(201).json({ message: 'Đã thêm sản phẩm!', productId: result.insertId });
  });
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  const sql = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(sql, [name, description, price, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi cập nhật sản phẩm' });
    }
    res.json({ message: 'Đã cập nhật sản phẩm!' });
  });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi xoá sản phẩm' });
    }
    res.json({ message: 'Đã xoá sản phẩm!' });
  });
});


app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
