import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';

const Register = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(authContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // if (password < 6) {
    //   setError('Please enter password 6 or than 6 character');
    // }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
        setError('password should be 6 or than 6 character');
      });
  };

  return (
    <Container className="mt-3 ">
      <Form
        onSubmit={handleRegister}
        className="w-50 mx-auto bg-light rounded p-4 shadow"
      >
        <h3 className="text-center">Please Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            required
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photo"
            required
            type="text"
            placeholder="Photo url"
          />
        </Form.Group>
        <p>{error}</p>
        <Button variant="primary" type="submit ">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account?<Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
