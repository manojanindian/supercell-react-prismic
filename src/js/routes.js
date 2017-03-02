import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components
import App from './components/app';
import AppIndex from './components/appIndex';
import StyleGuide from './components/styleGuide';
import NoMatch from './components/noMatch';
import Blog from './components/blog';

export default (
  <Route path='/' component= {App}>
    <IndexRoute component={AppIndex} />
    <Route path='style-guide' component= {StyleGuide}/>
    <Route path='blog/:id' component= {Blog}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
