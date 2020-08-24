import React, { Fragment } from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import styled from 'styled-components';
import Icon from '../images/ico_web_32.png';

function View(props){

    const {portfolio, onPortfolio, match, sidebar} = props;

    if(!portfolio) onPortfolio();

    return (
        <Fragment>
            <SidebarContainer id={match.params.id}/>
            <Content id="content" sidebar={sidebar}>
                {portfolio ?
                portfolio.filter((row) => {
                    return row.id === match.params.id;
                }).map((item, index) => {
                    return <Wrap key={index}>
                        <Title>
                            {item.title}
                            <Date>Production year : {item.year}</Date>
                            {item.url ? <Link href={item.url} target="_blank" title="새창열림" rel="noreferrer noopener"><WebIcon src={Icon} alt="" />Website</Link> : null}
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
    padding: 30px 30px 30px ${props => props.sidebar ? "280px" : "30px"};
    transition: all 0.5s ease-in-out;

    @media (max-width:768px){
        padding: 30px 30px 30px ${props => props.sidebar ? "calc(40% + 30px)" : "30px"};
    }
`;

const Wrap = styled.div`

`;

const Title = styled.h2`
    font-size:1.4em;
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
    font-weight:normal;
`;

const WebIcon = styled.img`
    width:1.5em;
    height:1.5em;
    vertical-align: middle;
    margin-right:0.5em;
`;

const Img = styled.img`

`;

export default View;