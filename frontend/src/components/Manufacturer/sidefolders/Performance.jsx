import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../Sidebar'; // Adjust the path if needed

const Performance = () => {
  const data = {
    labels: ['Medicine A', 'Medicine B', 'Medicine C', 'Medicine D'],
    datasets: [
      {
        label: 'Sales Performance',
        data: [12000, 15000, 10000, 20000],
        backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="ml-64 p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Performance</h2>
        <div className="h-96 bg-white p-4 rounded-md shadow-md">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Performance;
