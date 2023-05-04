import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className="p-5">
      <p>
        <button className="btn btn-info">Download pdf</button>
      </p>
      <h5>
        1. Tell us the differences between uncontrolled and controlled
        components.
      </h5>
      <br />
      <p>
        <span>Ans:</span>
        <span>
          Uncontrolled components are those where the form data is handled by
          the DOM itself, while in controlled components, the form data is
          handled by the React component. In an uncontrolled component, you rely
          on refs to access form values, while in a controlled component, you
          use state to store and update form values. Uncontrolled components are
          often simpler to set up but can be harder to manage when dealing with
          complex forms, whereas controlled components provide more control and
          validation but can be more verbose.
        </span>
      </p>
      <br />
      <h5>2. How to validate React props using PropTypes?</h5>
      <span>
        <br />
        Ans :
        <p>
          PropTypes is a built-in feature in React that allows you to specify
          the type and shape of the props that a component is expecting. It
          helps you catch bugs early by validating that the props passed to a
          component match the expected types and shapes.{' '}
        </p>
      </span>
      <br />
      <h5>3. Tell us the difference between nodejs and express js.</h5>
      <p>
        Ans : <br />
        Node.js vs Express.js:
        <span>
          Node.js is a runtime environment for executing JavaScript code outside
          of a web browser, while Express.js is a web framework built on top of
          Node.js. Node.js provides a platform for building scalable network
          applications, while Express.js provides a set of tools and conventions
          for building web applications and APIs. Express.js simplifies the
          process of building web applications by providing middleware for
          handling requests and responses, routing, and other common tasks.
        </span>
      </p>
      <br />
      <h5>4. What is a custom hook, and why will you create a custom hook?</h5>
      <p>
        Ans :
        <span>
          Custom Hooks: A custom hook is a function that allows you to extract
          reusable logic from a React component. It lets you reuse stateful
          logic and manage stateful values in functional components. You might
          create a custom hook to encapsulate complex behavior and share it
          between multiple components, or to simplify the management of stateful
          values.
        </span>
      </p>
    </Container>
  );
};

export default Blog;
