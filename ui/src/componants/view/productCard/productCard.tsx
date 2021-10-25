import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Card,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";

import "./productCard.css";
import ProductService from "../../../services/productService";

interface IProps {
  searchItem: string;
}

interface IState {
  products: any[];
}

export default class ProductCard extends Component<IProps, IState> {
  
    constructor(props: any) {
    super(props);

    this.state = { products: [] };
  }

  async componentDidMount() {
 
    const data = await ProductService.getAllProduct();

    this.setState({ products: data });
  }

  async componentDidUpdate() {
      if(this.props.searchItem){

        const data = await ProductService.getProductByName(this.props.searchItem);
        //need refactor
        if(JSON.stringify(this.state.products)!==JSON.stringify(data)){
            this.setState({ products: data });
        }
        
      }
    
  }

  shouldComponentUpdate() {
    return true;
  }

  deleteProduct = async (productId: string) => {
    const data = await ProductService.deleteProduct(productId);
    const filteredProduct = this.state.products.filter(
      (product) => product.id !== productId
    );

    this.setState({ products: filteredProduct });
  };

  render() {
    return (
      <Row xs={1} md={2} className="g-4">
        {this.state.products.map((item: any) => (
          <Col>
            <Card key={item.id}>
              <Card.Img
                variant="top"
                className="BeerListItem-img"
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                onClick={() => this.deleteProduct(item.id)}
                size="sm"
              >
                Delete Product
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
