import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <section className="bg-secondary  dark:bg-gray-900 ">
                <div className="container min-h-screen px-6 py-12 mx-auto md:flex md:items-center lg:gap-12">
                    <div className="w-full md:w-1/2 text-end my-auto">
                        <p className="text-lg font-medium text-white dark:text-white">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-white dark:text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-white dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>

                        <Link to={'/dashboard'}> <Button className="mt-3 text-white bg-primary px-3 py-2">Go to Home</Button> </Link>

                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 my-auto">
                        <img className="w-full max-w-lg lg:mx-auto" src="/bkash-logo.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;