import React, { useState } from 'react';
import CoinList from "./CoinList";
import Coin from "./Coin";
export default function Example() {

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div>
            <p>The Currency</p>
            <button onClick={() => console.log("executed")}>
                <CoinList></CoinList>
            </button>
        </div>
    );
}