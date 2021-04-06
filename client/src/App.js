import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
