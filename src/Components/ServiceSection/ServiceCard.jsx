import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, image, serviceName, description, category, pricing, counselor } = service;
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <img
                src={image}
                alt={serviceName}
                className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-4">
                {/* Service Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {serviceName}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {description}
                </p>

                {/* Category and Pricing */}
                <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {category}
                    </span>
                    <span className="text-gray-800 font-bold">${pricing}</span>
                </div>

                {/* Counselor */}
                <p className="text-gray-500 font-bold mb-4">Counselor: ( {counselor} )</p>

                {/* Learn More Button */}
                <div className="card-actions">
                    <Link
                        to={`/details/${id}`}
                        className="p-2 rounded-md text-sm bg-[#6C1C2E] text-white hover:bg-[#1A222B] transition duration-300"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
