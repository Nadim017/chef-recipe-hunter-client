import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { authContext } from '../../Providers/AuthProviders';

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="text-black ">
            Chef Recipe Hunter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <NavLink className="mx-3 text-black" to="/">
                Home
              </NavLink>

              <NavLink className="mx-3 text-black" to="/blog">
                Blog
              </NavLink>
              <NavLink className="mx-3 text-black" to="/contact">
                Contact Us
              </NavLink>
              {user ? (
                <div>
                  <img
                    className="mx-2  icon"
                    src={user?.photoURL}
                    alt=""
                    title={user?.displayName}
                  />
                  <button onClick={handleLogOut} className="btn btn-primary">
                    Log out
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink className="text-dark" to="/login">
                    Login
                  </NavLink>
                  <NavLink className=" ms-3 text-dark" to="/register">
                    Register
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
