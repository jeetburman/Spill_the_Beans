import Slider from 'react-slick';
import cold from '../src/assets/latte.png';
const coffeeFeedback = [
  {
    id: 1,
    name: "Aarav Sharma",
    feedback: "The espresso was strong and aromatic, just the way I like it.",
    img: cold
  },
  {
    id: 2,
    name: "Emily Johnson",
    feedback: "Loved the cappuccino — creamy with the perfect foam on top.",
    img: cold
  },
  {
    id: 3,
    name: "Rohan Mehta",
    feedback: "Latte was smooth and not overly sweet. Would order again!",
    img: cold
  },
  {
    id: 4,
    name: "Sophia Williams",
    feedback: "Americano was clean and refreshing, perfect for the afternoon.",
    img: cold
  },
  {
    id: 5,
    name: "Karan Gupta",
    feedback: "Mocha had the perfect balance of coffee and chocolate.",
    img: cold
  },
  {
    id: 6,
    name: "Isabella Brown",
    feedback: "Cold brew was refreshing and smooth, great for hot days.",
    img: cold
  }
];

const Testimonial = ()=>{
    const settings = {
        dots : true,
        arrows : false,
        infinte : true,
        speed : 500,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 2000,
        cssEase : 'linear',
        pauseOnHover : true,
        pauseOnFocus : true,
        responsive : [
            {
                breakpoint : 10000,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 1,
                    infinite : true
                }
            },{
                breakpoint : 1024,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    initialSlide : 2
                }
            },{
                breakpoint : 640,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                }
            }
        ]
    }
    return(
        <>
            <div className="py-14 mb-10">
                <div className="container">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold font-cursive text-gray-800">Testimonials</h1>
                    </div>
                    {/* Card section */}
                    <Slider {...settings}>
                        {coffeeFeedback.map((data,index)=>{
                            return(
                                <div className="my-6" key={data.id}>
                                    <div className='fle flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                        {/* image section */}
                                        <div className='mb-4'>
                                            <img src={data.img} className='rounded-full w-20 h-20' alt="" />
                                        </div>
                                        {/* content section */}
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='space-y-3'>
                                                <p className='text-xs text-gray-500'>{data.feedback}</p>
                                                <h1 className='text-xl font-bold text-black/70 font-cursive'>{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}


export default Testimonial