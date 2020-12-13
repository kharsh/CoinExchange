import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './logo.svg';

const Image = styled.img`
    height: 8vmin;
    pointer-events: none;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const Title = styled.h1`
    font-size: 2rem;
`;
  
export default class Header extends Component {
    render() {
        return (
            <AppHeader>
                <Image src={logo} alt="ReactApp"/>
                    <Title>
                        {this.props.header}</Title>
            </AppHeader>
            
        )
    }
}
