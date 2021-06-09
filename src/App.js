import {React , useState} from 'react';
import './App.css';
import './index.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

const App = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }; 
  return (
    <div className="wrapper">
      <div className="header-styling">
        <span>Welcome to Form Page</span>
        <div class="option-box">
          <ul horizontal class="colors-list">
            <li class="active" data-color="#FF9800"></li>
            <li data-color="#E91E63"></li>
            <li data-color="#009688"></li>
            <li data-color="#03A9F4"></li>
            <li data-color="#4CAF50"></li>
            <li data-color="#795548"></li>
            <li data-color="#90A4AE"></li>
          </ul>
        </div>
      </div>
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="10"
              controlId="validationCustom01"
              className="firstName"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationCustom02"
              className="lastName"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  className="Username"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="10" controlId="validationCustom03">
              <Form.Label>e-mail</Form.Label>
              <Form.Control type="email" placeholder="e-mail" className="email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-7">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit" className="Btn" variant="success">
            Submit form
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
