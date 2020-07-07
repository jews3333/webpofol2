import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar(props){
    const { map, id } = props;

    console.log(props)

    return (
        <Wrap id="sidebar">
            {map ?
                map.map((list,index) => {
                    return <Item key={index} to={`/portfolio/${list.id}`} className={id === list.id ? 'active' : null}><Type type={list.type}>{list.type}</Type>{list.title}</Item>
                })
                : null
            }
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    top:60px;
    bottom:0;
    left:0;
    width:250px;
    background:#252525;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Item = styled(Link)`
    display:block;
    padding:3px 10px;
    font-size:0.9em;

    &:hover, &:focus, &.active {
        background:#37373d;
    }
`;

const Type = styled.strong`
    font-size:0.8em;
    margin-right:3px;
    color: ${props => props.type === 'Web' ? '#cbcb3c' : props.type === 'App' ? '#e14770' : '#9cdcda' }
`;

export default Sidebar;