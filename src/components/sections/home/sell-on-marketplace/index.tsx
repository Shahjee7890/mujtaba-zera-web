import { Typography } from "../../../shared/typography";
import BuildForImpact from "../../../ui/build-for-impect";
import UserSwiper from "../../../ui/user-swiper";
import UserReviews from "../user-reviews";

const SellOnMarketplace = () => {
  return (
    <section
      id="marketplace"
      className="w-full flex flex-col text-center items-center justify-center px-5 lg:px-0 py-6 sm:py-24 md:py-10 xl:py-20 bg-off-white-color"
    >
      {/* child */}
      <div className="max-w-section justify-center items-center">
        {/* content */}
        <div className="max-w-content flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col flex-wrap">
          {/* heading */}
          <div>
            <Typography size="h1" as="h1" className=" leading-12 md:leading-17">
              <span className="text-gradient-secondary">Selling</span>{" "}
              <span className="!font-normal gilroy-light">
                on <br />Zera Marketplace
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
        <div className="w-full flex px-9 xl:px-0">
          <img
            loading="lazy"
            src="/assets/images/sell-bunner.webp"
            alt="Sell Banner"
          />
        </div>
        <div>
          <BuildForImpact />
        </div>
        <div>
          <UserReviews />
        </div>
        </div>
      </div>
      {/* cards parent */}
      <div className="w-full overflow-x-hidden">
        <UserSwiper />
      </div>
    </section>
  );
};

export default SellOnMarketplace;
