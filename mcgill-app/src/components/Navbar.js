import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
 return (
  <Navbar bg="light" expand="lg">
    <Container className="ms-0">
      <Navbar.Brand>McGill</Navbar.Brand>
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
            <LinkContainer to="/home">
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