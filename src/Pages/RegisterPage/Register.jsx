import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Authcontext } from "../../Provider/Authprovider";

const Register = () => {
  const {creatUser} = useContext(Authcontext)
  const handleRegister =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photoURL = form.get('photoURL');
    const email = form.get('email');
    const password = form.get('password');
    // it will active end of the project
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // if(!passwordRegex.test(password)){
    //   alert('there something wrong')
    //   return
    // }
    console.log(name,photoURL,email,password);

    creatUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      
    })
    .catch(err => {
      console.log(err.message);
      
    })
    
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Enter a photo URL"
              required
            />
          </div>


          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>


          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
