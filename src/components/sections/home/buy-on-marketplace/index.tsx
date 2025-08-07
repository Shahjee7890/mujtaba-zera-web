import { featurePoint } from "../../../../data";
import { Typography } from "../../../shared/typography";

const BuyOnMarketplace = () => {
  return (
    <section className="w-full bg-gradient-primary flex items-center justify-end py-10 lg:py-30">
      <div className="max-w-section flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-center">
        {/* content */}
        <div className="w-full lg:w-[50%] flex sm:justify-end px-2 sm:px-0">
          <div className="text-white flex flex-col flex-wrap gap-10 px-4 w-full sm:w-[87%]">
            {/* heading and description */}
            <div>
              <Typography size="h2" as="h2">Buying on Zera Marketplace</Typography>
              <Typography size="xl" className="inter font-[600]">
                Discover unique items, from home decor to trendy fashion. You
                never know what you’ll find and fall in love with thousands of
                items from your local neighbourhood.
              </Typography>
            </div>
            <div>
              <Typography size="h5" as="h5">Features</Typography>
              {featurePoint?.map((point) => (
                <ol key={point.id} className="list-disc px-6">
                  <li >
                    <Typography size="lg" className="text-white inter">
                      {point?.label}
                    </Typography>
                  </li>
                </ol>
              ))}
            </div>
          </div>
        </div>
        {/* images */}
        <div className="w-full lg:w-[50%]">
          <img
            loading="lazy"
            src="/assets/images/buying-banner.webp"
            alt="Marketplace product display"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyOnMarketplace;
