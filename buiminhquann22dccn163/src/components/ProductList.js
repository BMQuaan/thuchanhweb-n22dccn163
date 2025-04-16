import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      <h2>Sản phẩm nổi bật</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>

              {/* Nút sửa */}
              <button className="edit-btn" onClick={() => onEdit(product)}>
                Sửa
              </button>

              {/* Nút xoá */}
              <button
                className="delete-btn"
                onClick={() => onDelete(product.id)}
              >
                Xoá
              </button>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
