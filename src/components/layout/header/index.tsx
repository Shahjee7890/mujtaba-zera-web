import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { Typography } from "../../shared/typography";
import SideBar from "../../shared/side-bar";
import { toast } from "react-toastify";

const Header = () => {
  const headerMenuOptions = [
    { id: 1, label: "Home", link: "/#home" },
    { id: 2, label: "Categories", link: "/#categories" },
    { id: 3, label: "Marketplace", link: "/#marketplace" },
    { id: 4, label: "FAQS", link: "/#faqs" },
    { id: 5, label: "Contact", link: "/#contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleDownload =()=>{
    toast.info('Coming soon!')
  }

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center px-3 sm:px-0 pt-2">
        <div className="max-w-section flex items-center justify-between px-6 py-4 bg-gradient-primary w-[98%] rounded-[20px] border-b-secondary-light border-b-8">
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
          <div className="hidden md:flex items-center justify-between inter">
            <ul className="flex items-center justify-center gap-9 md:gap-5 lg:gap-9 2xl:gap-10">
              {headerMenuOptions?.map((option) => (
                <a href={option.link} key={option.id}>
                  <li className="cursor-pointer">
                    <Typography
                      size="lg"
                      className="text-white font-semibold hover:text-secondary-light"
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
              className="hidden md:flex font-bold bg-secondary-light text-primary py-2 px-4 md:py-2 md:px-4 lg:py-3 lg:px-8 rounded-[20px] cursor-pointer"
            >
              Download App
            </Typography>
          </button>

          {/* hamburger icon for mobile */}
          <div className="flex md:hidden">
            <button onClick={() => setShowMenu(true)}>
              <RxHamburgerMenu className="text-white w-[2rem] h-[2rem]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {showMenu && <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
