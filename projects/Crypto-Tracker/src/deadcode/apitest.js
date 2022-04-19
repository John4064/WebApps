import axios from "axios";

const apiKey = "2c32c52680mshfce85c9bcc59db4p1a6f6cjsn097da7ccb84f";

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
function execute(){
    axios.request(options).then(function (res) {
        //console.log(typeof(res.data));
        var test = res.data.data[0].screen_data.crypto_data;
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
}

console.log("Begin!");
execute();


