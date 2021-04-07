import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import ArticleDetail from "./screens/ArticleDetail";
import history from "./history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/show/:id" exact component={ArticleDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
