import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

import './footer.css';
export default class AppFooter extends Component {
  render() {
    return (
      <div className="fixed-bottom footer">
        <Navbar color="dark" >
          <Container>
            <NavbarBrand> Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
