import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
     CategoryScale, 
     LinearScale, 
     PointElement,
      LineElement,
    Title,
Tooltip,

Legend,
plugins} from 'chart.js';
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement,
      Title,
     Tooltip,
     Legend,
    

);
function Test2() {
    const options = {
        responsive:true,
        plugins:{
            Legend:{
                position:'top',
            },
            title:{
                display:true,
                text:'THIS GRAPH SHOWS EXPENSES',
                
            },
        },

    };

const linearchartdata={
        labels :[
            2020,
            2021,
            2022,
            2023,
            2024
        ],
        datasets:[
            {
                label:"Expenses Over Past Years",
                data:[32000, 270000,18000,10000,,23200],
                borderColor: '#f5b810'
               
            }
        ]
    }


  return (
     
      <Line data={linearchartdata} options={options}/>
     
  )
}

export default Test2
