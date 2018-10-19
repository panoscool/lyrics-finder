import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Lyrics from "./components/tracks/Lyrics";

import "./App.css";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
