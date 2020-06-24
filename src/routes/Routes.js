import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, PortfolioContainer, Profile } from './index';

function Routes(){
    return (
        <Router>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={PortfolioContainer}/>
            <Route path="/profile" component={Profile}/>
        </Router>
    );
}

export default Routes;