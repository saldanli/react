import { Component } from "react";
import ProductCard from "./componants/view/productCard/productCard";
import SearchBar from "./componants/view/searchBar/searchBar";

interface IProps {
  search: (searchItem: string) => void;
}

interface IState {
  searchItem: string;
}

export default class App extends Component<IProps, IState> {
  searchItem: string = "deneme";
  constructor(props: any) {
    super(props);

    this.state = { searchItem: "" };
  }

  seacrh = (_searchItem: string) => {
    debugger;

    this.setState({searchItem:_searchItem})

  };

  render() {
    return (
      <div className="grid-container">
        search item {this.state.searchItem}
        <SearchBar search={this.seacrh} />
        <ProductCard searchItem={this.state.searchItem}></ProductCard>
      </div>
    );
  }
}
