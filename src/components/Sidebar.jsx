/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Form, InputGroup } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSongsAction, removeSongAction } from "../redux/actions";

function Sidebar() {
  const [query, setQuery] = useState("");
    const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <aside className="col col-lg-1">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand">
            <Link to={'/'} className="">
            <img src={logo} alt="Spotify Logo" className="logo"/></Link>
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
              <ul className="p-0">
                <li>
                  <Link to={'/'} onClick={()=>{
                    dispatch(removeSongAction())
                  }} className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link to={'/favourite'} className="text-decoration-none nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        navigate('/')
                        dispatch(getSongsAction(query))
                    }}>
                      <InputGroup className="mb-3">
                        <Form.Control
                        onChange={(e)=> {setQuery(e.target.value)}}
                        value={query}
                          placeholder="Search..."
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <Button type="submit" variant="outline-secondary" id="button-addon2">
                          GO
                        </Button>
                      </InputGroup>
                    </Form>
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
          <p className="mb-2">Cookie Policy | Privacy</p>
        </div>
      </nav>
    </aside>
  );
}
export default Sidebar;
