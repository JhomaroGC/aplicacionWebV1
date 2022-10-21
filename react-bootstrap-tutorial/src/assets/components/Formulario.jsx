import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

const Formulario = () => {
  return (
    <Container className="m-3">
        <h1>Formulario de Contacto</h1>
      <Form>
        <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
              <Form.Text>
                we´ll never share you email address, trust us!
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*******" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
