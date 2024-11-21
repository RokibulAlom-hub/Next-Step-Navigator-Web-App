import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Authcontext } from "../../Provider/Authprovider";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false)
  const { creatUser, updateUserData, setUser, googlelogin } = useContext(Authcontext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photoURL = form.get('photoURL');
    const email = form.get('email');
    const password = form.get('password');
    // it will active end of the project
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // if(!passwordRegex.test(password)){
    //   toast('password invalid')
    //   return
    // }

    creatUser(name, photoURL, email, password)
      .then(result => {
        const user = result.user;
        toast.success('Successfully register')
        updateUserData({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ displayName: name, photoURL: photoURL, ...user })
            navigate("/")
          })
          .catch((err) => {
            toast.error(err.message);

          })
      })
      .catch(err => {
        toast.error(err.message);

      })

  }
  const handlegoggle = () => {
    googlelogin()
      .then((result) => {
        // console.log(result.user);

      })
      .catch((err) => console.log(err.message)
      )
  }
  // its for scrolling 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full my-4 max-w-md bg-white rounded-lg shadow-md p-6">
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center text-[#6C1C2E] mb-6">
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"

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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter a photo URL"

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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"

            />
          </div>


          {/* Password Input */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showpass ? "text" : "password"}
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"

            />
            <div>
              <div
                onClick={() => setShowpass(!showpass)}
                className="btn-xs bg-base-200 flex items-center rounded-md absolute right-2 bottom-3">
                {
                  showpass ? <FaEyeSlash /> : <FaEye />
                }
              </div>
            </div>
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
        {/* google log in */}
        <div className="mt-6">
          <button
            onClick={handlegoggle}
            className="w-full px-4 py-2 bg-gray-500 text-white 
              rounded-lg flex items-center justify-center gap-2"
          >
            <BsGoogle />
            Google
          </button>
        </div>
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
