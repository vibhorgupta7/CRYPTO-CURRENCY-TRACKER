import React from 'react';
import './Coin.css'

const Coin = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"></img> 
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs {price}</p>
                    <p className="coin-volume">Rs {volume.toLocaleString()
                    }</p>  
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)} % </p>)
                        : ( <p className="coin-percent green">{priceChange.toFixed(2)} % </p>)
                    } 
                    <p className="coin-marketcap">
                        Mkt Cap: Rs {marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
// note volume.toLaceleString() is done so that commas ',' are also shown on screen