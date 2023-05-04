import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';
import './Home.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';

const Home = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch('https://chef-recipe-hunting-server-pi.vercel.app/chef')
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div>
      <Container>
        <Carousel className="mt-3">
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="/img/2.jpeg" />
            <Carousel.Caption>
              <h3>Spaghetti Carbonara</h3>
              <p>
                Cook spaghetti according to package instructions.In a separate
                pan, cook bacon until crispy
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100  carousel-image" src="/img/1.jpg" />

            <Carousel.Caption>
              <h3>Roasted Chicken Thighs</h3>
              <p>
                Preheat oven to 425F. In a bowl, mix together olive oil, minced
                garlic, chopped rosemary, and salt.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/img/3.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Chocolate Chip Cookies</h3>
              <p>
                Cook spaghetti according to package instructions. In a separate
                pan, cook bacon until crispy
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="chef_container container mt-3">
        {chef.map((singleChef) => (
          <SingleChef singleChef={singleChef} key={singleChef.id}></SingleChef>
        ))}
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
