import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Login from './screens/Login'
import Register from './screens/Register'
import ArticleDetail from "./screens/ArticleDetail";
import history from "./history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider as Articleprovider } from "./context/ArticleContext";

const App = () => {
  return (
    <Articleprovider>
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/login/" exact component={Login} />
            <Route path="/register/" exact component={Register} />
            <Route path="/blog/show/:id" exact component={ArticleDetail} />
            <Route path="/blog/category/:id" exact component={Blog} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Articleprovider>
  );
};
export default App;
