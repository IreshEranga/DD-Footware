import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';
//import { CartContext } from '../context/CartContext';
//import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  //const { cartItems } = useContext(CartContext);
  //const itemCount = cartItems.length;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">DD Foot Ware</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className='navbarlist listitem'>Home</Nav.Link>
            <Nav.Link href="/products" className='listitem'>Products</Nav.Link>
            <Nav.Link href="#pricing" className='listitem'>Outlets</Nav.Link>
          </Nav>

          {/* <Link to="/cart" className="btn btn-light position-relative">
            <FaShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {itemCount}
              </span>
            )}
          </Link> */}
          <Link to="/login" className="btn btn-light ms-2">Login</Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
