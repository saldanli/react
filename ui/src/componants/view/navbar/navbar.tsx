import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const navbar = () => {
  return (
    <Container>
      <Nav activeKey="/">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/createProduct">
            <Nav.Link eventKey="/createProduct">create new Product</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/about">
            <Nav.Link eventKey="/about">About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
       
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default navbar;
