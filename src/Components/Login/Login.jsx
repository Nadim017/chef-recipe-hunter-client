import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [error, setError] = useState('');

  const { signIn, GoogleSignIn, githubSign } = useContext(authContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathName || '/';
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });

        setError('');
      })
      .catch((err) => {
        console.error(err);
        setError('email or password is incorrect');
      });
  };
  const signWithGoogle = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log('Error', err.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSign()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log('Error', err.message);
      });
  };

  return (
    <Container className="mt-3">
      <Form
        onSubmit={handleSignIn}
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

        <p>{error ? 'email or password wrong' : ''}</p>
        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          className="ms-3"
          onClick={signWithGoogle}
          variant="info"
          type="submit"
        >
          Google Sign In
        </Button>
        <Button
          className="ms-3"
          onClick={handleGithubSignIn}
          variant="secondary"
          type="submit"
        >
          Github SignIn
        </Button>

        <br />

        <br />
        <Form.Text className="text-secondary mt-3">
          Don't Have an Account ?<Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
