import axios from "axios";
import React from "react";
import Coin from './Coin.js';
import {apiKey} from "../config/config";

//const baseURL = "https://jsonplaceholder.typicode.com/users";
//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
var options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
    params: {
        edition_currency_id: '12',
        time_utc_offset: '28800',
        lang_ID: '1',
        sort: 'PERC1D_DN',
        page: '1'
    },
    headers: {
        'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
        'x-rapidapi-key': apiKey
    }
};

export default function CoinList() {
    const [apiInfo, setApiInfo] = React.useState(null);

    React.useEffect(() => {


        axios.request(options).then(function (res) {
            //console.log(typeof(res.data));
            setApiInfo(res.data.data[0].screen_data.crypto_data);
            //console.log(test.length);
            for(let iter = 0; iter < test.length;iter++){
                console.log(test[iter].name)
                console.log(test[iter].currency_symbol)
                console.log(test[iter].inst_price_usd)
                //1day change
                console.log(test[iter].pair_change_percent_numeric+"%")
            }
            //res.data is an object not a jsonstrong


        }).catch(function (error) {
            console.error("ERROR IS DETECTED!");
            console.error(error);
        }).then( function () {
            // always executed
            console.log(5);
        });
        /*
        axios.get(baseURL).then((res) => {
            setApiInfo(res.data);
            console.log(res.data);
            console.log(77);
        });*/
    }, []);

    if (!apiInfo) return null;
//Example to access Data
    return (
        <div>
            <h1>{apiInfo[0].name}</h1>
            <p>{apiInfo[0].currency_symbol}</p>
            <p>{apiInfo[0].inst_price_usd}</p>
            <p>{apiInfo[0].pair_change_percent_numeric}%</p>
        </div>
    );
}
/*
axios.get(baseURL)
    .then(res => {
        const persons = res.data;
        console.log(persons);

    }).catch((error)=> {
    console.log(error);

}).then( function () {
    // always executed
});
 */