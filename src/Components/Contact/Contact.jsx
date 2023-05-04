import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="text-center mt-5">
      <Container>
        <h3 className="text-center mb-3">Message Us</h3>
        <Form className="w-50 mx-auto bg-light shadow p-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control type="email" placeholder="your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
