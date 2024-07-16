import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
// import { CgProfile } from "react-icons/cg";

import { Link } from 'react-router-dom'

// import OrganizerMenu from './Menu/OrganizerMenu'
// import UserMenu from './Menu/UserMenu'
import { IoMdHome } from "react-icons/io";
import MenuItem from './Menu/MenuItem';
import useAuth from '../../Utils/useAuthProvider';
import useRole from '../../Utils/useRole';
const Sidebar = () => {
    const { user,LogOut} = useAuth()
    const [isActive, setActive] = useState(false)

    const [role, isLoading] = useRole()
    console.log(role, isLoading)
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
        console.log('clicked', isActive);

    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between lg:hidden'>
                <div className=''>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src='/bkash-icon.png'
                                alt='logo'
                                width='24'
                                height='24'
                            />

                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-primary focus:text-white text-primary'
                >
                    {!isActive ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6 relative "
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 relative"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-primary bg-opacity-70 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  lg:translate-x-0  transition duration-200 ease-in-out`}
            >

                <div>
                    {/* logo  */}
                    <div>

                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
                            <Link to='/dashboard'>
                                <div className='flex gap-1 items-center'>
                                    <img src="/bkash-icon.png" alt="" className='w-6 h-6' />
                                    <h3 className='text-white font-bold text-xl'>Bkash</h3>

                                </div>
                            </Link>

                        </div>
                        <div className='pt-4 mx-auto'>
                            <p className='text-xl'>
                                {user.name}
                            </p>
                            <p className='pt-2'>
                             Number: {user.phone}
                            </p>
                        </div>
                    </div>
                  
                </div>

                <div>
                    <div>
                        

                        {/* Nav Items */}
                        <div className='flex flex-col justify-between flex-1 rounded mt-6'>
                            {/* Conditional toggle button here.. */}

                            {/*  Menu Items */}
                            <nav>

                                <MenuItem
                                    label='Home'
                                    address='/dashboard'
                                    className="rounded"
                                    icon={IoMdHome}
                                />
                                {/* {role === 'User' && <UserMenu />}

                            {role === 'Organizer' && <OrganizerMenu />} */}
                            </nav>
                        </div>
                    </div>
                    <hr />

                    {/* Profile Menu */}
                    

                    <button
                        onClick={LogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 bg-primary text-white hover:bg-white  hover:text-primary transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Sidebar