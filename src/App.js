import React, { useState, useEffect } from 'react';
 import axios from 'axios';                         // axios is used to fetch data from API
 import './App.css';
 import Coin from './Coin';
 import Menu from './Menu';
 
 
 function App() {
   
  const [coins, setCoins] = useState([]);          // state
  const [search, setSearch] = useState('');        // state for searching

   
  useEffect(() => {
     axios.get(                                     // axios.get() fetches the api
         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
       )
       .then(res => {                               // when fetched, .then() is filling setCoins i.e is the state with the data
         setCoins(res.data);
         console.log(res.data);
       })
       .catch(error => console.log(error));         // checking error
   }, []);

   
   const handleChange = e => {                      // when we input, a change in happens and onchange funtion is calledi.e handleChange(), it fetches data  related to search and fills setSearch with that
     setSearch(e.target.value);
   };

   
   const filteredCoins = coins.filter(coin =>
     coin.name.toLowerCase().includes(search.toLowerCase())
   );

   return (
     <div className='coin-app'>
       <div className='coin-search'>
         <h1 className='coin-text'>Search a currency</h1>
         <form>
           <input
             className='coin-input'
             type='text'
             onChange={handleChange}
             placeholder='Search'
           />
         </form>
       </div>
       <Menu/>
       {filteredCoins.map(coin => {
         return (
           <Coin
             key={coin.id}
             name={coin.name}
             price={coin.current_price}
             symbol={coin.symbol}
             marketcap={coin.total_volume}
             volume={coin.market_cap}
             image={coin.image}
             priceChange={coin.price_change_percentage_24h}
           />
         );
       })}
     </div>
   );
 }

 export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; 
// import './App.css';                                       // Used to fetch data from API
// import Coin from './Coin';


// // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

// function App() {
// const [coins,setCoins] = useState([]);                            // state
// const [search,setSearch] = useState('');
  
// useEffect(()=>{
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
//     ).then( res=> {
//         setCoins( res.data );   
//         console.log(res.data);                                  // useEffect is calls fucntion that fetches data from api using axios and the puts that data in setCoins i.e is the state
//     }).catch( error=> console.log("Error in API " +error))       // if there is any error in the link the error will showed 
//   },[]);

// const handleChange = e => {
//   setSearch(e.target.value);
// };

// const filteredCoins = coins.filter( coin=>
//   coin.name.toLowerCase().includes(search.toLocaleLowerCase())
// );

//   return (
//     <div className="coin-app">
//       <div className="coin-search">
//         <h1 className="coin-text">Search a Currency</h1>
//         <form>
//           <input
//               type="text" 
//               placeholder="Search" 
//               className="coin-input" 
//               onchange={handleChange} 
//               />
//         </form>
//       </div>
      
//       {filteredCoins.map(coin => {
//         return (
//           <Coin
//             key={coin.id}
//             name={coin.name}
//             image={coin.image}
//             symbol={coin.symbol}
//             marketcap={coin.market_cap}
//             price={coin.current_price} 
//             priceChange={coin.price_change_percentage_24h}
//             volume={coin.total_volume}
//             />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
