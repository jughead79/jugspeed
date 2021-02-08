import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import Home from './screen/home/index'
import About from './screen/about/index'
import ArticlePage from './components/article-page'
import ArticleByCategory from './components/list/ArticleByCategory'
import Header from './components/header'

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
              <Route path='/article/:article_id' exact component={ArticlePage} />
              <Route path='/article/category/:category_id' exact component={ArticleByCategory} />
              <Route path='/article/tag/:tag_Id' exact component={ArticleByCategory} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
