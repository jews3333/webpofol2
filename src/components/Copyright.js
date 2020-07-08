import React from 'react';
import styled from 'styled-components';

function Copyright(){
    return (
        <Copy>Copyright 2020. JSH. All rights reserved.</Copy>
    )
}

const Copy = styled.p`
    position:fixed;
    right:0;
    bottom:0;
    padding:10px;
    font-size:0.8em;
    opacity:0.5;
    transition: all 0.5s linear;

    &:hover {
        opacity:1;
    }
`;

export default Copyright;