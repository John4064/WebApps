import logo from './images/logo.jpg';
import './styles/App.css';
//Example how to use components
import CoinList from "./components/CoinList";
import Example from "./components/Example";
//This is the Base of the App!
function App() {
  return (
    <div className="App">
      <header id={"App-Header"} className="App-header">
          <h3>Crypto Tracker</h3>
      </header>
        <body className="App-body">
            <div className="App-bar">
                <a className="active" href="#App-Header">Home</a>
                <a href="#test1">test1</a>
                <a href="#test2">test2</a>
                <a href="#App-Header">Back to Top</a>
                <button id="exec" type="button">Execute</button>
                <Example></Example>
            </div>
            <div className="App-content">

            </div>
        </body>
    </div>
  );
}

/*
<Coin name="Bitcoin" symbol={"BTC"} price={37897.20} change={3.4}/>
                <Coin name="Ethereum" symbol={"ETH"} price={2615.33} change={1.2}/>
                <Coin name="Cardano" symbol={"ADA"} price={0.82} change={-.01}/>
                <Coin name="Shiba Inu" symbol={"SHIB"} price={0.00005} change={-.2}/>
                <Coin name="Doge Coin" symbol={"DOGE"} price={0.31} change={-.01}/>
                <Coin name="Cardano" symbol={"ADA"} price={0.82} change={-.01}/>
                <Coin name="Shiba Inu" symbol={"SHIB"} price={0.00005} change={-.2}/>
                <Coin name="Doge Coin" symbol={"DOGE"} price={0.31} change={-.01}/>
                <Coin name="Cardano" symbol={"ADA"} price={0.82} change={-.01}/>
                <Coin name="Shiba Inu" symbol={"SHIB"} price={0.00005} change={-.2}/>
                <Coin name="Doge Coin" symbol={"DOGE"} price={0.31} change={-.01}/>
                <Coin name="Cardano" symbol={"ADA"} price={0.82} change={-.01}/>
                <Coin name="Shiba Inu" symbol={"SHIB"} price={0.00005} change={-.2}/>
                <Coin name="Doge Coin" symbol={"DOGE"} price={0.31} change={-.01}/>

 */
export default App;
