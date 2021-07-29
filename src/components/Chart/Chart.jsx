import React from "react";
import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data, country}) => {

   const [dailyData, setDailyData] = useState([]);

   useEffect( () => {

      const fetchAPI = async () => {
         setDailyData(await fetchDailyData());
      }

      fetchAPI();
   },[]);

    const lineChart = (

      dailyData.length //0
      ? (
        <Line
          data = {{
            labels: dailyData.map( ({date}) => date ),
            datasets: [{
              data: dailyData.map( ({confirmed}) => confirmed ),
              label: 'Infected',
              borderColor: 'rgba(0,0,255)',
              backgroundColor: 'rgba(0,0,255,0.2)',
              fill: true,
            }, {
              data: dailyData.map( ({deaths}) => deaths ),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              fill: true,
            }],
          }}
        />

      ):null


    );
    
    const barChart = (
      data.confirmed
      ? (
        <Bar 
          data = {{
            labels:['Infected','Recovered','Deaths'],
            datasets: [{
              label:'the Real Time Number',
              backgroundColor: [
              'rgba(0,0,255,0.2)',
              'rgba(0,255,0,0.2)',
              'rgba(255,0,0,0.2)',
            ],
            borderColor: [
              'rgba(0,0,255)',
              'rgba(0,255,0)',
              'rgba(255,0,0)',
            ],
            borderWidth: 1,
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
          }}

        option = {{
          
          legend: { display: false},
          title: {display: true, text: `current state in ${country}`},
        
        }}

        />
      ) : null
    
    );

    return (
        <div className={styles.container}>
          {country? barChart:lineChart}
        </div>
      );
}
 
export default Chart;