import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './SingleChef.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleChef = ({ singleChef }) => {
  const {
    id,
    chefName,
    chefPicture,
    likes,
    numbersOfRecipes,
    recipeNames,
    yearsOfExperience,
  } = singleChef;
  const handleFavorite = () => {
    toast(`This item is added to your favorite recipe`);
  };
  return (
    <Container>
      <CardGroup>
        <Card className="h-50">
          <Card.Img
            className="w-100 mx-auto img"
            variant="top"
            src={chefPicture}
          />
          <Card.Body>
            <Card.Title>{chefName}</Card.Title>
            <p>Years of experience: {yearsOfExperience}</p>
            <p>Numbers of recipes: {numbersOfRecipes}</p>
            <p>Likes : {likes}</p>
            <div className="text-center">
              <button className="btn btn-info" onClick={handleFavorite}>
                Favorite
              </button>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to={`/${id}`}>
              <Button className="w-100" variant="primary">
                View Recipes
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
      <ToastContainer />
    </Container>
  );
};

export default SingleChef;
