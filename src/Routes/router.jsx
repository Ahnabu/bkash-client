import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../Components/SignUp/SignIn";
import { LogIn } from "../Components/LogIn/LogIn";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivetRote/PrivetRoute";
import TransactionHistory from "../Components/Dashboard/UserComponents/UserHistory";
import Error from "../../Error";
import SendMoney from "../Components/Dashboard/UserComponents/SendMoneyModal";
import { CashOut } from "../Components/Dashboard/UserComponents/Cashout/CashOut";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn></LogIn>,
    },
    {
        path: "/sign-up",
        element: <SignIn></SignIn>,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        errorElement:<Error/>,
        children: [
            {
                path: 'transaction-history',
                element:<PrivateRoute><TransactionHistory/> </PrivateRoute> 
            },
            {
                path: 'send-money',
                element:<PrivateRoute> <SendMoney/></PrivateRoute> 
            },
            {
                path: 'cash-out',
                element:<PrivateRoute> <CashOut/></PrivateRoute> 
            },
        ]
    },
    
    
]);