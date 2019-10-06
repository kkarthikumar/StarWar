import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

import { routes } from "./routes";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Router>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Router>
      </Container>
    </>
  );
};

export default App;
