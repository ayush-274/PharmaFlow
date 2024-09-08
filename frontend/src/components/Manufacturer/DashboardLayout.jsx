import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import LineChart from './LineChart';
import PieChart from './PieChart';
import OrdersTable from './OrdersTable';

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Main content with margin adjusted for sidebar */}
      <div className="ml-64 w-full p-6 bg-white text-black">
        <h1 className="text-green-600 text-3xl font-bold mb-6">DASHBOARD</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatsCard title="Total Customers" value={5251} percentage="+14%" />
          <StatsCard title="Sales Today" value={7916} percentage="+21%" />
          <StatsCard title="Monthly Sales" value={59525} percentage="+5%" />
          <StatsCard title="Yearly Sales" value={65152} percentage="+43%" />
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart />
          <PieChart />
        </div>

        {/* Orders Table */}
        <OrdersTable />
      </div>
    </div>
  );
};

export default DashboardLayout;