import { useContext, useState } from "react";
import { Authcontext } from "../../Provider/Authprovider";

const Myprofile = () => {
    const { user,updateUserData } = useContext(Authcontext)
    const [change,setChange] = useState(user)
    console.log(user);
    const { displayName,
        email,
        photoURL
    } = user;
    const updateData = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const photoURL = formData.get('photoURL');

        console.log(formData,name,photoURL);
        
        updateUserData({displayName:name , photoURL: photoURL})
        .then(() => {
          setChange(change)
        })
        .catch((err) => {
            console.log(err.message);
            
        })
      
    }
    return (
        <div className="flex justify-center items-center  min-h-screen bg-gray-100">
            <div>
                <h1 className="text-2xl mt-2 font-bold text-center text-[#6C1C2E] mb-6">My Informations</h1>
                <div className=" p-4">
                    <div className="card bg-base-100 shadow-xl">
                        {/* User Image */}
                        <figure className="px-10 pt-10">
                            <img
                                src={photoURL}
                                alt={displayName}
                                className="rounded-full w-24 h-24 object-cover"
                            />
                        </figure>
                        {/* User Information */}
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-lg font-semibold">{displayName}</h2>
                            <p className="text-gray-500 text-sm">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-2xl mt-2
                             font-bold text-center text-[#6C1C2E]
                              mb-6">Update Profile</h1>
                    <div className="card p-8 bg-base-100 shadow-xl">
                        <form onSubmit={updateData}>
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

                                />
                            </div>
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
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-[#6C1C2E] text-white rounded-lg hover:bg-[#6C1C2E]"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;