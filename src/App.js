import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Product,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/product/:id" children={<SingleProduct />} />

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
