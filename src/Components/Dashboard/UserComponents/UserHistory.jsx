
import { useQuery } from '@tanstack/react-query'


import { useEffect, useState } from 'react';
import useAuth from '../../../Utils/useAuthProvider';
import useAxiosSecure from '../../../Utils/useAxiosSecure';
import LoadingSpinner from '../../../Shared/LoadingSpinner';


const TransactionHistory = () => {
    const { state, setState, user } = useAuth()
    
    const [users, setUsers] = useState([])
    const axiosSecure = useAxiosSecure()

    const {
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users/${user.phone}`)
            // setUsers(data)
            return data
        },
    })
    useEffect(() => {
        try {
            axiosSecure.get(`transaction/${user.phone}`)
                .then(data => {
                    setUsers(data.data)
                    setState(!state)

                })
        } catch (error) {
            // setError(error.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [axiosSecure, refetch])

   
   

    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-primary'>
                            See all Transaction History
                        </h1>
                        <p className='text-primary'>See your Transaction History here</p>
                        <div className='md:flex gap-4 mx-auto w-full justify-center  text-center'>
                            <div className="text-center md:mr-20  ">
                                <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" >
                                    <label htmlFor="Search" className="hidden">Search</label>
                                    <div className="relative mx-auto">
                                        <input type="search" name="search" placeholder="Search user names..." className="w-32 py-2 pl-10 text-sm  border border-primary rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">

                                            <button type="submit" title="search" className="p-1  focus:outline-none focus:ring">
                                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800 text-primary">
                                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                                </svg>
                                            </button>
                                        </span>

                                    </div>
                                  
                                </form>
                            </div>
                            
                        </div>

                    </div>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-auto'>
                            <table className='min-w-full leading-normal bg-primary text-white overflow-auto'>
                                <thead>
                                    <tr>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Camp Name
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Camp Fees
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Transaction Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Transaction Id
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Registered Date
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => {


                                        return <tr key={user._id} className='border border-secondary'>

                                            <td className='px-5 py-3'>{user.campName}</td>
                                            <td className='px-5 py-3'>{user.campFees}</td>
                                            <td className='px-5 py-3'>{user.Transaction_status}</td>
                                            <td className='px-5 py-3'>{user.transactionId}</td>
                                            <td className='px-5 py-3'>

                                                {user.date}


                                            </td>

                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default TransactionHistory