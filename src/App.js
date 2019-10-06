import React from "react";
import { Router, Route } from "react-router";
import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

import { routes } from "./routes";
import history from "./history";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Router history={history} forceRefresh={true}>
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
