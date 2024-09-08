const StatsCard = ({ title, value, percentage }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-green-500">{percentage} Since last month</p>
      </div>
    );
  };
  
  export default StatsCard;
  