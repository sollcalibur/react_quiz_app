import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/Error/NotFound.js/not-found';

import Home from './Containers/Pages/Home/Home';
import Profile from './Containers/Pages/Profile/Profile';

// required to style bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header></Header>
          <Container>
            <Switch>
              <Route path={'/profile/:userId'} component={Profile} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound}></Route>
            </Switch>
          </Container>
          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
