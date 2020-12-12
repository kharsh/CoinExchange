import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const CoinRow = styled.td `
    border: 1px solid #cccccc;
    width: 25vh;
`;
export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price : this.props.price
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        event.preventDefault()
        const randomPercentage = 0.995 * Math.random() * 0.01
        this.setState(function(oldState) {
            return{
                price: oldState.price * randomPercentage
            };
        })
    }

    render() {
        return(
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
                <CoinRow>${this.state.price}</CoinRow>
                <CoinRow>
                    <form action = "#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </CoinRow>
            </tr> 
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
