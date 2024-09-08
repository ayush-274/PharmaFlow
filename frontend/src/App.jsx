
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Dashboard from "./components/Manufacturer/DashboardLayout"
import Distributors from "./components/Manufacturer/sidefolders/distributors"
import Performace from "./components/Manufacturer/sidefolders/performance"


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
    element: <Performace/>
  },
  // {
  //   path: "/dashboard/distributors",
  //   element: <Distributors/>
  // },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;