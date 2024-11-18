import career from "../../assets/career-crossroads.jpg"
const Commitment = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:`url(${career})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">Everyone deserves a rewarding career!</h1>
                        <p className="mb-5">
                        Achieving your career goals can lead to positive changes in all areas of your life. Coaching empowers and educates you on how to take charge of your career and achieve the success you’ve dreamed of.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commitment;