import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "../../shared/typography";
import SideBar from "../../shared/side-bar";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const headerMenuOptions = [
    { id: 1, label: "Home", link: "/#home" },
    { id: 2, label: "Categories", link: "/#categories" },
    { id: 3, label: "Marketplace", link: "/#marketplace" },
    { id: 4, label: "FAQS", link: "/#faqs" },
    { id: 5, label: "Contact", link: "/#contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleDownload = () => {
    toast.info("Coming soon!");
  };

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center px-4 lg:px-3 pt-2">
        <div className="max-w-section flex items-center justify-between px-6 py-4 bg-gradient-primary w-full rounded-[20px] border-b-secondary-light border-b-8">
          {/* logo */}
          <div className="w-[20%] sm:w-[15%] md:w-[17%] lg:w-[18%] xl:w-[10%] cursor-pointer">
            <NavLink to={"/"}>
              <img
                src="/assets/svgs/logo.svg"
                alt="Zera Logo"
                className="w-[80px]"
              />
            </NavLink>
          </div>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center justify-between inter">
            <ul className="flex items-center justify-center gap-9 md:gap-5 lg:gap-9 2xl:gap-10">
              {headerMenuOptions?.map((option) => (
                <a href={option.link} key={option.id}>
                  <li className="cursor-pointer">
                    <Typography
                      size="lg"
                      className="text-white font-semibold transition-all duration-300 ease-in-out hover:text-secondary-light hover:-translate-y-0.5"
                    >
                      {option?.label}
                    </Typography>
                  </li>
                </a>
              ))}
            </ul>
          </div>
          {/* desktop button */}
          <button onClick={handleDownload}>
            <Typography
              size="lg"
              className="hidden lg:flex font-medium bg-secondary-light text-secondary-dark py-2 px-4 md:py-2 md:px-4 lg:py-3 lg:px-8 rounded-[26px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Download App
            </Typography>
          </button>

          {/* hamburger icon for mobile */}
          <div className="flex lg:hidden">
            <button onClick={() => setShowMenu(true)}>
              <RxHamburgerMenu className="text-white w-[2rem] h-[2rem]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Header;
