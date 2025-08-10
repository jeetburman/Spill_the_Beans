import { IoFastFood } from 'react-icons/io5';
import banner from '../assets/banner-img.png';
import BgImg from '../assets/bg-wallpaper.webp';
import { GrSecure } from 'react-icons/gr';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
    backgroundImage : `url(${BgImg})`,
    backgroundColor : "#270c03",
    backgroundPosition : 'center',
    backgroundgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}

const Banner = ()=>{
    return(
        <>
        <span id='about'></span>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image Section */}
                        <div>
                            <img src={banner} alt="" className='max-w-[430px] w-full mx-auto spin drop-shadow-xl'/>
                        </div>
                        {/* Textual content */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 className='font-cursive text-3xl sm:text-4xl font-bold text-black'>Premium Blend of Coffee</h1>
                            <p className='text-sm text-gray-300 trancking-wide leading-5'>Fuel your code with passion, patience, and coffee — every bug you squash brings you closer to brilliance</p>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-yellow-400 rounded-full p-3 shadow-md flex items-center justify-center">
                                        <GrSecure className="text-black text-2xl" />
                                        </div>
                                        <span>Premium Coffee</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-pink-300 rounded-full p-3 shadow-md flex items-center justify-center">
                                        <IoFastFood className="text-black text-2xl" />
                                        </div>
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-orange-300 rounded-full p-3 shadow-md flex items-center justify-center">
                                        <GiFoodTruck className="text-black text-2xl" />
                                        </div>
                                        <span>Cold Coffee</span>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Banner;