// why choose us section component for the Zera websiteimport React from "react";
import { useEffect } from "react";
import { MarketplaceOffers } from "../../../../data";
import { Typography } from "../../../shared/typography";
import Aos from "aos";
import "aos/dist/aos.css"

const WhyChooseUs = () => {
  // ---animation-----
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="w-full flex items-center justify-center bg-off-white-color pb-8 pt-5 sm:py-24 md:py-10 xl:py-22">
      {/* child */}
      <div
        className="max-w-section flex items-center justify-center"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="max-w-conten flex flex-col w-full items-center justify-center text-center px-4 md:px-17 lg:px-13 gap-10">
          {/* heading */}
          <div className="pt-5 sm:pt-0">
            <Typography size="h2" as="h2">
              Why people love{" "}
              <span className="text-gradient-secondary ">Zera Marketplace</span>
            </Typography>
          </div>
          {/* image */}
          <div>
            <img
              src="/assets/images/buy-banner.webp"
              alt="Marketplace banner"
            />
          </div>
          {/* buy marketplace offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20 xl:gap-31">
            {MarketplaceOffers?.map((offer, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center max-w-[310px]"
              >
                <img
                  loading="lazy"
                  src={offer.logo}
                  alt="svgs"
                  className="mb-4"
                />
                <h2 className="text-[1.375rem] mb-2">{offer.heading}</h2>
                <Typography
                  size="lg"
                  className="inter flex flex-wrap justify-center text-center text-slate-light"
                >
                  {offer.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
