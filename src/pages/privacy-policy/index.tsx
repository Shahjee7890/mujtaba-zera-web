import InfoBanner from "../../components/ui/info-banner";
import { Typography } from "../../components/shared/typography";
import { privacyContent } from "../../data";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-section w-[90%] pt-10 sm:pt-0 lg:pt-10 pb-24">
      <div className="w-full md:w-[80%] xl:w-[57%] flex flex-col items-center lg:gap-10 mx-auto">
        <div className="w-full">
          <InfoBanner
            title="Privacy Policy"
            image="/assets/images/info-image.webp"
          />
        </div>
        <div className="flex flex-col gap-5 flex-wrap w-full">
          {privacyContent?.map((content) => (
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

export default PrivacyPolicy;
