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
      <Route path="/index" render={props =>(localStorage.getItem('usertoken')) 
        ? <Home {...props} /> 
        : <Redirect to="/login" /> } 
      />
      <Route path="/example/:id" render={props =>(localStorage.getItem('usertoken')) 
        ? <Example {...props} /> 
        : <Redirect to="/login" /> } 
      />

      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
