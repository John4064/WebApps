import React from 'react';
import '../styles/Coin.css';



function Coin(props) {
    //props.id, props.name, props.symbol, props.price, props.weekchange
    return (
        <div className={"Coin-Root"}>
            <h2>{props.name}</h2>
            <p>{props.symbol}</p>
            <p>$ {props.price}</p>
            <p>% {props.change}</p>
        </div>
    );
}

export default Coin;
