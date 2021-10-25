import { ChangeEventHandler, Component, FormEventHandler } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Navbar,
  NavbarBrand,
  Row,
  Toast,
} from "react-bootstrap";
import ProductService from "../../../services/productService";



interface IProps {}

interface IState {
  formSuccess: boolean;
}

export default class CreateProduct extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = { formSuccess: false };
  }

  async componentDidMount() {
    //const data = await ProductService.getProductByName("Metra");
    // this.setState({ products: data });
  }

   createProduct = async(event: any) => {
    event.preventDefault();

    const name = event.target[0].value;
    const type = event.target[1].value;
    const link = event.target[2].value;
    const description = event.target[3].value;

   await  ProductService.insertProduct({ name, type, link, description });
   this.setState({formSuccess:true})
  };

  render() {
    return (
      <Form onSubmit={this.createProduct}>
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="type">
          <Form.Label column sm="2">
            Product type
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="link">
          <Form.Label column sm="2">
            Product Image link
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Product Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group role="form">
          <Button
            className="btn btn-primary btn-large centerButton"
            type="submit"
          >
            Send
          </Button>
        </Form.Group>

        {this.state.formSuccess? (
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
            </Toast.Header>
            <Toast.Body>product insert succesfull</Toast.Body>
          </Toast>
        ) :''}
      </Form>
    );
  }
}
