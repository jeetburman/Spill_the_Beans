import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import footerBackground from '../assets/coffee-footer.jpg';

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#" },
  { title: "Menu", link: "/#" },
  { title: "Blog", link: "/#" },
];

const bgImage = {
  backgroundImage: `url(${footerBackground})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', // fixed typo
  minHeight: '400px',
  width: '100%',
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4 text-left">
            <a
              href="#"
              className="font-semibold tracking-wide text-4xl font-cursive block"
            >
              Spill the Beans
            </a>
            <p className="pt-4 max-w-sm">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 duration-200"
            >
              Visit Youtube Channel
            </a>
          </div>

          {/* Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Kolkata, West Bengal India</p>
                <p>+91-6969699669</p>
                {/* Social Links */}
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
