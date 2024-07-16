/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import swal from 'sweetalert';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log(user);
    useEffect(() => {
        const checkAuthentication = async () => {
            console.log(user);
            const token = localStorage.getItem('access-token');
            if (token) {
                try {
                    const response = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {}, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    console.log(response.data);
                    if (response.data.token) {
                        setIsAuthenticated(true);
                        // setUser(response.data.user);
                    
                        // Assuming the response contains user data
                    } else {
                        localStorage.removeItem('access-token');
                    }
                } catch (error) {
                    console.error('Token verification failed:', error);
                    localStorage.removeItem('access-token');
                }
            }
            setLoading(false);
        };

        checkAuthentication();
    }, []);

    const LogOut = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/logout`);
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem('access-token');
            swal({
                title: 'Success',
                text: 'Successfully logged out',
                icon: 'success',
                timer: 1500
            });
        } catch (error) {
            swal({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                timer: 1500
            });
        }
    };

    const info = {
        user,
        setUser,
        isAuthenticated,
        loading,
        setLoading,
        LogOut,
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
