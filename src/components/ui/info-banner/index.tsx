import type { InfoBannerLayoutProps } from "../../../types";
import { Typography } from "../../shared/typography";

const InfoBanner = ({ title, image }: InfoBannerLayoutProps) => {
  return (
    <section className="flex justify-center items-center text-center md:text-start w-full py-5 sm:py-24 md:py-10 xl:py-2">
      {/* children */}
      <div className="w-full relative bg-gradient-primary rounded-[26px] pt-10 px-13">
        {/* image and content */}
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between gap-7">
          {/* content */}
          <div className="w-full lg:w-[70%] flex justify-center items-center">
            {/* heading */}
            <Typography
              size="h1"
              as="h1"
              className="text-white flex leading-12 md:leading-17"
            >
              {title}
            </Typography>
          </div>
          {/* image */}
          <div className="w-full lg:w-[40%] flex justify-end items-center">
            <img
              src={image}
              alt="background image"
              className="w-full h-full lg:w-[231px] lg:h-[305px]"
            />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-5 sm:left-0 sm:top-24 md:left-0 md:top-10 xl:left-0 xl:top-2">
          <img
            loading="lazy"
            src="/assets/images/categories.webp"
            alt="categories"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
