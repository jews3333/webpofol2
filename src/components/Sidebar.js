import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar(props){

    const { portfolio, id, sidebar, onSidebarShow, onSidebarHide } = props;

    const sidebarToggleHandler = () => {
        console.log(sidebar)
        if(sidebar) onSidebarHide()
        else onSidebarShow()
    }

    return (
        <Wrap id="sidebar" show={sidebar}>
            <List>
            {portfolio ?
                portfolio.map((item ,index) => {
                    return <Item key={index} to={`/portfolio/${item.id}`} className={id === item.id ? 'active' : null}><Type type={item.type}>{item.type}</Type>{item.title}</Item>
                })
                : null
            }
            </List>
            <Toggle sidebar={sidebar} onClick={() => sidebarToggleHandler()}>리스트 닫기</Toggle>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    top:60px;
    bottom:0;
    left:0;
    width: ${props => props.show ? "250px" : "0px"};
    background:#252525;
    transition: all 0.5s ease-in-out;
    z-index:10;

    @media (max-width:768px){
        width: ${props => props.show ? "40%" : "0px"};
    }
`;

const List = styled.div`
    width:100%;
    height:100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width:0.5em;
        background:transparent;
    }

    &::-webkit-scrollbar-thumb {
        background:#464647;
    }
`;

const Item = styled(Link)`
    display:block;
    padding:3px 10px;
    font-size:0.9em;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

    &:hover, &:focus, &.active {
        background:#37373d;
    }

    &.active {
        color: #e2c08d;
    }
`;

const Type = styled.strong`
    font-size:0.8em;
    margin-right:0.5em;
    color: ${props => props.type === 'Web' ? '#cbcb3c' : props.type === 'App' ? '#e14770' : '#9cdcda' }
`;

const Toggle = styled.button`
    position:absolute;
    right:0;
    top:50%;
    transform:translate(100%, -50%)${props => !props.sidebar ? ' rotate(180deg)' : ''};
    width:1em;
    height:5em;
    background:#333333;
    text-indent:-9999px;
    overflow:hidden;
    border-radius:0 0.25em 0.25em 0;

    &:after {
        content:"◀";
        display:block;
        color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-indent:0;
        line-height:1;
        opacity:0.5;
        font-size:0.6em;
    }
`;

export default Sidebar;