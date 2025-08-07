// why choose us section component for the Zera websiteimport React from "react";
import { MarketplaceOffers } from "../../../../data";
import { Typography } from "../../../shared/typography";

const WhyChooseUs = () => {
  return (
    <section className="w-full flex items-center justify-center bg-off-white-color pb-8 pt-5 sm:py-24 md:py-10 xl:py-20">
      {/* child */}
      <div className="max-w-section flex flex-col w-full text-center items-center justify-center px-4 gap-10">
        {/* heading */}
        <div className="pt-5 sm:pt-0">
          <Typography size="h2" as="h2">
            Why people love{" "}
            <span className="text-gradient-secondary ">Zera Marketplace</span>
          </Typography>
        </div>
        {/* image */}
        <div>
          <img src="/assets/images/buy-banner.webp" alt="Marketplace banner" />
        </div>
        {/* buy marketplace offer */}
        <div className="w-[87%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-20 xl:gap-24 2xl:gap-28">
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
    </section>
  );
};

export default WhyChooseUs;
