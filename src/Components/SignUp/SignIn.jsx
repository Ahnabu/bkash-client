import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Utils/useAuthProvider";
import swal from "sweetalert";

export function SignIn() {
    const { setLoading, setUser } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        if (password.length !== 5) {
            setError("Pin must be 5 characters");
            return;
        }
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone: event.target.phone.value,
        };

        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, newUser);
            const data = response.data;
            if (data.status === 200) {
                swal({
                    title: 'Success',
                    text: 'Successfully signed up',
                    icon: 'success',
                    timer: 1500
                });

                localStorage.setItem('user-data', JSON.stringify(data));
                setUser(data);

                const userInfo = { email: data.email };
                const tokenResponse = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userInfo);
                if (tokenResponse.data.token) {
                    localStorage.setItem('access-token', tokenResponse.data.token);
                }

                navigate('/dashboard', { replace: true });
            } else {
                localStorage.removeItem('access-token');
                localStorage.removeItem('user-data');
            }
        } catch (error) {
            setError('Sign up failed. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container md:px-24 mx-auto md:py-24 bg-secondary ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block ">
                    <img
                        src="/bkash-logo.png"
                        height="540"
                        width="540"
                        alt="login image"
                    />
                    <p className="text-3xl mt-4 ">
                        Create a new Bkash Account
                    </p>
                </div>
                <div className="border-2 p-12 text-black">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Sign Up
                    </h6>
                    <form onSubmit={handleSignUp} action="">
                        <label htmlFor="name">Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="mt-3 w-full input input-bordered px-3 py-2 rounded-xl"
                        />
                        <br />
                        <label htmlFor="number">Mobile Number</label> <br />
                        <input
                            type="number"
                            name="phone"
                            placeholder="your number"
                            className="mt-3 w-full input input-bordered px-3 py-2 rounded-xl"
                        />
                        <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="your email"
                            className="mt-3 w-full input input-bordered px-3 py-2 rounded-xl"
                        />
                        <br />
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="number"
                            name="password"
                            placeholder="your password"
                            className="mt-3 w-full input input-bordered px-3 py-2 rounded-xl"
                        />
                        <br />
                        {error && <p className="text-red-500 font-bold mt-4 w-full text-center">{error}</p>}
                        <br />
                        <button
                            type="submit"
                            className="w-full btn btn-primary mt-12 text-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <h6 className="my-12 text-center text-white">
                            Already have account ?{" "}
                            <Link className="text-primary font-semibold" to={"/"}>
                                Log In
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
