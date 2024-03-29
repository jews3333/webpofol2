import React from 'react';
import Logo from '../images/logo.png';
import styled from 'styled-components';

function Main(){
    return (
        <MainContent>
            <Image src={Logo} alt="JSH"/>
            <Title>Web Front End Developer</Title>
            <Ul>
                <Li>HTML5</Li>
                <Li>CSS3</Li>
                <Li>JavaScript</Li>
                <Li>jQuery</Li>
                <Li>React</Li>
                <Li>React-Native</Li>
            </Ul>
        </MainContent>
    )
}

const MainContent = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align: center;
    width:100%;
`;

const Image = styled.img`
    height:100px;
    margin-bottom:1em;

    @media (max-width:768px){
        height:60px;
    }
`;

const Title = styled.h1`
    font-size:2em;
    margin-bottom:0.1em;

    @media (max-width:768px){
        font-size:1.6em;
    }
`;

const Ul = styled.ul`
    display:flex;
    padding:0 1.5em;
    justify-content: center;

    @media (max-width:768px){
        font-size:0.6em;
    }
`;

const Li = styled.li`
    font-size:1.2em;

    &:not(:last-child):after {
        content:"/";
        margin:0 0.5em;
    }
`;

export default Main;