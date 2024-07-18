import PropTypes from 'prop-types'
import {
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
} from "@material-tailwind/react";
import { useState } from 'react'


import { MdOutlinePayment } from 'react-icons/md';
import CheckoutForm from '../CheckOut/CheckoutForm';



const SendMoney = () => {

    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                    Review Info Before Transaction
                </DialogHeader>
                <DialogBody>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>

                            <div className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>

                                


                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Price: $
                                    </p>
                                </div>
                                <hr className='mt-8 ' />

                                <CheckoutForm
                                    // participant={participant}
                                    closeModal={handleOpen}
                                // refetch={refetch}
                                />

                            </div>

                        </div>
                    </div>
                </DialogBody>

            </Dialog>
        </>
    )
}

SendMoney.propTypes = {
    participant: PropTypes.object,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
    refetch: PropTypes.func,
}

export default SendMoney