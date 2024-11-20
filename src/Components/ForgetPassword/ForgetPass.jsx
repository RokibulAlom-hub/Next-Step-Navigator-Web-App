import { useContext } from "react";
import { Authcontext } from "../../Provider/Authprovider";
import toast from "react-hot-toast";


const ForgetPass = () => {
    const { reset} = useContext(Authcontext)
    const resetPass = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        reset(email)
            .then(() => {
                toast.success('Password reset email sent!')
            })
            .catch(err => {
                console.log(err.message);

            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <form onSubmit={resetPass}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ForgetPass;