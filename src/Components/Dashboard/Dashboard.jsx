import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import useAuth from "../../Utils/useAuthProvider";

const Dashboard = () => {
    const { loading } = useAuth();
    
    console.log(loading);
    return (
        <div className="">
            <Sidebar></Sidebar>
            <div className="mt-8 lg:ml-64">

                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;