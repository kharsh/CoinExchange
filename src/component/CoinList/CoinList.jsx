import React, { Component } from 'react';
import Coin from '../Coin/Coin'
import 'styled-components'
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    font-size: 1.4rem;
    display: inline-block;
`;

export default class CoinList extends Component {
    render() {
        return (
            <div>
            <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th hidden={!this.props.showBalance}>Balance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {this.props.coinData.map(({name, ticker, price, balance}) => 
                        <Coin 
                            key={ticker} 
                            handleRefresh={this.props.handleRefresh}
                            name={name} 
                            ticker={ticker} 
                            price={price} 
                            balance={balance}
                            showBalance={this.props.showBalance}/>)
                    }
                </tbody>
            </Table>
            </div>
        )
    }
}
