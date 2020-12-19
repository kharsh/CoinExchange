
import AccountBalance from './component/AccountBalance/AccountBalance';
import CoinList from './component/CoinList/CoinList';
import Header from './component/CoinExchangeHeader/Header';
import 'styled-components'
import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const AppHeader = styled.div`
  text-align: center;
  background-color: rgb(184, 129, 11);
  color: #cccccc;
`;
const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4))

function App() {

  const [coinExchangeHeader] = useState("Coin Exchange")
  const [amount, setAmount] = useState(10000)
  const [showBalance, setShowBalance] = useState(true)
  const [coinData, setCoinData] = useState([])
  
  const handleRefresh = async (valueChangedTickerId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangedTickerId}`
    const response = await axios.get(tickerUrl)
    const newCoinData = coinData.map(function(values) {
    const newValue = formatPrice(response.data.quotes.USD.price)
    let newValues = {...values}
      if(valueChangedTickerId === newValues.key) {
        newValues.price = newValue
      }
      return newValues
    });
    
    setCoinData(newCoinData)
  }

  const handleBalanceDisplay = () => {
    setShowBalance(!showBalance)
  }

  const componentDidMount = async () => {
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
    });
    console.log(coinPriceData)
    setCoinData(coinPriceData)
   }

  useEffect(() => {
    console.log(coinData)
    if(coinData.length === 0) {
      componentDidMount()
    }
  });

  
  return (
    <AppHeader>
          <Header header={coinExchangeHeader}/>
          <AccountBalance amount={amount} showBalance ={showBalance} handleBalanceDisplay={handleBalanceDisplay}/>
          <CoinList coinData={coinData} showBalance = {showBalance} handleRefresh={handleRefresh}/>
    </AppHeader>
  );
}


export default App;
