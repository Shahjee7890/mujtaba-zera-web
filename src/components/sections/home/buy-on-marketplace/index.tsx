import { useEffect } from "react";
import { featurePoint } from "../../../../data";
import { Typography } from "../../../shared/typography";
import Aos from "aos";
import "aos/dist/aos.css";

const BuyOnMarketplace = () => {
  // ---animation-----
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section
      className="w-full flex flex-col gap-10 lg:gap-0 items-center justify-center lg:flex-row bg-gradient-primary py-10 lg:py-30 overflow-hidden"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
    >
      <div className="max-w-section">
        {/* content */}
        <div className="text-white flex flex-col flex-wrap gap-10 px-5 xl:px-0 w-full max-w-[572px]">
          {/* heading and description */}
          <div>
            <Typography size="h2" as="h2">
              Buying on Zera Marketplace
            </Typography>
            <Typography size="xl" className="inter font-[600]">
              Discover unique items, from home decor to trendy fashion. You
              never know what you’ll find and fall in love with thousands of
              items from your local neighbourhood.
            </Typography>
          </div>
          <div className="flex flex-col px-2">
            <Typography size="h5" as="h5">
              Features
            </Typography>
            {featurePoint?.map((point) => (
              <ol key={point.id} className="list-disc px-4">
                <li>
                  <Typography size="lg" className="text-white inter">
                    {point?.label}
                  </Typography>
                </li>
              </ol>
            ))}
          </div>
        </div>
        {/* images */}
      </div>
      <div className="w-full max-w-[500px] xl:max-w-[610px]">
        <img
          loading="lazy"
          src="/assets/images/buying-banner.webp"
          alt="Marketplace product display"
        />
      </div>
    </section>
  );
};

export default BuyOnMarketplace;
