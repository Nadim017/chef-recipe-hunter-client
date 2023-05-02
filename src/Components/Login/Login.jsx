import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container className="mt-3">
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto bg-light rounded p-4 shadow"
      >
        <h3 className="text-center text-primary">Please Login</h3>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>

        <br />
        <Button className="mt-2 me-2" variant="info" type="submit">
          Google Sign-in
        </Button>
        <Button className="mt-2 me-2" variant="secondary" type="submit">
          GitHub Sign-in
        </Button>
        <br />
        <Form.Text className="text-secondary mt-3">
          Don't Have an Account ?<Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
