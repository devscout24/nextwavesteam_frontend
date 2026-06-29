import { Link } from "react-router";
import Container from "./container";
import Logo from "./logo";
import { SlSocialInstagram } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";

export default function Footer() {
  const footShop = [
    { name: "Autograph", link: "#" },
    { name: "Jersey", link: "#" },
    { name: "Bat", link: "#" },
    { name: "Ball", link: "#" },
  ];

  const footInfo = [
    { name: "Refund Policy", link: "#" },
    { name: "Returns", link: "#" },
    { name: "Accessibility", link: "#" },
    { name: "Terms & Conditions", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];

  const socialMedia = [
    { icon: <SlSocialInstagram />, link: "#" },
    { icon: <CiTwitter className="size-5" />, link: "#" },
    { icon: <PiYoutubeLogo />, link: "#" },
  ];

  return (
    <footer className="bg-[#E3E4EB] pt-10 md:pt-12 lg:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-4 max-w-[320px] font-inter text-[14px] font-normal leading-5 text-[#5F6275]">
              Official signed cricket memorabilia from India's top players.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-inter text-[14px] font-bold uppercase text-[#1E1E24]">
              Shop
            </h2>

            <ul className="mt-4 space-y-2">
              {footShop.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="font-inter text-[14px] font-normal text-[#5F6275] transition-all duration-300 hover:text-[#5A38F5] hover:tracking-[2px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="font-inter text-[14px] font-bold uppercase text-[#1E1E24]">
              Information
            </h2>

            <ul className="mt-4 space-y-2">
              {footInfo.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="font-inter text-[14px] font-normal text-[#5F6275] transition-all duration-300 hover:text-[#5A38F5] hover:tracking-[2px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-inter text-[14px] font-bold uppercase text-[#1E1E24]">
              Contact
            </h2>

            <Link
              to="mailto:hello@fangram.com"
              className="mt-4 block break-all font-inter text-[14px] font-normal text-[#5F6275] transition-all duration-300 hover:text-[#5A38F5]"
            >
              hello@fangram.com
            </Link>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 text-[#5F6275] transition-all duration-300 hover:border-[#5A38F5] hover:bg-[#5A38F5] hover:text-white"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-primary/20 py-8 md:mt-12">
          <p className="text-center font-inter text-[14px] text-[#5F6275] lg:text-left">
            © 2026 Stardr. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}