import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"; 
function Navcomp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='nav-link'>Online Shop</Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>
            <Link to="/" className='nav-link'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Features" className='nav-link'>
              Features
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Pricing" className='nav-link'>
              Pricing
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navcomp;
