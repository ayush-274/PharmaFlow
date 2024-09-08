import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="h-screen w-64 bg-gray-800 p-6">
      <h2 className="text-white text-2xl font-semibold mb-6">PharmaFlow</h2>
      <ul>
        <li className={`mb-4 ${location.pathname === '/dashboard' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard' ? 'bg-green-600' : ''}`}>
            Dashboard
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/distributors' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/distributors" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/distributors' ? 'bg-green-600' : ''}`}>
            Distributors
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/transaction' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/transaction" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/transaction' ? 'bg-green-600' : ''}`}>
            Transactions
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/monthly-sales' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/monthly-sales" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/monthly-sales' ? 'bg-green-600' : ''}`}>
            Monthly Sales
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/yearly-sales' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/yearly-sales" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/yearly-sales' ? 'bg-green-600' : ''}`}>
            Yearly Sales
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/update-medicines' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/update-medicines" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/update-medicines' ? 'bg-green-600' : ''}`}>
            Update Medicines
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/dashboard/performance' ? 'bg-green-600 rounded-md' : ''}`}>
          <Link to="/dashboard/performance" className={`text-white hover:text-gray-400 block p-2 rounded-md ${location.pathname === '/dashboard/performance' ? 'bg-green-600' : ''}`}>
            Performance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
