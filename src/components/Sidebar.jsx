import { Button } from 'react-bootstrap';
import logo from '../assets/logo/logo.png'

function Sidebar() {
  return (
    <aside className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand">
            <img src={logo} alt="Spotify Logo" className='logo' />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='p-0'>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <p >Cookie Policy | Privacy</p>
        </div>
      </nav>
    </aside>
  );
}
export default Sidebar;
