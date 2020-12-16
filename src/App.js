
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
  state = {
    coinExchangeHeader: "Coin Exchange",
    amount : 10000,
    showBalance : true,
      
    coinData: [
      {
        name : "Bitcoin",
        ticker : "BTC",
        price : 9999,
        balance : 21
      },
      {
        name : "Ethereum",
        ticker : "ETH",
        price : 500,
        balance : 10
      },
      {
        name : "Tether",
        ticker : "USD",
        price : 1,
        balance : 0
      },
      {
        name : "Repel",
        ticker : "XRP",
        price : 10,
        balance : 5
      },
      {
        name : "BitCoin Cash",
        ticker : "BCH",
        price : 99,
        balance : 0
      }
    ],
  };
  
  handleRefresh = (valueChangedTicker) => {
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = { ...values }
      if(valueChangedTicker === newValues.ticker) {
        const randomPercentage = 0.995 * Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    
    this.setState({coinData : newCoinData});
  }

  handleBalanceDisplay = () => {
    this.setState(function(oldState) {
      return{
      ...oldState,
      showBalance : !oldState.showBalance}
    });
  }

  render() {
    return (
      <AppHeader>
            <Header header={this.state.coinExchangeHeader}/>
            <AccountBalance amount={this.state.amount} showBalance ={this.state.showBalance} handleBalanceDisplay={this.handleBalanceDisplay}/>
            <CoinList coinData={this.state.coinData} showBalance = {this.state.showBalance} handleRefresh={this.handleRefresh}/>
      </AppHeader>
    );
  }
}


export default App;
