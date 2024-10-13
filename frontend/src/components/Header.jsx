import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            {/* <img className="logo" src={logo} alt="SpiralShop" /> */}
            Spiral Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default header;
