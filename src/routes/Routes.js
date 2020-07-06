import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, PortfolioContainer, Profile, Contaxt } from './index';
import Navigation from '../components/Navigation';

function Routes(){
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/portfolio" component={PortfolioContainer}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/contaxt" component={Contaxt}/>
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routes;