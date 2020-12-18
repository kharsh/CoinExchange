
import AccountBalance from './component/AccountBalance/AccountBalance';
import React from 'react'
import CoinList from './component/CoinList/CoinList';
import Header from './component/CoinExchangeHeader/Header';
import 'styled-components'
import styled from 'styled-components';
import axios from 'axios';



const AppHeader = styled.div`
  text-align: center;
  background-color: rgb(184, 129, 11);
  color: #cccccc;
`;
const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4))

class App extends React.Component {
  state = {
    coinExchangeHeader: "Coin Exchange",
    amount : 10000,
    showBalance : true,
      
    coinData: [
      /*{
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
      }*/
    ],
  };
  
  handleRefresh = async (valueChangedTickerId) => {
    /*const newCoinData = this.state.coinData.map(function(values) {
      let newValues = { ...values }
      if(valueChangedTicker === newValues.ticker) {
        const randomPercentage = 0.995 * Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });*/
    //debugger
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangedTickerId}`
    const response = await axios.get(tickerUrl)
    const newCoinData = this.state.coinData.map(function(values) {
    const newValue = formatPrice(response.data.quotes.USD.price)
      let newValues = {...values}
      if(valueChangedTickerId === newValues.key) {
        newValues.price = newValue
      }
      return newValues
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

  componentDidMount = async () => {
   const response = await axios.get('https://api.coinpaprika.com/v1/coins')
   const coinId = response.data.slice(0, COIN_COUNT).map(coin => coin.id)
   let tickerUrl = "https://api.coinpaprika.com/v1/tickers/"
   const promises = coinId.map((id) => axios.get(tickerUrl + id))
   const coinData = await Promise.all(promises)
   const coinPriceData = coinData.map(function(response) {
     let coin = response.data
     return{
      key : coin.id,
      name : coin.name,
      ticker : coin.symbol,
      price : formatPrice(coin.quotes.USD.price),
      balance : 0
     }
   })
   this.setState({coinData : coinPriceData})
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
