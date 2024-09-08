// const PieChart = () => {
//     return (
//       <div className="bg-gray-800 p-4 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Sales By Category</h3>
//         <div>
//           {/* Chart placeholder */}
//           <p>Pie chart placeholder</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default PieChart;
  

import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const data = {
    labels: ['Medicine A', 'Medicine B', 'Medicine C', 'Medicine D'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [300, 500, 100, 400],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="w-full h-80">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
