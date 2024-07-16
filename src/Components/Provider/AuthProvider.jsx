

/* eslint-disable react/prop-types */
import { createContext,  useState } from "react";




// import axios from "axios";

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(true)
   
   
    // const LogOut = () => {

    //     signOut(auth)
    //         .then(async () => {

    //             // const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })

    //             setUser(null)
    //             Swal.fire({
    //                 title: 'Success',
    //                 text: 'Successfully singed out',
    //                 icon: 'success',
    //                 timer: 1500
    //             })
    //         })

    //         .catch(error => Swal.fire({
    //             title: 'Error!',
    //             text: error.message,
    //             icon: 'error',
    //             timer: 1500
    //         }));


    // }




    const info = {
        user,

      
        setLoading,
        // LogOut,
        
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