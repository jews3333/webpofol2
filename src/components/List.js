import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function List(props){

    const {list} = props;

    return (
        <Wrap>
            {list ? 
                list.map((item, index) => {
                    return <Item key={index} to={`/portfolio/${item.id}`}>
                        <Thumb>
                            <Img src={item.image} />
                        </Thumb>
                        {/* <Title><Type type={item.type}>{item.type}</Type>{item.title}</Title> */}
                    </Item>
                })
            : null}
        </Wrap>
    )
}

const Wrap = styled.div`
    display:flex;
    flex-flow: row wrap;
`;

const Item = styled(Link)`
    display:block;
    padding:0.5em;
`;

const Thumb = styled.div`
    height:15em;
    overflow:hidden;
`;

const Img = styled.img`
    height:100%;
    vertical-align: top;
`;

const Title = styled.p`
    font-size: 1.1em;
    margin-top:0.5em;
`;

const Type = styled.strong`
    font-size:0.8em;
    margin-right:0.5em;
    color: ${props => props.type === 'Web' ? '#cbcb3c' : props.type === 'App' ? '#e14770' : '#9cdcda' }
`;

export default List;