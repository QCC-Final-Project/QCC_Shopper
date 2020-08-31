import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { Home, ListItems, Cart } from './Components';

export default () => {
    return(
        <Switch>
            <Route path='/items'>
                <ListItems />
            </Route>
            <Route path='/cart'>
                <Cart />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    )
};