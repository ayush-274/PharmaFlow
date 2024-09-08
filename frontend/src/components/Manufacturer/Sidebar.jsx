import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 p-6">
      <h2 className="text-white text-2xl font-semibold mb-6">PharmaFlow</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
