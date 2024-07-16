

/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext,  useState } from "react";

import swal from 'sweetalert';



export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(true)
   
   
    const LogOut = () => {

        axios.get(`${import.meta.env.VITE_API_URL}/logout`)
            .then(async () => {

                // const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })

                setUser(null)
                swal({
                    title: 'Success',
                    text: 'Successfully logged in',
                    icon: 'success',
                    timer: 1500
                })
                localStorage.removeItem('access-token')
            })

            .catch(error => swal({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                timer: 1500
            }));


    }




    const info = {
        user,

      
        setLoading,
        LogOut,
        
        loading,

        state,
        setState,
        setUser

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;