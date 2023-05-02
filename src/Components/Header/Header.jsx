import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-white">Chef Recipe Hunter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="text-white" to="/">
                Home
              </Link>
              <Link className="mx-3 text-white" to="/blog">
                Blog
              </Link>
              {user ? (
                <div>
                  <FontAwesomeIcon
                    className="mx-2 text-bg-dark"
                    icon={faUser}
                  />
                  <button onClick={handleLogOut} className="btn btn-primary">
                    Log out
                  </button>
                </div>
              ) : (
                <div>
                  <Link className="text-white" to="/login">
                    Login
                  </Link>
                  <Link className=" ms-3 text-white" to="/register">
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
