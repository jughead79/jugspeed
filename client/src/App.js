import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
