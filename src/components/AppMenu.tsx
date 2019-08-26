import * as React from "react";
import { Route, Link } from "react-router-dom";

const AppMenu = () => (
  <nav>
    [App Menu]
    <ul>
      <ListItemLink label="Home" to="/" />
      <ListItemLink label="Lazy Route" to="/demo-component" />
    </ul>
  </nav>
);

const ListItemLink = ({ label, to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest}>
          {label}
        </Link>
      </li>
    )}
  />
);

export default AppMenu;
