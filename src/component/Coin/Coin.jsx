import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CoinRow = styled.td `
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin(props) {
    
    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }

    return(
        <tr>
            <CoinRow>{props.name}</CoinRow>
            <CoinRow>{props.ticker}</CoinRow>
            <CoinRow>${props.price}</CoinRow>
            <CoinRow hidden={!props.showBalance}>${props.balance}</CoinRow>
            <CoinRow>
                <form action = "#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </CoinRow>
        </tr> 
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    showBalance : PropTypes.bool.isRequired
}
