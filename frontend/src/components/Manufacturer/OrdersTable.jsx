const OrdersTable = () => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your orders data */}
            <tr>
              <td className="border px-4 py-2">123456</td>
              <td className="border px-4 py-2">Medicine A</td>
              <td className="border px-4 py-2">2024-09-08</td>
              <td className="border px-4 py-2">$1200</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrdersTable;
  