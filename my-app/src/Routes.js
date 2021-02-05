import { Component } from "react";
import { Route } from "react-router-dom";
import ProductCardComponent from "./containers/ProductListContainer";
import Login from "./components/Login";

<switch>

<Route exact path="/login">
  <Login />
</Route>
    
    <Route exact path="/ProductListContainer">
  <ProductCardComponent />
</Route>
</switch>

    export default Route;