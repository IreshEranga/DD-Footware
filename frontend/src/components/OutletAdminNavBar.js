// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BiSolidLogOut } from 'react-icons/bi';
// import './OutletAdminNavBar.css';

// const OutletAdminNavBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-item" onClick={() => navigate('/outletadmin/products')}>
//         Products
//       </div>
//       <div className="nav-item" onClick={() => navigate('/outletadmin/outlets')}>
//         Outlets
//       </div>
//       <div className="nav-item" onClick={() => navigate('/outletadmin/orders')}>
//         Orders
//       </div>
//       <div className="nav-item logout" onClick={handleLogout}>
//         <BiSolidLogOut /> Logout
//       </div>
//     </nav>
//   );
// };

// export default OutletAdminNavBar;

import React from 'react';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';
//import { CartContext } from '../context/CartContext';
//import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  //const { cartItems } = useContext(CartContext);
  //const itemCount = cartItems.length;

  const navigate = useNavigate();

  const handleLogout = () => {
        localStorage.removeItem('token');
         navigate('/login');
      };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/outletAdmin">DD Foot Ware</Navbar.Brand>
          
          <Link to="/login" className="btn btn-light ms-2" onClick={handleLogout}>LogOut</Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;

