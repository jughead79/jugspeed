import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import Home from './screen/home/index'
import About from './screen/about/index'
import ArticlePage from './components/home/content/article/ArticlePage'

import Header from './components/home/header'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div> 
          <Header />          
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/article/:articleId' exact component={ArticlePage} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
