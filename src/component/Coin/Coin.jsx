import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const CoinRow = styled.td `
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    
    state = {
        price : this.props.price
    }
    handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        return(
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
                <CoinRow>${this.props.price}</CoinRow>
                <CoinRow hidden={!this.props.showBalance}>${this.props.balance}</CoinRow>
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
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    showBalance : PropTypes.bool.isRequired
}
