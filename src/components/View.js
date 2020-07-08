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
                        <Title>
                            {item.title}
                            <Date>Year {item.year}</Date>
                            <Link href={item.url} target="_blank" title="새창열림">홈페이지</Link>
                        </Title>
                        <Sumry>{item.sumry}</Sumry>
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
    padding-bottom:0.5em;
    border-bottom:1px solid #383838;
    position:relative;
`;

const Date = styled.p`
    font-size: 0.6em;
    margin-top:0.5em;
    font-weight:normal;
`;

const Sumry = styled.div`
    font-size:1em;
    margin-bottom:1em;
`;

const Link = styled.a`
    display:inline-block;
    position:absolute;
    bottom:1em;
    right:0;
    font-size:0.6em;
`;

const Img = styled.img`

`;

export default View;