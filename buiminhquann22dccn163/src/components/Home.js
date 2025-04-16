import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [editingId, setEditingId] = useState(null); // <== đang sửa sản phẩm nào?

  const fetchProducts = () => {
    fetch('http://localhost:5000/products')
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

    if (editingId) {
      // === Cập nhật sản phẩm ===
      fetch(`http://localhost:5000/products/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(() => {
          setProducts(prev =>
            prev.map(p => (p.id === editingId ? { ...p, ...form } : p))
          );
          setForm({ name: '', description: '', price: '' });
          setEditingId(null);
        })
        .catch(err => console.error('Lỗi cập nhật:', err));
    } else {
      // === Thêm sản phẩm ===
      fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(response => {
          if (response.productId) {
            const newProduct = { id: response.productId, ...form };
            setProducts(prev => [...prev, newProduct]);
            setForm({ name: '', description: '', price: '' });
          }
        })
        .catch(err => console.error('Lỗi khi thêm sản phẩm:', err));
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price
    });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xoá sản phẩm này?')) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => {
          setProducts(prev => prev.filter(p => p.id !== id));
        })
        .catch(err => console.error('Lỗi khi xoá sản phẩm:', err));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Trang Chủ</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '40px', maxWidth: '400px' }}>
        <h2>{editingId ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</h2>
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
        <button type="submit">{editingId ? 'Cập nhật' : 'Thêm sản phẩm'}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: '', description: '', price: '' });
            }}
            style={{ marginLeft: '10px' }}
          >
            Huỷ
          </button>
        )}
      </form>

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
