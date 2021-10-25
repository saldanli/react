import { Component } from "react";
import { render } from "react-dom";





interface IProps {
    search: (searchItem:string) => void;
}

interface IState {
  input:string
}

export default class SearchBar extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state={input:''}
  
  }


  handleChange= (e:any)=> {
    this.setState({ input: e.target.value });
  }

  handleClick=(e:any) =>{
    e.preventDefault()
    this.props.search(this.state.input);
  }


  

  render() {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search product by name "
            name="s" 
            onChange={ this.handleChange } 
        />
        <button type="submit" onClick={this.handleClick}>Search</button>
    </form>)
  }
}



