import React from 'react';
import './App.css';

import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif; 
`;

function App() {
  return (
    <Router>
      <Route
          render={({location}) => {
            return (
                <PageContainer>
                  <TransitionGroup component={null}>
                      <CSSTransition
                          timeout={300}
                          classNames="page"
                          key={location.key}
                      >
                          <Switch location={location}>
                              <Route exact path="/" component={HomePage}/>
                              <Route exact path="/details" component={DetailsPage}/>
                          </Switch>
                      </CSSTransition>
                  </TransitionGroup>
                </PageContainer>
            )
          }}
      />
    </Router>
  );
}

export default App;
