import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.png';


const NavBar = () => {
 return (
  <Navbar bg="light" expand="lg">
    <Container className="ms-0">
      <div className="d-flex align-items-center">
        <img className="navbar-logo pe-3" src={logo} alt="Logo" />
        <Navbar.Brand>McGill</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/page2">
            <Nav.Link>Page 2</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer to="/">
             <NavDropdown.Item>Home</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/page2">
             <NavDropdown.Item>Page 2</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;