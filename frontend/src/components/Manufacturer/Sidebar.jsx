// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 p-6">
//       <h2 className="text-white text-2xl font-semibold mb-6">PharmaFlow</h2>
//       <ul>
//         <li className="mb-4">
//           <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
//         </li>
//         {/* Add more menu items as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 p-6">
      <h2 className="text-white text-2xl font-semibold mb-6">PharmaFlow</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/distributors" className="text-white hover:text-gray-400">Distributors</Link>
        </li>
        <li className="mb-4">
          <Link to="/transactions" className="text-white hover:text-gray-400">Transactions</Link>
        </li>
        <li className="mb-4">
          <Link to="/monthly-sales" className="text-white hover:text-gray-400">Monthly Sales</Link>
        </li>
        <li className="mb-4">
          <Link to="/yearly-sales" className="text-white hover:text-gray-400">Yearly Sales</Link>
        </li>
        <li className="mb-4">
          <Link to="/update-medicines" className="text-white hover:text-gray-400">Update Medicines</Link>
        </li>
        <li className="mb-4">
          <Link to="/performance" className="text-white hover:text-gray-400">Performance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
