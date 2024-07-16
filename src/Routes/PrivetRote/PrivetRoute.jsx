/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Utils/useAuthProvider";
import LoadingSpinner from "../../Shared/LoadingSpinner";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;