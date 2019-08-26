import * as React from "react";
import AppMenu from "./components/AppMenu";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Button } from "antd";

const Home = () => (
  <div>
    <AppMenu />
    Home Page
    <br />
    <br />
    <Button type="primary">ant.design Button</Button>
  </div>
);
const DemoComponentOne = React.lazy(() =>
  import("./components/DemoComponentOne")
);

const withSuspense = Component => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route
        path="/demo-component"
        component={withSuspense(DemoComponentOne)}
      />
    </Router>
  );
};
