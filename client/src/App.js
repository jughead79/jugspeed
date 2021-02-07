import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import Home from './screen/home/index'
import About from './screen/about/index'
import ArticlePage from './components/home/content/article/ArticlePage'
import ArticleByCategory from './components/list/ArticleByCategory'
import Header from './components/home/header'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div> 
          <Header />          
          <Switch> 
            <div style={{marginTop:'80px'}}>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/article/:articleId' exact component={ArticlePage} />
            <Route path='/article/category/:categoryId' exact component={ArticleByCategory} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
