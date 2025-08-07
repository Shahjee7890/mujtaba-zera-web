import React from "react";
import { Typography } from "../../shared/typography";
import type { CategoriesLayoutProps } from "../../../types";

const CategoriesLayout = ({ data }: CategoriesLayoutProps) => {
  return (
    <section className="flex justify-center items-center text-center md:text-start relative w-full pt-5 sm:py-10 md:py-10 xl:py-2">
      {/* children */}
      <div className="w-full max-w-[964px] bg-grey-lighter rounded-t-[26px] sm:rounded-[26px] pt-10 px-13">
        {/* image and content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-0">
          {/* content */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            {/* heading */}
            <div>
              <Typography
                size="h3"
                as="h3"
                className="text-gradient-secondary flex flex-wrap leading-10"
              >
                {data?.heading}
              </Typography>
            </div>
            {/* paragraph */}
            <div>
              <Typography
                size="lg"
                className="inter flex flex-wrap text-slate-light leading-5"
              >
                {data?.paragraph}
              </Typography>
            </div>
          </div>
          {/* image */}
          <div className="w-full h-full md:w-1/2 flex md:items-end md:justify-end">
            <img src={data?.image} alt="items image" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-5 sm:left-0 sm:top-24 md:left-0 md:top-10 xl:left-0 xl:top-2">
        <img
          loading="lazy"
          src="/assets/images/categories.webp"
          alt="categories"
        />
      </div>
    </section>
  );
};

export default React.memo(CategoriesLayout);
