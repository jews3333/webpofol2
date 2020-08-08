import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar';
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

        const { portfolio } = this.props;

        return (
            <Fragment>
                <Sidebar map={portfolio} />
                <Content id="content">
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
    padding: 30px 30px 30px 280px;
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