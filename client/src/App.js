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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/show" component={ArticleDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
