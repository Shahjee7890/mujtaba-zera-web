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
    <section ref={ref}>
      <div className="flex flex-col gap-6 lg:gap-12">
        {/* heading */}
        <div>
          <Typography size="h2" as="h2" className="flex gap-2 items-center justify-center">
            <span  className="gilroy-light"> Built for</span>
            <span className="text-gradient-secondary">Impact</span>
          </Typography>
        </div>
        <hr className="text-hr-color" />
        {/* count */}
        <div className="flex flex-col md:flex-row md:px-10 items-center text-center justify-between gap-5 md:gap-8">
          <div>
            <Typography size="h1" as="h1" className="text-black">
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
            <Typography size="h1" as="h1" className="text-black">
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
            <Typography size="h1" as="h1" className="text-black">
              4.9
            </Typography>
            <Typography size="h6" className="inter text-slate-lighter">
              Average User Rating
            </Typography>
          </div>
        </div>
        <hr className="text-hr-color" />
      </div>
    </section>
  );
};

export default BuildForImpact;
