import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';

function Navigation(){
    return (
        <Nav>
            <Image src={Logo} alt=""/>
            <Menu>
                <Link exact to="/"><Strong>Home</Strong></Link>
                <Link to="/portfolio"><Strong>Portfolio</Strong></Link>
                <Link to="/profile"><Strong>Profile</Strong></Link>
                <Link to="/contaxt"><Strong>Contaxt</Strong></Link>
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:60px;
    background:#1e1e1e;
    border-bottom:1px solid #383838;

    &:after {
        content:"";
        display:block;
        clear:both;
    }
`;

const Image = styled.img`
    position:absolute;
    top:50%;
    left: 1em;
    transform: translateY(-50%);
    height: 40px;
`;

const Menu = styled.div`
    display:table;
    height:inherit;
    padding-left:calc(2em + 50px);
`;

const Link = styled(NavLink)`
    display:table-cell;
    vertical-align:middle;
    padding:0 15px;

    &.active {
        color:#007acc;
    }
`;

const Strong = styled.strong`

`;

export default Navigation;