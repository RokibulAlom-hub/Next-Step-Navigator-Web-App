import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink>My Profile</NavLink>
                            <NavLink>About</NavLink>

                        </ul>
                    </div>
                    <a className="font-bold text-xl">NextStep Navigator</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 font-bold menu-horizontal px-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink>My Profile</NavLink>
                        <NavLink>About</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn">Log In</Link >
                </div>

            </div>
        </div>
    );
};

export default Navbar;