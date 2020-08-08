import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar(props){
    const { map, id } = props;

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

export default Sidebar;