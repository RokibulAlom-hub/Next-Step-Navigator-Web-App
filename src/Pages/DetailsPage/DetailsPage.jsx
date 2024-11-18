import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const DetailsPage = () => {
    const { singleData } = useLoaderData();
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

                    {/* CTA Buttons */}
                    <div className="flex justify-between">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                            Book Now
                        </button>
                        <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
                            Back to Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
