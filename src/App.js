import logo from './logo.svg';
import './App.css';
import Coin from './component/Coin/Coin'
import AccountBalance from './component/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="ReactApp"/>
        <h1 className="App-title">
          Coin Exchange
        </h1>
        </header>
          <AccountBalance amount={10000} />
        <table className="coin-table">
          <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
            </tr>
          </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.9} />
          <Coin name="Etherium" ticker="Eth" price={555} />
          <Coin name="Theater" ticker="USD" price={1} />
          <Coin name="Riple" ticker="XRP" price={0.2} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
