const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// GET 
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST
app.post('/api/products', (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Thiếu thông tin sản phẩm' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
