import React, {useState, useEffect } from 'react';
import axios from 'axios';                          // Used to fetch data from API
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins,setCoins] = useState([]);          // state

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).then( res=> {
        setCoins( res.data );
        console.log( res.data );
    }).catch( error=> console.log("Error in API " +error))       // if there is any error in the link the error will showed 
  },[]);



  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
