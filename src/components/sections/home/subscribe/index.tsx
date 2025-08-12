import type { FC } from "react";
import { Typography } from "../../../shared/typography";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { subscribeNewsvalues } from "../../../../formik/initial-values";
import { subscribeEmailInput } from "../../../../formik/forms";
import { subscribeNewsValidations } from "../../../../formik/validation";

interface SubscribProps {
  styling?: string;
  email: string;
}

const SubscribeNewsLetter: FC<SubscribProps> = ({ styling }) => {
  const {
    formFields: { email: subscribeEmail },
  } = subscribeEmailInput;
  const formik = useFormik({
    initialValues: subscribeNewsvalues,
    validationSchema: subscribeNewsValidations,
    onSubmit: (values) => {
      console.log(values);
      toast.info("Coming soon!");
    },
  });
  const { values, errors, handleChange, handleBlur, handleSubmit } = formik;
  console.log(errors);

  return (
    <section className="bg-[url('/assets/images/shape.webp')] bg-cover bg-center h-[170px] sm:h-[190px] md:h-[210px] xl:h-[250px] w-full pb-4 pt-10 sm:pt-10 md:pt-15 lg:pt-25">
      <div className="max-w-section px-5 xl:px-0">
        <form
          onSubmit={handleSubmit}
          className="rounded-[14px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] max-w-content flex justify center flex-col lg:flex-row items-center sm:items-center sm:justify-between gap-3 sm:gap-6 md:gap-4 px-6 sm:px-1 lg:px-10 py-5 md:py-7 lg:py-12"
        >
          <div>
            <Typography
              size="h2"
              as="h2"
              className="!text-[20px] sm:!text-[30px] lg:!text-[30px] xl:!text-[38px] white"
            >
              Subscribe Newsletters
            </Typography>
          </div>
          <div className="flex flex-col w-full sm:w-[510px]">
            <div className="flex sm:max-w-[510px] w-full flex-col sm:flex-row bg-grey-lighter items-center justify-center rounded-full py-4 pl-6 sm:pr-2 sm:py-2">
              <input
                type={subscribeEmail.type}
                name={subscribeEmail.name}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                placeholder="Enter your email"
                className={`inter outline-0 border-0 placeholder-[rgba(43,61,81,0.5)] text-black ${styling}`}
              />
              <button className="sm:block hidden bg-gradient-primary px-2 py-4 sm:px-7 lg:py-4 lg:px-10 rounded-full cursor-pointer">
                <Typography size="lg" className="text-white whitespace-nowrap">
                  Subscribe Now
                </Typography>
              </button>
            </div>
            <div className="sm:block hidden">
              <p className="text-red-600 font-light h-2.5 text-sm px-7 inter">
                {errors.email}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:max-w-[240px] sm:hidden block bg-gradient-primary px-2 py-4 sm:px-7 lg:py-4 lg:px-10 rounded-full cursor-pointer"
          >
            <Typography size="lg" className="text-white whitespace-nowrap">
              Subscribe Now
            </Typography>
          </button>
          <div className="sm:hidden block">
            <p className="text-red-600 font-light h-2.5 text-sm px-7 inter">
              {errors.email}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
