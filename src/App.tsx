import * as React from "react";
import AppMenu from "./components/AppMenu";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => (
  <div>
    <AppMenu />
    Home Page
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
