import InfoBanner from "../../components/ui/info-banner";
import { Typography } from "../../components/shared/typography";
import { termsContent } from "../../data";

import "aos/dist/aos.css";

const TermsAndConditions = () => {
  return (
    <section className="max-w-section w-full pt-10 sm:pt-0 px-5 md:px-0 lg:pt-10 xl:pb-24">
      <div className="w-full md:w-[80%] xl:w-[57%] flex flex-col items-center lg:gap-10 mx-auto">
        <div className="w-full">
          <InfoBanner
            title="Terms & Conditions"
            image="/assets/images/info-image.webp"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 flex-wrap w-full">
          {termsContent?.map((content) => (
            <div key={content.id}>
              <Typography size="lg" className="inter text-slate-light">
                {content.discrption}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
