import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: ''
  });

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Lỗi khi tải sản phẩm:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts(prev => [...prev, newProduct]); 
        setForm({ name: '', description: '', price: '' });
      })
      .catch(err => console.error('Lỗi khi thêm sản phẩm:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Trang Chủ</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '40px', maxWidth: '400px' }}>
        <h2>Thêm sản phẩm mới</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Mô tả sản phẩm"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            name="price"
            placeholder="Giá"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>

      <ProductList products={products} />
    </div>
  );
};

export default Home;
