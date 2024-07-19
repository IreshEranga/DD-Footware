import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">DD Foot Ware</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/" className='navbarlist listitem'>Home</Nav.Link>
            <Nav.Link href="/products" className='listitem'>Products</Nav.Link>
            <Nav.Link href="#pricing" className='listitem'>Outlets</Nav.Link>
          </Nav>

          {/* Add the login button here */}
          <Link to="/login" className="btn btn-light">Login</Link>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavBar;