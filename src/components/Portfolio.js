import React, { Component, Fragment } from 'react';
// import Sidebar from './Sidebar';
import SidebarContainer from '../containers/SidebarContainer';
import styled from 'styled-components';
import List from './List';

class Portfolio extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onPortfolio()
    }

    render(){

        const { portfolio, sidebar } = this.props;

        return (
            <Fragment>
                <SidebarContainer />
                <Content id="content" sidebar={sidebar}>
                    <Title>
                        Portfolio
                        <Length>Count : {portfolio ? portfolio.length : null}</Length>
                    </Title>
                    <List list={portfolio}/>
                </Content>
            </Fragment>
        )
    }
}

const Content = styled.div`
    padding: 30px 30px 30px ${props => props.sidebar ? "280px" : "30px"};
    transition: all 0.5s ease-in-out;

    @media (max-width:768px){
        padding: 30px 30px 30px ${props => props.sidebar ? "calc(40% + 30px)" : "30px"};
    }
`;

const Title = styled.h2`
    font-size:1.4em;
    margin-bottom:0.5em;
    padding-bottom:0.5em;
    border-bottom:1px solid #383838;
    position:relative;
`;

const Length = styled.p`
    font-size: 0.6em;
    margin-top:0.5em;
    font-weight:normal;
`;

export default Portfolio;