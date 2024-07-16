import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../Components/SignUp/SignIn";
import { LogIn } from "../Components/LogIn/LogIn";


export const router = createBrowserRouter([
    {
        path: "/sign-up",
        element: <SignIn></SignIn>,
    },
    {
        path: "/",
        element: <LogIn></LogIn>,
    },
]);