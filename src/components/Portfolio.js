import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

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
                    포폴
                </Content>
            </Fragment>
        )
    }
}

const Content = styled.div`
    padding: 30px 30px 30px 280px;
`;

export default Portfolio;