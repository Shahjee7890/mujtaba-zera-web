import { useEffect, useRef, useState } from "react";
import { Typography } from "../../shared/typography";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const BuildForImpact = () => {
  const [counterOn, setCounterOn] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setCounterOn(true);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="w-full">
      <div className="w-full flex flex-col gap-6 lg:gap-12">
        {/* heading */}
        <div className="max-w-content">
          <Typography size="h2" as="h2" className="flex gap-2 items-center justify-center">
            <span  className="gilroy-light"> Built for</span>
            <span className="text-gradient-secondary">Impact</span>
          </Typography>
        </div>
        <div className="w-full">
        <hr className="text-hr-color w-full" />
        </div>
        {/* count */}
      <div className="max-w-section">
          <div className="w-full flex flex-col md:flex-row md:px-10 items-center text-center justify-between gap-5 md:gap-20 lg:gap-50">
          <div>
            <Typography size="h5" as="p" className="text-black !text-[40px] md:!text-[45px] xl:!text-[60px]">
              {counterOn ? (
                <CountUp
                  start={0}
                  end={10000}
                  duration={2}
                  delay={0}
                  suffix="+"
                />
              ) : (
                "0+"
              )}
            </Typography>
            <Typography size="h6" as="h6" className="inter text-slate-lighter">
              Ads Listings
            </Typography>
          </div>

          <div>
            <Typography size="h5" as="p" className="text-black !text-[40px] md:!text-[45px] xl:!text-[60px]">
              {counterOn ? (
                <CountUp
                  start={0}
                  end={5000}
                  duration={2}
                  delay={0}
                  suffix="+"
                />
              ) : (
                "0+"
              )}
            </Typography>
            <Typography size="h6" as="h6" className="inter text-slate-lighter">
              Successful Transactions
            </Typography>
          </div>

          <div>
            <Typography size="h5" as="p" className="text-black !text-[40px] md:!text-[45px] xl:!text-[60px]">
              4.9
            </Typography>
            <Typography size="h6" className="inter text-slate-lighter">
              Average User Rating
            </Typography>
          </div>
        </div>
      </div>
        <hr className="text-hr-color w-full" />
      </div>
    </section>
  );
};

export default BuildForImpact;
