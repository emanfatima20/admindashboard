// // src/Charttest.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register required Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Charttest = () => {
//     // Sample data for the chart
//     const data = {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [
//             {
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgb(75, 192, 192)',
//                 borderWidth: 1,
//             }
//         ]
//     };

//     // Chart options
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//             },
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         let label = context.dataset.label || '';
//                         if (label) {
//                             label += ': ';
//                         }
//                         if (context.parsed.y !== null) {
//                             label += context.parsed.y;
//                         }
//                         return label;
//                     }
//                 }
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     };

//     return (
//         <div>
//             <h2>Bar Chart Example</h2>
//             <Bar data={data} options={options} />
//         </div>
//     );
// };

// export default Charttest;
