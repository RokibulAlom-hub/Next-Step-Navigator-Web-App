import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const DetailsPage = () => {
    const { singleData } = useLoaderData();
    const [feedback, setFeedback] = useState([])
    const {
        id,
        image,
        serviceName,
        category,
        description,
        pricing,
        duration,
        counselor,
        rating,
    } = singleData;
    const getComment = (e) => {
        e.preventDefault();
        const messeage = e.target.name.value;
        const allmessage = [...feedback, messeage];
        setFeedback(allmessage)
    }
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative">
                    <img
                        src={image}
                        alt={serviceName}
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-semibold uppercase">
                        {category}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    {/* Service Title */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{serviceName}</h1>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6">{description}</p>

                    {/* Pricing and Duration */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-gray-800 font-semibold">Pricing:</p>
                            <p className="text-green-600 font-bold">${pricing}</p>
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold">Duration:</p>
                            <p className="text-gray-600">{duration}</p>
                        </div>
                    </div>

                    {/* Counselor Information */}
                    <div className="mb-6">
                        <p className="text-gray-800 font-semibold">Counselor:</p>
                        <p className="text-blue-600 font-bold">{counselor}</p>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center mb-6">
                        <p className="text-gray-800 font-semibold mr-2">Rating:</p>
                        <ReactStars
                            count={5}
                            value={rating}
                            size={24}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                        />
                        <p className="ml-2 text-gray-600">({rating})</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl mb-2">Feedbacks</h1>
                            {
                                <h6 className="border border-green-300 p-4">{feedback}</h6>
                            }
                            <br />
                    </div>
                    {/* CTA Buttons */}
                    <div className="">
                        <form onSubmit={getComment}>
                            <div>
                                <div className=" py-2 bg-white rounded-t-lg  dark:bg-gray-800">
                                    <label for="comment" className="sr-only">Your comment</label>
                                    <textarea type="text" name="name" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border border-green-400 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..."></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Post comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
