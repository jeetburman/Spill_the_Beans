import HeroImage from '../assets/hero-img.png';

const Home = () => {
    return (
        <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                    
                    {/* Text Content */}
                    <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            We serve the richest <span className="text-primary font-cursive">Coffee</span> in the city
                        </h1>
                        <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-6 py-2 text-white hover:scale-105 duration-200 w-fit">
                            Coffee & Code
                        </button>
                    </div>

                    {/* Image + Tags */}
                    <div className="order-1 sm:order-2 flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                            <img
                                src={HeroImage}
                                alt=""
                                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
                            />
                            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
                                <h1>Hey Coder</h1>
                            </div>
                        </div>
                        {/* Bestes Kaffee below image */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl">
                            <h1>Bestes Kaffee</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
