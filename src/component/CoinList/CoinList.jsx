import React from 'react';
import Coin from '../Coin/Coin'
import 'styled-components'
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    font-size: 1.4rem;
    display: inline-block;
`;

export default function CoinList(props) {
    return (
        <div>
        <Table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th hidden={!props.showBalance}>Balance</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.coinData.map(({key, name, ticker, price, balance}) => 
                    <Coin 
                        key={key} 
                        handleRefresh={props.handleRefresh}
                        name={name} 
                        ticker={ticker} 
                        price={price} 
                        balance={balance}
                        showBalance={props.showBalance}
                        tickerId = {key}
                        />)
                }
            </tbody>
        </Table>
        </div>
    );
    }
