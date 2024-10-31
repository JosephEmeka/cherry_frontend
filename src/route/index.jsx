import Dashboard from "../pages/Dashboard";
import Appointment from "../pages/appointments/Appointment";
import LoginPage from "../pages/authPages/LoginPage";
export const ROUTE =[
    {
        path: "/dashboard",
        element: <Dashboard/>,

    },

    {
        path: "/appointment",
        element: <Appointment/>,

    },

    {
        path: "/login",
        element: <LoginPage/>,

    }
]
