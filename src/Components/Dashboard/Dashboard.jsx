import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Dashboard = () => {
 
    
   
    return (
        <div className="bg-secondary">
            <Sidebar></Sidebar>
            <div className="mt-8 lg:ml-64 bg-secondary">

                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;