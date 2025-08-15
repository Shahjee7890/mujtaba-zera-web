import { useEffect } from "react";
import { Typography } from "../../../shared/typography";
import BuildForImpact from "../../../ui/build-for-impect";
import UserSlider from "../../../ui/user-slider";
import UserReviews from "../user-reviews";
import Aos from "aos";
import "aos/dist/aos.css";

const SellOnMarketplace = () => {
  // ---animation-----
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      id="marketplace"
      className="w-full flex flex-col text-center items-center justify-center sm:px-5 lg:px-0 py-6 sm:py-24 md:py-10 xl:py-20 bg-off-white-color"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
    >
      {/* child */}
      <div className="justify-center items-center px-5 sm:px-0 w-full">
        {/* content */}
        <div className="max-w- flex flex-col gap-5 lg:gap-10 w-full">
          <div className="flex flex-col flex-wrap w-full">
            {/* heading */}
            <div className="max-w-content">
              <Typography
                size="h1"
                as="h1"
                className=" leading-12 md:leading-17"
              >
                <span className="text-gradient-secondary">Selling</span>{" "}
                <span className="!font-normal gilroy-light">
                  on <br />
                  Zera Marketplace
                </span>
              </Typography>
            </div>
            {/* description */}
            <div>
              <Typography size="xl" className="inter">
                Easily sell new or pre-loved items locally or have them shipped
                nationwide.
              </Typography>
            </div>
          </div>
          {/* image */}
          <div className="w-full flex px-9 xl:px-0 max-w-content">
            <img
              loading="lazy"
              src="/assets/images/sell-bunner.webp"
              alt="Sell Banner"
            />
          </div>
          <div className="w-full ">
            <BuildForImpact />
          </div>
          <div>
            <UserReviews />
          </div>
        </div>
      </div>
      {/* cards parent */}
      <div className="w-full overflow-x-hidden">
        <UserSlider />
      </div>
    </section>
  );
};

export default SellOnMarketplace;
