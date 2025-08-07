import { Typography } from "../../../shared/typography";

const UserReviews = () => {
  return (
    <section className="w-full">
      {/* child */}
      <div className="flex flex-col gap-15 justify-center items-center">
        {/* content */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* logo */}
          <div>
            <img src="/assets/images/users-logo.webp" alt="User avatar" />
          </div>
          {/* heading */}
          <div>
            <Typography size="h4" as="h4" className="gap-2 flex justify-center">
              Few Words Of
              <span className="text-gradient-secondary">Happiness</span>
            </Typography>
            <Typography
              size="md"
              className="inter text-slate-lighter flex flex-wrap"
            >
              Hear it straight from our successful clients. Discover what Zera's
              users <br />have to share about their experience.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
