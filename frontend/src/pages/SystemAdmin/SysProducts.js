import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SystemAdminSideBar from './SystemAdminSideBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SystemAdminSideBar.css';
import { IoIosCloseCircle } from "react-icons/io";

import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './SysForm.css';


const SysProducts = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    stockLevel: '',
    price: ''
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    stockLevel: '',
    price: ''
  });

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

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setUpdatedProduct({
      name: product.name,
      stockLevel: product.stockLevel,
      price: product.price
    });
    setIsUpdateFormOpen(true);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      fetchProducts();
      toast.success('Product Deleted Successfuly');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${selectedProduct.productID}`, {
        productID: selectedProduct.productID, // Ensure productID is included
        name: updatedProduct.name,
        stockLevel: updatedProduct.stockLevel,
        price: updatedProduct.price
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchProducts();
      toast.success('Product Updated Successfuly');
      setIsUpdateFormOpen(false);
    } catch (error) {
      if (error.response) {
        console.error('Error updating product:', error.response.data);
      } else {
        console.error('Error updating product:', error.message);
      }
    }
  };
  
//   const handleAddFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post('http://localhost:5000/api/products', newProduct, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log('Product added:', response.data);
//         fetchProducts();
//         setIsAddFormOpen(false);
//     } catch (error) {
//         if (error.response) {
//             console.error('Error adding product:', error.response.data);
//         } else {
//             console.error('Error adding product:', error.message);
//         }
//     }
// };


const handleAddFormSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/products', newProduct, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    fetchProducts();
    toast.success('Product Added Successfuly');
    setNewProduct({
      name: '',
      stockLevel: '',
      price: ''
    });
    setIsAddFormOpen(false);
  } catch (error) {
    if (error.response) {
      console.error('Error adding product:', error.response.data);
    } else {
      console.error('Error adding product:', error.message);
    }
  }
};


  const handleUpdateFormChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value
    });
  };

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseUpdateForm = () => {
    setIsUpdateFormOpen(false);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  return (
    <div className="main-container">
      <SystemAdminSideBar onToggle={handleSidebarToggle} />
      <div
        className={`content ${isSidebarOpen ? 'container-shifted' : ''}`}
        style={{ padding: '20px' }}
      >
        <h1>Products</h1>
        <Button variant="success" onClick={() => setIsAddFormOpen(true)}>Add Product</Button><br /><br /><br />
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
                    onClick={() => handleUpdate(product)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.productID)}
                    style={{ marginLeft: '45px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isUpdateFormOpen && (
        <div className="update-form-overlay">
          <div className="update-form-container">
            <IoIosCloseCircle className="close-button" onClick={handleCloseUpdateForm} />
            <h2>Update Product</h2>
            <form onSubmit={handleUpdateFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={handleUpdateFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stockLevel">Stock Level</label>
                <input
                  type="number"
                  className="form-control"
                  id="stockLevel"
                  name="stockLevel"
                  value={updatedProduct.stockLevel}
                  onChange={handleUpdateFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={updatedProduct.price}
                  onChange={handleUpdateFormChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {isAddFormOpen && (
        <div className="add-form-overlay">
          <div className="add-form-container">
          <IoIosCloseCircle className="close-button" onClick={handleCloseAddForm} />
            <center><h2>Add Product</h2></center>
            <form onSubmit={handleAddFormSubmit} >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stockLevel">Stock Level</label>
                <input
                  type="number"
                  className="form-control"
                  id="stockLevel"
                  name="stockLevel"
                  value={newProduct.stockLevel}
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleAddFormChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SysProducts;
