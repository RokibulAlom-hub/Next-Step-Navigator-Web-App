import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";

const Navbar = () => {
    const {user,userLogout} = useContext(Authcontext)
    // console.log(user);
    return (
        <div className="bg-[#6C1C2E] text-white">
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-red-500 bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink>My Profile</NavLink>
                            <NavLink to="/About">About</NavLink>

                        </ul>
                    </div>
                    <a className="font-bold text-xl">NextStep Navigator</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 font-bold menu-horizontal px-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink>My Profile</NavLink>
                        <NavLink to="/About">About</NavLink>
                        {
                            user && <div>
                                <NavLink to="/PersonalityTest">PersonalityTest</NavLink>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <div className="flex items-center md:gap-3">
                            <div className="text-sm">{user?.displayName}</div>
                            <div>
                                <img className="w-16 hidden md:block h-14 rounded-lg" 
                                src={user?.photoURL} alt="" />
                            </div>
                            <Link onClick={userLogout} to='/login' className="btn">Log Out</Link >
                        </div>
                        :<Link to='/login' className="btn">Log In</Link >
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;