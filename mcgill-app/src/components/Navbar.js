import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.png';


const NavBar = () => {
 const role = localStorage.getItem("role")
 const logged = localStorage.getItem("logged")

 return role === "VOLUNTEER" ?
<Navbar className="nav-color" expand="lg">
    <Container className="ms-0">
      <div className="d-flex align-items-center">
        <img className="navbar-logo pe-3" src={logo} alt="Logo" />
        <Navbar.Brand><b>EVENTASK</b></Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      { logged === "true" &&
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/report-problems">
            <Nav.Link>Report Problems</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lost-found-vol">
            <Nav.Link>Lost & Found</Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Text className='pe-3'>
            {localStorage.getItem("logged")=="true" ? "Welcome " + JSON.parse(localStorage.getItem('user')).firstname: null}
         </Navbar.Text>
         {localStorage.getItem("logged") == 'true' ? <button type="button" className="btn btn-dark justify-content-end" onClick={logOut}>Log out</button> : null}
      </Navbar.Collapse>}
      
    </Container>
  </Navbar>
  :
<Navbar className="nav-color" expand="lg">
    <Container className="ms-0">
      <div className="d-flex align-items-center">
        <img className="navbar-logo pe-3" src={logo} alt="Logo" />
        <Navbar.Brand><b>EVENTASK</b></Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      { logged === "true" &&
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users">
            <Nav.Link>Create Users</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tasks">
            <Nav.Link>All Tasks</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/report-problems">
            <Nav.Link>Report Problems</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lost-found-org">
            <Nav.Link>Lost & Found</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>}
      <Navbar.Text className='pe-3'>
        {localStorage.getItem("logged")=="true" ?  "Welcome " + JSON.parse(localStorage.getItem('user')).firstname: null}
        </Navbar.Text>
      {localStorage.getItem("logged") == 'true' ? <button type="button" className="btn btn-dark justify-content-end" onClick={logOut}>Log out</button> : null}

    </Container>
  </Navbar>

};

export default NavBar;



export function logOut() {
  localStorage.setItem("logged", false)
  localStorage.setItem("role", null);
  localStorage.setItem("user", null)
  window.location.href = '/login'
}