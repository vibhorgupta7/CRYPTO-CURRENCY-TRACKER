import React from 'react';
import './Menu.css';

const Menu = () => {
    return(
        <div className="menu-container">
            <div className="menu-row">
                <div className="menu">
                    <h1>Currency</h1>
                </div>
                <div className="menu-data">
                    <p>Coin Price</p>
                    <p>Coin Volume</p>
                    <p>% Change</p>
                    <p>Market Capitalisation</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;