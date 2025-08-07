// import uniImage from "../assets/hero-img.png";
import espresso from "../assets/espress.png";
import americano from '../assets/america.png';
import cappuccino from '../assets/capu.png';
import cold_brew from '../assets/cold.png';
import flat_white from '../assets/flatty.png';
import latte from '../assets/latte.png';
import macchiato from '../assets/macchiato.png';
import mocha from '../assets/mocha.png';
import turkish from '../assets/turkish_kaffee.png';

const ServicesData = [
  {
    id: 1,
    img: espresso,
    name: "Espresso",
    description: "Rich, bold, and full of flavor. Our espresso is crafted from premium beans and delivers a strong, aromatic shot to kickstart your day."
  },
  {
    id: 2,
    img: cappuccino,
    name: "Cappuccino",
    description: "A perfect blend of espresso, steamed milk, and foam. Smooth, creamy, and comforting—ideal for your cozy coffee moments."
  },
  {
    id: 3,
    img: macchiato,
    name: "Macchiato",
    description: "Espresso with just a touch of milk foam. Strong in taste but balanced by a hint of creaminess."
  },
  {
    id: 4,
    img: latte,
    name: "Latte",
    description: "Smooth and creamy with a rich layer of steamed milk over espresso. A gentle classic loved everywhere."
  },
  {
    id: 5,
    img: mocha,
    name: "Mocha",
    description: "A chocolatey twist on coffee. Espresso blended with cocoa and milk, topped with whipped cream or foam."
  },
  {
    id: 6,
    img: americano,
    name: "Americano",
    description: "Light yet robust. Hot water mixed with espresso for a smoother, milder taste. A classic choice for those who enjoy a longer coffee sip."
  },
  {
    id: 7,
    img: flat_white,
    name: "Flat White",
    description: "A velvety blend of espresso and micro-foamed milk. Less frothy than a latte but more intense."
  },
  {
    id: 8,
    img: cold_brew,
    name: "Cold Brew",
    description: "Brewed cold for 12–24 hours. Smooth, refreshing, and less acidic—perfect for hot days."
  },
  {
    id: 9,
    img: turkish,
    name: "Turkish Coffee",
    description: "Rich, unfiltered coffee brewed slowly in a pot (cezve). Known for its strong flavor and thick texture."
  }
];


const Services = ()=>{
    return(
        <>
            <span id="services"></span>
            <div className="py-10">
                <div className="container">
                    {/* Header Title */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee for you</h1>
                    </div>
                    {/* Services Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {
                            ServicesData.map((data,index)=>{
                                return (
                                    <div data-aos="fadeup" data-aos-delay={data.aosDelay} key={index} className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                                        <div>
                                            <img src={data.img} alt="" className="max-w-[200px] block mx-auto transform -translate-y-8 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
                                        </div>
                                        {/* Text content of cards */}
                                        <div className="p-4 text-center">
                                            <h2 className="text-xl font-bold font-cursive">{data.name}</h2>
                                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services