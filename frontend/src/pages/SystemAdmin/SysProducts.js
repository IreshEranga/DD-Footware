// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SystemAdminSideBar from './SystemAdminSideBar';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SysProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleUpdate = (productId) => {
//     navigate(`/systemadmin/products/update/${productId}`);
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${productId}`);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div>
//       <SystemAdminSideBar />
//       <div className="container" style={{ marginLeft: '260px', padding: '20px' }}>
//         <h1>Products</h1>
//         <table className="table table-bordered table-hover">
//           <thead className="thead-dark">
//             <tr>
//               <th scope="col">Product ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Stock Level</th>
//               <th scope="col">Price</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.productID}>
//                 <td>{product.productID}</td>
//                 <td>{product.name}</td>
//                 <td>{product.stockLevel}</td>
//                 <td>{product.price}</td>
                
//                 <td>
//                   <button
//                     className="btn btn-primary btn-sm mr-2"
//                     onClick={() => handleUpdate(product.productID)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(product.productID)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SysProducts;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SystemAdminSideBar from './SystemAdminSideBar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SysProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div>
      <SystemAdminSideBar />
      <div className="container" style={{ marginLeft: '260px', padding: '20px' }}>
        <h1>Products</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Name</th>
              <th scope="col">Stock Level</th>
              <th scope="col">Price</th>
              
              <th scope="col">Action</th>
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
