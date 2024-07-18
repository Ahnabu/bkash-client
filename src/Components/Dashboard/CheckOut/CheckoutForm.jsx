
import './CheckoutForm.css'
import { ImSpinner9 } from 'react-icons/im'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'



import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Utils/useAxiosSecure'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Utils/useAuthProvider'
const CheckoutForm = ({ closeModal, participant,}) => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        // fetch client secret

        if (participant?.campFees && participant?.campFees > 1) {
            getClientSecret({ campFees: participant?.campFees })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [participant?.campFees])

    //   get clientSecret
    const getClientSecret = async campFees => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, campFees)
        setClientSecret(data.clientSecret)
    }

    const handleSubmit = async event => {
        // Block native form submission.
        event.preventDefault()
       
        // if () {
        //     console.log(paymentIntent)
        //     // 1. Create payment info object
        //     const paymentInfo = {
               
        //     }
        //     delete paymentInfo._id
        //     console.log(paymentInfo)
        //     try {
        //         // 2. save payment info in booking collection (db)
        //         const { data } = await axiosSecure.post('/payment', paymentInfo)
        //         console.log(data)

        //         // 3. change room status to booked in db
        //         await axiosSecure.put(`/update-participant/${participant._id}`, {
        //             confirmation_status: 'Confirmed', payment_status: 'Paid'
        //         })


        //         //4. update camp participant count

        //         // update ui
        //         refetch()
        //         closeModal()
        //         Swal.fire({
        //             title: 'Success',
        //             text: 'Successfully Paid',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //         })
        //         navigate('/dashboard')
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }

        setProcessing(false)
    }

    return (
        <>
            {' '}
            <form onSubmit={handleSubmit}>
               

                <div className='flex mt-2 justify-around'>
                    <button
                        // disabled={}
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    >
                        {processing ? (
                            <ImSpinner9 className='animate-spin m-auto' size={24} />
                        ) : (
                            `Pay ${participant?.campFees}`
                        )}
                    </button>
                    <button
                        onClick={closeModal}
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    )
}

CheckoutForm.propTypes = {
    participant: PropTypes.object,
    closeModal: PropTypes.func,
    refetch: PropTypes.func,
}

export default CheckoutForm