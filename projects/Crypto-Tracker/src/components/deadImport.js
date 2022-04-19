import axios from "axios";
import {apiKey} from "../config/config.js";

const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
        symbol: 'MSFT',
        function: 'TIME_SERIES_INTRADAY',
        interval: '5min',
        output_size: 'compact',
        datatype: 'json'
    },
    headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': apiKey
    }
};

export default class DeadImport extends React.Component {
    state = {
        coins: []
    }

    componentDidMount() {
        /*
        axios.get(`alpha-vantage.p.rapidapi.com`)
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })

         */
        axios.request(options).then(function (response) {
            this.coins = response.data;
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    /*this.state.coin.map(person =>
                            <li key={person.id}>{person.name}</li>)
                }*/
    render() {
        return (
            <ul>
                <p>sad</p>
            </ul>
        )
    }
}
/*
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

 */