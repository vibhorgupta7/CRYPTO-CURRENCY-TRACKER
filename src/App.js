import React, {useState, useEffect } from 'react';
import axios from 'axios';                                        // Used to fetch data from API
import Coin from './Coin';
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
const [coins,setCoins] = useState([]);                            // state
const [search,setSearch] = useState('');
  
useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).then( res=> {
        setCoins( res.data );                                     // useEffect is calls fucntion that fetches data from api using axios and the puts that data in setCoins i.e is the state
    }).catch( error=> console.log("Error in API " +error))       // if there is any error in the link the error will showed 
  },[]);

const handleChange = e => {
  setSearch(e.target.value);
};

const filteredCoin = coins.filter( coin=>
  coin.name.toLowerCase().includes(search.toLocaleLowerCase())
);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input 
              type="text" 
              placeholder="Search" 
              className="coin-input" 
              onchange={handleChange} 
              />
        </form>
      </div>
      {filteredCoin.map(coin => {
        return (
          <Coin
            key={coin.key}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price} 
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
        );
      })}
    </div>
  );
}

export default App;
