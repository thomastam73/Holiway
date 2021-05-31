import React from "react";
import { BrowserRouter as Switch } from "react-router-dom";
import Layout from "./components/Layout";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import Home from "./view/Home/Home";
import Post from "./view/Post/Post";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} layout={Layout} path="/" />
      <RouteWithLayout component={Post} layout={Layout} path="/post" />
    </Switch>
  );
};

export default Routes;
