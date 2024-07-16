import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../Components/SignUp/SignIn";
import { LogIn } from "../Components/LogIn/LogIn";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivetRote/PrivetRoute";


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
        element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            
        ]
    },
    
    
]);