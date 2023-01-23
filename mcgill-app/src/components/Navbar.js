import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ps-2" to="/">McGill</Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page2">Page2</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">Home</Link>
              <Link className="dropdown-item" to="/page2">Home</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;