import { toast } from "react-toastify";
import { Typography } from "../../../shared/typography";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const handleDownload = () => {
    toast.info("This feature is coming soon");
  };
  // ---animation-----
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      id="home"
      className="w-full pt-10 py-5 sm:py-12 md:py-10 xl:py-25 flex items-center justify-center"
    >
      {/* child */}
      <div
        className="max-w-section flex justify-center items-center"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="max-w-content flex flex-col lg:flex-row items-center justify-between gap-10 w-4/5 lg:w-[90%] xl:w-full">
          <div className="w-full lg:w-[70%] xl:w-[40%] flex flex-col justify-center gap-6 text-center lg:text-left">
            {/* Heading */}
            <div className="relative">
              <div className="absolute inset-0 right-0 bottom-0 left-30 top-40 sm:left-40 md:left-70 md:top-50 lg:left-35 lg:top-33 xl:left-88 xl:top-8 flex items-center justify-center w-[120px] h-[153px]">
                <img
                  loading="lazy"
                  src="/assets/images/hero-bg.webp"
                  alt="hero background"
                />
              </div>
              <div className="relative z-10">
                <Typography
                  size="h1"
                  as="h1"
                  className="leading-12 md:leading-18"
                >
                  Empowering Connections,
                  <br />
                  <span className="text-gradient-secondary">
                    Simplifying Lives
                  </span>
                </Typography>
              </div>
            </div>
            {/* Paragraph */}
            <div>
              <Typography size="lg" className="inter text-slate-lighter">
                From finding jobs to selling goods, hosting events to building
                your community — Zera is your one-stop solution for seamless
                transactions and meaningful connections.
              </Typography>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <button onClick={handleDownload}>
                <img
                  src="/assets/svgs/googleplay.svg"
                  alt="Google Play"
                  className="w-36 sm:w-40 md:w-44 lg:w-40 xl:w-44 2xl:w-48 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
                />
              </button>
              <button onClick={handleDownload}>
                <img
                  src="/assets/svgs/appstore.svg"
                  alt="App Store"
                  className="w-36 sm:w-40 md:w-44 lg:w-40 xl:w-44 2xl:w-48 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
                />
              </button>
            </div>
          </div>
          {/* right side*/}
          <div className="shadow-2xl rounded-full">
            <img
              src="/assets/images/hero-banner.webp"
              alt="Hero Banner"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
