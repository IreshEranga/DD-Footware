import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SystemAdminSideBar from './SystemAdminSideBar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SystemAdminSideBar.css';



const SysProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Assume sidebar starts open

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleUpdate = (productId) => {
    navigate(`/systemadmin/products/update/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
      <SystemAdminSideBar onToggle={handleSidebarToggle} />
      <div
        className={`content ${isSidebarOpen ? 'container-shifted' : ''}`}
        style={{ padding: '20px' }}
      >
        <h1>Products</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ width: '50px' }}>Product ID</th>
              <th scope="col" style={{ width: '200px' }}>Name</th>
              <th scope="col" style={{ width: '120px' }}>Stock Level</th>
              <th scope="col" style={{ width: '120px' }}>Price</th>
              <th scope="col" style={{ width: '120px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productID}>
                <td>{product.productID}</td>
                <td>{product.name}</td>
                <td>{product.stockLevel}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => handleUpdate(product.productID)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.productID)}
                    style={{marginLeft:'45px'}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SysProducts;

