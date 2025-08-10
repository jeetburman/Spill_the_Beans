import appStoreImg from '../assets/app_store.png';
import playStoreImg from '../assets/play_store.png';
import coffeeBeans from '../assets/coffee-beans-bg.png';


const bgStyle = {
    backgroundImage : `url(${coffeeBeans})`,
    backgroundPosition : "center",
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    height : '100%',
    width : '100%'
};

const AppStore = ()=>{
    return(
        <>
            <div style={bgStyle} className='py-14'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='space-y-6 max-w-xl mx-auto'>
                            {/* text-content */}
                            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90'>Spill the Beans is available for Andriod & IOS</h1>
                            {/* logo content */}
                            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                                <a href="">
                                    <img src={appStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                                <a href="">
                                    <img src={playStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default AppStore