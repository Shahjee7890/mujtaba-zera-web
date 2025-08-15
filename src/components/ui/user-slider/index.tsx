import { userCards } from "../../../data";
import { Typography } from "../../shared/typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const UserSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-15 w-full">
      {/* Embla wrapper */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Embla container */}
        <div className="flex gap-5 px-5 z-10">
          {userCards?.map((currentData, index) => {
            const { profile, title, rating, description } = currentData;
            return (
              <div
                key={index}
                className="sm:flex-shrink-0 min-w-full sm:min-w-[300px] max-w-[380px] bg-white rounded-[25px] flex flex-col gap-8 px-10 pt-10 pb-8 sm:py-12 text-start"
              >
                <div className="flex items-center justify-center gap-8">
                  <div>
                    <img src={profile} alt="user" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography size="h5" as="h5" className="inter text-black font-bold">
                      {title}
                    </Typography>
                    <img src={rating} alt="stars" />
                  </div>
                </div>
                <Typography size="lg" className="inter text-slate-light">
                  {description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserSlider;
