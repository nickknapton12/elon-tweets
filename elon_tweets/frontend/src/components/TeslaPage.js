import "../App.css";
import Card from "./Card";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TeslaPage() {
    const [stockPrice, setStockprice] = useState();

useEffect(() => {

    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
        params: {symbol: 'TSLA', region: 'US'},
        headers: {
          'x-rapidapi-key': '35b873b0d7mshe1281bfb5203990p117614jsn0c18e15100f0',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          setStockprice(response.data.financialData.currentPrice.fmt);
      }).catch(function (error) {
          console.error(error);
      });
      
}, [])

  return (
    <div className="teslaPage">
        <div className="cardContainer">
            <Card title="Stock Price" info={stockPrice}/>
            <Card title="Roadster Release Date" info="test2"/>
            <Card title="CyberTruck Release Date" info="test2"/>
        </div>
    </div>
  );
}