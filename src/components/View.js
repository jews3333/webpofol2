import React, { Fragment } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

function View(props){

    const {portfolio, onPortfolio, match} = props;

    if(!portfolio) onPortfolio();

    return (
        <Fragment>
            <Sidebar map={portfolio} id={match.params.id}/>
            <Content id="content">
                {portfolio ?
                portfolio.filter((row) => {
                    return row.id === match.params.id;
                }).map((item, index) => {
                    console.log(item)
                    return <Wrap key={index}>
                        <Title>{item.title}</Title>
                        <Img src={item.image}></Img>
                    </Wrap>
                })
                : null}
            </Content>
        </Fragment>
    )
}

const Content = styled.div`
    padding: 30px 30px 30px 280px;
`;

const Wrap = styled.div`

`;

const Title = styled.h2`
    font-size:1.8em;
    margin-bottom:0.5em;
`;

const Img = styled.img`

`;

export default View;