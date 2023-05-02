import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="bg-light py-3">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We are a website dedicated to helping you find delicious recipes
                from around the world.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:contact@yourwebsite.com">
                    contact@yourwebsite.com
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/yourwebsite">Facebook</a>
                </li>
                <li>
                  <a href="https://www.twitter.com/yourwebsite">Twitter</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Categories</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Appetizers</a>
                </li>
                <li>
                  <a href="#">Entrees</a>
                </li>
                <li>
                  <a href="#">Desserts</a>
                </li>
                <li>
                  <a href="#">Vegetarian</a>
                </li>
                <li>
                  <a href="#">Gluten-Free</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center">
            © {new Date().getFullYear()} Your Website
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
