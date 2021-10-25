import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./componants/view/navbar/navbar";
import About from "./componants/view/about/about";
import AppFooter from "./componants/view/footer/footer";

import CreateProduct from "./componants/view/createProduct/createProduct";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/createProduct" component={CreateProduct} />
        <Route path="/about" component={About} />
        
      </Switch>
      <AppFooter/>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
