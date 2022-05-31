import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import "./registerForm.style.css";
import { useDispatch } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;

    if (password !== confirmPassword) {
      return setError(true);
    }

    setError(false);

    // we dispatch the action to the reducer
    dispatch();
  };
  return (
    <Container>
      <div className="form-content mt-5 mb-5">
        <h1>Registration Form</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="fName"
              placeholder="Sam"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="lName"
              placeholder="Smith"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>DOB</Form.Label>
            <Form.Control onChange={handleOnChange} name="dob" type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="address"
              type="text"
              placeholder="Enter address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              name="confirmPassword"
              placeholder="Password"
            />
            <Alert variant="danger" show={error}>
              Confirm password do not match!!!
            </Alert>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Button type="Submit">Sign up</Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
