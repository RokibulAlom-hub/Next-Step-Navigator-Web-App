import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import "./Navbar.css"
const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext)

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
                            className="menu menu-sm dropdown-content text-white bg-[#6C1C2E] space-y-3  z-[100] mt-3 w-52 p-4 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/About">About</NavLink>
                            {
                                user && <div className="space-y-2 flex flex-col">
                                    <NavLink to='/myprofile'>My Profile</NavLink>
                                    <NavLink to="/PersonalityTest">PersonalityTest</NavLink>
                                </div>
                            }

                        </ul>
                    </div>
                    <a className="font-bold  md:text-xl">NextStep Navigator</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-4 font-bold menu-horizontal px-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        {
                            user && <div className="space-x-5 ">
                                <NavLink to='/myprofile'>My Profile</NavLink>
                                <NavLink to="/PersonalityTest">PersonalityTest</NavLink>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* note here that in smaller device the image and name isnt showing for responsive ness */}
                    {
                        user ?
                            <div className="flex items-center md:gap-3">
                                <div>
                                    <img className="w-12 hidden md:block h-12 rounded-lg"
                                        src={user?.photoURL} alt="" title={user?.displayName} />
                                </div>
                                <Link onClick={userLogout} to='/login' className="btn">Log Out</Link >
                            </div>
                            : <Link to='/login' className="btn">Log In</Link >
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;