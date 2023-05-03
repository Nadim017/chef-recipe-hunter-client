import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRecipes.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import CardGroup from 'react-bootstrap/CardGroup';

const ChefRecipes = () => {
  const { id } = useParams();
  const chefRecipes = useLoaderData();

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

        {/*card */}
        <div className="text-center mt-5">
          <CardGroup className="w-50 mx-auto">
            <Card>
              <Card.Body>
                <div className="recipe_container">
                  {chefRecipes.recipeNames.map((recipe) => (
                    <div key={recipe.recipeName}>
                      <div>
                        <h5> Recipe Name :</h5>
                        {recipe.recipeName} <br /> <h5>Element :</h5>
                        {recipe.ingredients.map((element) => (
                          <div key={element}>
                            <h6>
                              <FontAwesomeIcon icon={faCheck} />
                              {element}
                            </h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
};

export default ChefRecipes;
