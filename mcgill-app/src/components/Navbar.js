import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.png';


const NavBar = () => {
 const role = localStorage.getItem("role")
 const logged = localStorage.getItem("logged")

 return role === "VOLUNTEER" ?
<Navbar bg="light" expand="lg">
    <Container className="ms-0">
      <div className="d-flex align-items-center">
        <img className="navbar-logo pe-3" src={logo} alt="Logo" />
        <Navbar.Brand>McGill</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      { logged === "true" &&
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/volunteers">
            <Nav.Link>Volunteers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/report-problems">
            <Nav.Link>Report Problems</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lost-found-org">
            <Nav.Link>Lost & Found</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer to="/">
             <NavDropdown.Item>Home</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/volunteers">
             <NavDropdown.Item>Volunteers</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/report-problems">
             <NavDropdown.Item>Report Problems</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/lost-found-org">
             <NavDropdown.Item>Lost & Found</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>}
      <button type="button" className="btn btn-dark" onClick={logOut}>Log out</button>
    </Container>
  </Navbar>
  :
<Navbar bg="light" expand="lg">
    <Container className="ms-0">
      <div className="d-flex align-items-center">
        <img className="navbar-logo pe-3" src={logo} alt="Logo" />
        <Navbar.Brand>McGill</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      { logged === "true" &&
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/page2">
            <Nav.Link>Page 2</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/report-problems">
            <Nav.Link>Report Problems</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lost-found-vol">
            <Nav.Link>Lost & Found</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>}
      <button type="button" className="btn btn-dark justify-content-end" onClick={logOut}>Log out</button>
    </Container>
  </Navbar>

};

export default NavBar;



export function logOut() {
  console.log('here')
  localStorage.setItem("logged", false)
  localStorage.setItem("role", null);
  window.location.href = '/login'
}