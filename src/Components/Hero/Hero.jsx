import CountUp from "react-countup";

const Hero = () => {
    return (
        <div className="flex   flex-col text-center items-center justify-center py-20 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Welcome to BOLGAA
            </h2>
            <p className="text-xl w-4/5 leading-relaxed text-center text-gray-700 mb-10">
    Step into the Diverse World of Blogging: Where Voices Echo, Insights Inspire, and Communities Thrive in the Realm of Endless Stories
</p>


            <div className="flex items-center space-x-4 shadow-md p-4 bg-white rounded-lg">
                <input
                    type="text"
                    placeholder="Type your email here"
                    className="input input-bordered input-primary w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="btn bg-indigo-800 hover:bg-indigo-700 text-white">
                    Subscribe
                </button>
            </div>
   
        </div>
        
    );
};

export default Hero;
