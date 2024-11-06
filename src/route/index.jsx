import Dashboard from "../pages/Dashboard";
import Appointment from "../pages/appointments/Appointment";
import LoginPage from "../pages/authPages/LoginPage";
import CreateAccountPage from "../pages/authPages/CreateAccountPage";
import ForgetPassword from "../pages/authPages/ForgotPassword";
import Terms from "../pages/utils/Terms";
import PrivacyPolicy from "../pages/utils/PrivacyPolicy";
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

    },

    {
        path: "/signup",
        element: <CreateAccountPage/>,

    },

    {
        path: "/forget-password",
        element: <ForgetPassword/>,

    },

    {
        path: "/terms",
        element: <Terms/>,

    },

    {
        path: "/Privacy",
        element: <PrivacyPolicy/>,

    }
]
