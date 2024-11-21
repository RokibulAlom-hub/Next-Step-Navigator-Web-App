

const Feedcard = ({ data }) => {
    const { name, image, opinions } = data;
    return (
        <div>
            <div
                className="text-center max-w-sm border border-[#6C1C2E] bg-white shadow-lg rounded-lg p-5"
            >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="mt-5  text-center text-gray-600 italic">{opinions}</p>
                <h3 className="mt-3 text-lg font-bold">{name}</h3>
            </div>
        </div>
    );
};

export default Feedcard;