// const LineChart = () => {
//     return (
//       <div className="bg-gray-800 p-4 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Sales Trend</h3>
//         <div>
//           {/* Chart placeholder */}
//           <p>Line chart placeholder</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default LineChart;
  

import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-white mb-4">Sales Trend</h3>
      <div className="h-50">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
