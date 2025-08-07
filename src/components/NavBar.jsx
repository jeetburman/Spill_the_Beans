import Logo from "../assets/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
    {
        id : 1,
        name : "Home",
        link : "/#",
    },
    {
        id : 2,
        name : "Services",
        link : "/#services",
    },
    {
        id : 3,
        name : "About",
        link : "/#about",
    }
]

const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
            <div className="container py-2">
                <div className="flex justify-between items-center gap-4">
                    {/* LOGO + BRAND */}
                    <a
                        href="#"
                        className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
                    >
                        <img src={Logo} alt="Logo" className="w-14" />
                        Spill The Beans
                    </a>

                    {/* NAV MENU */}
                    <ul className="hidden sm:flex items-center gap-4">
                        {Menus.map((data, index) => (
                            <li key={index}>
                                <a
                                    href={data.link}
                                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                        <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                            Order <FaCoffee className="text-xl cursor-pointer" />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default NavBar