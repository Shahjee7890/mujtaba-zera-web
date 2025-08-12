import { Typography } from "../../components/shared/typography";
import { NavLink } from "react-router-dom";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center max-w-main">
        <section className="flex flex-col-reverse md:flex-col lg:flex-row items-center w-[100%] px-5 md:px-14 lg:px-20 pt-10 lg:pt-10 pb-20 gap-10">
          {/* content and button */}
          <div className="flex flex-col gap-5 lg:gap-10 items-start w-full lg:w-[40]">
            <Typography
              size="h2"
              as="h2"
              className=" leading-10 md:leading-14 text-primary"
            >
              Uh-Oh, This Page Has <br /> Magically Disappeared <br /> Or Never
              Existed.
            </Typography>
            <div className="flex items-center justify-center mt-4">
              <NavLink to={"/"}>
                <button
                  type="submit"
                  className="relative whitespace-nowrap overflow-hidden group py-4 px-20 lg:px-15 rounded-full cursor-pointer transition-all duration-300 shadow-lg bg-gradient-to-r from-green-500 to-green-800 hover:bg-[linear-gradient(95deg,_#bedd60_-97.99%,_#228f53_80.7%) transform scale-1]"
                >
                  <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                  <Typography
                    size="lg"
                    className="text-white font-medium relative z-10"
                  >
                    Back to home
                  </Typography>
                </button>
              </NavLink>
            </div>
          </div>
          <div className=" w-full lg:w-[90%]">
            <img
              loading="lazy"
              src="/assets/images/error-banner.webp"
              alt="404"
              className="w-full h-full"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
