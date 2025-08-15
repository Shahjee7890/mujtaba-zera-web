import { useEffect} from "react";
import { Typography } from "../../shared/typography";
import { MdCancel } from "react-icons/md";
import type { SideBarProps } from "../../../types";

// ✅ Define props type

const SideBar = ({ showMenu, setShowMenu }: SideBarProps) => {
  const headerMenuOptions = [
    { id: 1, label: "Home", link: "/#home" },
    { id: 2, label: "Categories", link: "/#categories" },
    { id: 3, label: "Marketplace", link: "/#marketplace" },
    { id: 4, label: "FAQS", link: "/#faqs" },
    { id: 5, label: "Contact", link: "/#contact" },
  ];

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; 
    };
  }, [showMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`flex flex-col pt-3 pb-10 justify-start items-center text-center fixed top-0 right-0 h-full w-[70%] bg-gradient-primary z-50 shadow-2xl transform transition-transform duration-500 ease-in-out
  ${showMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative w-full flex flex-col px-8 py-4 ">
          <div className="flex justify-start items-center">
            <button onClick={() => setShowMenu(false)}>
              <MdCancel className="w-6 h-6 text-white rounded-full absolute top-0 bottom-0 left-3" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center text-center">
              <img
                src="./assets/svgs/logo.svg"
                alt="Logo"
                className="w-[100px]"
              />
            </div>
            <hr className="text-white" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-6 p-6">
            {headerMenuOptions?.map((option) => (
              <a href={option.link} key={option.id}>
                <li className="pb-3 inter" onClick={() => setShowMenu(false)}>
                  <Typography
                    size="lg"
                    className="text-white font-semibold hover:text-secondary-light"
                  >
                    {option.label}
                  </Typography>
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div className="py-10">
          <button className="w-full bg-secondary-light text-secondary-dark py-2 px-6 rounded-full ">
            <Typography size="lg">Download App</Typography>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setShowMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300 ease-in-out
  ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
    </>
  );
};

export default SideBar;
