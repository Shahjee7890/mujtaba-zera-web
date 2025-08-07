import type { FC } from "react";
import { Typography } from "../../../shared/typography";

interface SubscribProps {
  styling?: string;
}

const SubscribeNewsLetter: FC<SubscribProps> = ({ styling }) => {
  return (
    <section className="bg-[url('/assets/images/shape.webp')] bg-cover bg-center h-[170px] sm:h-[190px] md:h-[210px] xl:h-[250px] w-full pb-4 pt-10 sm:pt-10 md:pt-15 lg:pt-25">
      <div className="max-w-section w-[95%] flex flex-col items-center justify-end">
        <div className="rounded-[14px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] w-[90%] lg:max-w-[90%] flex flex-col lg:flex-row items-center sm:items-center sm:justify-between gap-3 sm:gap-6 md:gap-4 px-6 sm:px-1 lg:px-10 py-5 md:py-7 lg:py-12">
          <div>
            <Typography
              size="h2"
              as="h2"
              className="!text-[20px] sm:!text-[30px] lg:!text-[30px] xl:!text-[38px] white"
            >
              Subscribe Newsletters
            </Typography>
          </div>
          <div className="flex sm:max-w-[510px] w-full flex-col sm:flex-row bg-grey-lighter items-center justify-center rounded-full py-4 pl-6 sm:pr-2 sm:py-2">
            <input
              type="email"
              // maxlength="50"
              placeholder="Enter your email"
              className={`inter outline-0 border-0 placeholder-[rgba(43,61,81,0.5)] text-black ${styling}`}
            />
            <button className="sm:block hidden bg-gradient-primary px-2 py-4 sm:px-7 lg:py-4 lg:px-10 rounded-full cursor-pointer">
              <Typography size="lg" className="text-white whitespace-nowrap">
                Subscribe Now
              </Typography>
            </button>
          </div>
          <button className="w-full sm:max-w-[240px] sm:hidden block bg-gradient-primary px-2 py-4 sm:px-7 lg:py-4 lg:px-10 rounded-full cursor-pointer">
            <Typography size="lg" className="text-white whitespace-nowrap">
              Subscribe Now
            </Typography>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
