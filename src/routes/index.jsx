import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage, Team, Faq, Page404} from "pages";
import { NavBar, Footer } from "containers";

export default function App() {
  return (
    <Router>
      <MainWrapper>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/faqs">
            <Faq />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </MainWrapper>
    </Router>
  );
}

const MainWrapper = styled.div`

`;
