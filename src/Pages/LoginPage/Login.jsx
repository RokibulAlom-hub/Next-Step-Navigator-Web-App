import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs"

const Login = () => {
  const navigate  = useNavigate();
  const {userLogin, googlelogin} = useContext(Authcontext)
  const handleLogin =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
   

    userLogin(email,password)
    .then(result =>{
      const user = result.user;
      // console.log("logged in",user);
      toast.success('Successfully Logged in')
      navigate('/')
      
    })
    .catch(err => {
      console.log(err.message);
      toast.error(err.message)
    })
    
  }
  const handlegoggle = () =>{
    googlelogin()
    .then((result) =>{
      // console.log(result.user);
      navigate('/')
    })
    .catch((err) => console.log(err.message)
    )
}
  // const Logout =()=>{
  //   userLogout()
  //   .then(() =>{
  //       console.log('logout seuccess');
  //       toast.success('Log Out successfully')
  //   })
  // }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl my-4 font-bold text-center text-[#6C1C2E] mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
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

          {/* Password Input */}
          <div className="mb-4">
            <label

              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Enter your password"
              required
            />
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
            {/* <button
              onClick={Logout}
              type="submit"
              className="w-full px-4 my-3 py-2 bg-red-400 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Logout
            </button>
            <div className="mt-6"> */}
            <button
              onClick={handlegoggle}
              className="w-full px-4 py-2 my-3 bg-gray-500 text-white 
              rounded-lg flex items-center justify-center gap-2"
            >
            <BsGoogle />
             Google
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>

        {/* Register Link */}
      </div>
    
  );
};

export default Login;
