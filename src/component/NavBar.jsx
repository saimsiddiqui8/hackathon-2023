import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCartOutlined } from "@ant-design/icons"
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className='w-75'>
        <Navbar.Brand href="#home"><img width={60} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as ={Link} eventKey="1" className='mx-4 fw-bold' to="home">Home</Nav.Link>
            <Nav.Link as ={Link} eventKey="2" className='mx-4 fw-bold' to="cart">Cart</Nav.Link>
            <Nav.Link as ={Link} eventKey="3" className='mx-4 fw-bold' to="account">Account</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home"><ShoppingCartOutlined /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;