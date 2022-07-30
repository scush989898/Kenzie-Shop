import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart/cart";
import Dashboard from "../pages/Dashboard/dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      {/* <Route path="*">
        <pre
          style={{
            color: "black",
            fontSize: "70px",
            marginTop: "100px",
            width: "50vw",
            height: "50vh",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Error 404 - Not Found
        </pre>
      </Route> */}
    </Switch>
  );
}
