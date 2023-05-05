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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="mx-3 text-black" to="/">
                Home
              </Link>

              <Link className="mx-3 text-black" to="/blog">
                Blog
              </Link>
              <Link className="mx-3 text-black" to="/contact">
                Contact Us
              </Link>
              {user ? (
                <div>
                  <FontAwesomeIcon
                    className="mx-2  icon"
                    icon={faUser}
                    title="nadim mahamud"
                  />
                  <button onClick={handleLogOut} className="btn btn-primary">
                    Log out
                  </button>
                </div>
              ) : (
                <div>
                  <Link className="text-dark" to="/login">
                    Login
                  </Link>
                  <Link className=" ms-3 text-dark" to="/register">
                    Register
                  </Link>
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
