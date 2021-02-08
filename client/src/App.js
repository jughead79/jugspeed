import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import Home from './screen/home/index'
import About from './screen/about/index'
import Header from './components/header'
import ArticleList from './components/article-list';

const App = () => {
  return (
    <div>  
      <Router history={history}>
        <Header />
        <Switch> 
          <div style={{marginTop:'80px'}}>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />

            <Route path='/article/' exact component={ArticleList} />
            <Route path='/article/:id' exact component={ArticleList} />
            <Route path='/article/category/:category_id' exact component={ArticleList} />
            <Route path='/article/tag/:tag_id' exact component={ArticleList} />
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
