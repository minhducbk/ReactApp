import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './src/App';
import About from './src/About';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={App}/>
   <Route path='about' component={About}/>
   </Switch>
   </BrowserRouter>
 )
}
