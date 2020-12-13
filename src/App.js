
import './App.css';
import AccountBalance from './component/AccountBalance/AccountBalance';
import React from 'react'
import CoinList from './component/CoinList/CoinList';
import Header from './component/CoinExchangeHeader/Header';
import 'styled-components'
import styled from 'styled-components';

const AppHeader = styled.div`
  text-align: center;
  background-color: rgb(184, 129, 11);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coinExchangeHeader: "Coin Exchange",
      balance : 10000,
      coinData: [
        {
          name : "Bitcoin",
          ticker : "BTC",
          price : 9999
        },
        {
          name : "Ethereum",
          ticker : "ETH",
          price : 500
        },
        {
          name : "Tether",
          ticker : "USD",
          price : 1
        },
        {
          name : "Repel",
          ticker : "XRP",
          price : 10
        },
        {
          name : "BitCoin Cash",
          ticker : "BCH",
          price : 99
        }
      ]
    }
  }
  
  render() {
    return (
      <AppHeader>
            <Header header={this.state.coinExchangeHeader}/>
            <AccountBalance amount={this.state.balance}/>
            <CoinList coinData={this.state.coinData} />
      </AppHeader>
    );
  }
}


export default App;
