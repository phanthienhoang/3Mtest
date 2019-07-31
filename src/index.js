import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Login from "./components/Login";
import Home from "./components/Home";
import Example from "./components/Examples";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/index" render={props => <Home {...props} />} 
      />
      <Route path="/example/:id"  render={props => <Example {...props} />} 
   />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
