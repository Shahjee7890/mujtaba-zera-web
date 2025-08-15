import { NavLink } from "react-router-dom";
import { Typography } from "../../shared/typography";

const Footer = () => {
  const footerMenuOptions = [
    { id: 1, label: "Home", link: "/#home" },
    { id: 2, label: "Categories", link: "/#categories" },
    { id: 3, label: "Marketplace", link: "/#marketplace" },
    { id: 4, label: "FAQS", link: "/#faqs" },
    { id: 5, label: "Contact", link: "/#contact" },
  ];

  const mediaIcons = [
    { id: 1, src: "/assets/svgs/instagram.svg", alt: "Instagram" },
    { id: 2, src: "/assets/svgs/facebook.svg", alt: "Facebook" },
    { id: 3, src: "/assets/svgs/twitter.svg", alt: "Twitter" },
  ];
  return (
    <footer className="w-full pt-16 sm:pt-16 lg:pt-20 md:pb-5 xl:pt-10 px-5">
      {/* child */}
      <div className="max-w-section">
        <div className="max-w-content gap-5 sm:gap-2.5 flex flex-col">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-5 sm:gap-8 sm:py-4">
            {/* footer menu option  */}
            <div className="inter">
              <ul className="flex flex-row items-start sm:items-center justify-center gap-3 sm:gap-7 flex-wrap">
                {footerMenuOptions?.map((option) => (
                  <a href={option.link} key={option.id}>
                    <li className="cursor-pointer">
                      <Typography
                        size="md"
                        className="text-slate-light transition-all duration-300 ease-in-out hover:text-secondary-dark hover:-translate-y-0.5"
                      >
                        {option?.label}
                      </Typography>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
            {/* social media  */}
            <div className="flex items-center justify-center gap-4">
              {mediaIcons.map((icon) => (
                <div
                  key={icon.id}
                  className="cursor-pointer bg-secondary-light p-2 rounded-[9px] flex items-center justify-center w-[40px] h-[40px] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-95"
                >
                  <a href="/">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-4 h-4 transition-transform duration-300 ease-in-out hover:rotate-6"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <hr className="text-[rgba(43,61,81,0.2)]" />
          <div className="flex gap-4 sm:gap-0 flex-col-reverse sm:flex-row items-center justify-between pb-4 sm:py-4 bg-white w-full">
            {/* copyright */}
            <div>
              <Typography
                size="md"
                className="text-slate-light inter flex flex-wrap items-center justify-center"
              >
                Copyright © 2025 Zera . All rights reserved
              </Typography>
            </div>
            <div className="order-1 sm:order-none">
              <NavLink to={"/"}>
                <div>
                  <img
                    src="./assets/svgs/logo-footer.svg"
                    alt="Zera Logo"
                    className="w-[78px] h-[47px]"
                  />
                </div>
              </NavLink>
            </div>
            {/* footer logo */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              {/* terms and privacy policy */}
              <div className="flex items-center gap-4 inter">
                <NavLink to={"/terms-and-conditions"}>
                  <Typography size="md" className="text-slate-light transition-all duration-300 ease-in-out hover:text-secondary-dark hover:-translate-y-0.5">
                    Terms of Service
                  </Typography>
                </NavLink>
                <NavLink to={"/privacy-policy"}>
                  <Typography size="md" className="text-slate-light transition-all duration-300 ease-in-out hover:text-secondary-dark hover:-translate-y-0.5">
                    Privacy Policy
                  </Typography>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
