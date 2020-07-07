import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, PortfolioContainer, Profile, Contaxt, ViewContainer } from './index';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

function Routes(){
    return (
        <Router>
            <Navigation/>
            <Container>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/portfolio/:id" component={ViewContainer}/>
                    <Route path="/portfolio" component={PortfolioContainer}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/contaxt" component={Contaxt}/>
                    <Redirect path="*" to="/" />
                </Switch>
            </Container>
        </Router>
    );
}

const Container = styled.div`

`;

export default Routes;