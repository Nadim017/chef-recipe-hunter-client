import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRecipes.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

const ChefRecipes = () => {
  const { id } = useParams();
  const chefRecipes = useLoaderData();

  console.log('chessRecipes', chefRecipes);
  return (
    <div className="mt-3 mb-3">
      <Container>
        <div className="mx-auto w-75 ">
          <Card style={{ width: '75%' }}>
            <div className="text-center">
              <Card.Img
                className="banner-img p-2 mt-2 img-fluid"
                variant="top"
                src={chefRecipes.chefPicture}
              />
            </div>
            <Card.Body>
              <Card.Title>Name : {chefRecipes.chefName}</Card.Title>
              <Card.Text>{chefRecipes.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Likes: {chefRecipes.likes}</ListGroup.Item>
              <ListGroup.Item>
                number of recipes: {chefRecipes.numbersOfRecipes}
              </ListGroup.Item>
              <ListGroup.Item>
                years of experience: {chefRecipes.yearsOfExperience}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ChefRecipes;
