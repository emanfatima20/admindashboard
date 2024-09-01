import React from 'react'
import Test2 from "../Myappcomponents/Test2";
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS,
     CategoryScale, 
     LinearScale, 
     PointElement,
      BarElement,
    Title,
Tooltip,

Legend} from 'chart.js';
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement,
    BarElement,
      Title,
     Tooltip,
     Legend,
    

);
function Test() {
    const options = {
        responsive:true,
        plugins:{
            Legend:{
                position:'top',
            },
            title:{
                display:true,
                text:'THIS GRAPH SHOWS INCOME',
                
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
                label:"Income Over Past Years",
                data:[50000, 70000,80000,30000,,68000],
                borderColor: 'rgb(75,192,192)',
                backgroundColor: '#f5b810'
            }
        ]
    }


  return (
      <>
       <div className="barline">
       <div className='line'> <Test2/>
        </div>
        <div className='bar'>
       <Bar data={linearchartdata} options={options}/>
       </div>
       </div>
      </>
      
     
  )
}

export default Test
