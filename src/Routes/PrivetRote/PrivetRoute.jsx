/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Utils/useAuthProvider";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && isAuthenticated) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;
