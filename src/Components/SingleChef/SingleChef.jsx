import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './SingleChef.css';
import Button from 'react-bootstrap/Button';

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
          </Card.Body>
          <Card.Footer>
            <Button className="w-100" variant="primary">
              View Recipes
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default SingleChef;
