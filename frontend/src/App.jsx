import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Dashboard from "./components/Manufacturer/DashboardLayout";
import Distributors from "./components/Manufacturer/sidefolders/Distributors";
import Performance from "./components/Manufacturer/sidefolders/Performance"; // Updated the import to match the correct spelling
import Transaction from "./components/Manufacturer/sidefolders/Transactions";
import Updatemedicine from "./components/Manufacturer/sidefolders/Update-medicines";
import MonthlySales from "./components/Manufacturer/sidefolders/Monthly-sales"; // Add import for MonthlySales
import YearlySales from "./components/Manufacturer/sidefolders/Yearly-sales"; // Add import for YearlySales

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/dashboard/distributors",
    element: <Distributors/>
  },
  {
    path: "/dashboard/performance",
    element: <Performance/> // Updated to match the correct spelling
  },
  {
    path: "/dashboard/transaction",
    element: <Transaction/>
  },
  {
    path: "/dashboard/update-medicines",
    element: <Updatemedicine/>
  },
  {
    path: "/dashboard/monthly-sales",
    element: <MonthlySales/> // Added MonthlySales route
  },
  {
    path: "/dashboard/yearly-sales",
    element: <YearlySales/> // Added YearlySales route
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
