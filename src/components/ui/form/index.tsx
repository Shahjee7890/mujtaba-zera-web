import type { FC } from "react";
import InputField from "../../shared/input-fields/input-text-field";
import TextField from "../../shared/input-fields/text-field";
import { Typography } from "../../shared/typography";
import InputPassword from "../../shared/input-fields/input-password-field";
import type { FormikProps } from "formik";
import type { ContactUsFormValues, RemoveAccountFormValues } from "../../../types";
import { ContactUsForm, RemoveAccountForm } from "../../../formik/forms";

// types.ts or near your form component

interface FormProps {
  title: string;
  description: string;
  buttonText: string;
  isContactUs?: boolean;
  formik?: FormikProps<ContactUsFormValues>;
  formikRemoveAccount?: FormikProps<RemoveAccountFormValues>;
}

const FormZera: FC<FormProps> = ({
  title,
  description,
  buttonText,
  formik,
  isContactUs,
  formikRemoveAccount
}) => {
  const {
    formFields: { firstname, lastName, email, message },
  } = ContactUsForm;

  const {
    formFields: {
      email: removeAccountEmail,
      password,
      message: removeAccountMessage,
    },
  } = RemoveAccountForm;
  
  return (
    <section
      id="contact"
      className="max-w-section w-full lg:w-[95%] bg-gradient-primary flex flex-col lg:flex-row items-center lg:items-start gap-7 lg:gap-4 xl:gap-10 rounded-[26px] px-3 pt-2 pb-5 sm:p-9 lg:px-12 lg:py-14"
    >
      {/* content */}
      <div className="sm:w-full w-[95%] flex flex-row md:flex-col items-start justify-start flex-wrap gap-5 pt-3.5">
        <Typography size="h2" as="h2" className="text-white leading-9 md:leading-12 ">
          {title}
        </Typography>
        <Typography size="lg" className="inter text-white">
          {description}
        </Typography>
      </div>

      {/* form */}
      <div className="sm:w-full w-[95%] lg:w-[90%] flex flex-row lg:flex-col items-start justify-start flex-wrap bg-white rounded-[16px] px-6 lg:px-10 pt-8 lg:pt-15 pb-6 lg:pb-10">
        <form
          onSubmit={isContactUs?  formik?.handleSubmit : formikRemoveAccount?.handleSubmit}
          autoComplete="off"
          className="contact-form w-full"
        >
          {isContactUs ? (
            <div className="flex flex-col gap-5 w-full">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4">
                <InputField
                  type={firstname.type}
                  name={firstname.name}
                  label={firstname.label}
                  styling="w-full"
                  value={formik?.values?.firstName}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  error={
                    formik?.touched.firstName && formik?.errors.firstName
                      ? formik?.errors.firstName
                      : ""
                  }
                />
                <InputField
                  type={lastName.type}
                  name={lastName.name}
                  label={lastName.label}
                  styling="w-full"
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  value={formik?.values.lastName}
                  error={
                    formik?.touched.lastName && formik?.errors.lastName
                      ? formik?.errors.lastName
                      : ""
                  }
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <InputField
                  type={email.type}
                  name={email.name}
                  label={email.label}
                  styling="w-full"
                  value={formik?.values.email}
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  error={
                    formik?.touched.email && formik?.errors.email
                      ? formik?.errors.email
                      : ""
                  }
                />
                <TextField
                  onChange={formik?.handleChange}
                  onBlur={formik?.handleBlur}
                  name={message.name}
                  label={message.label}
                  styling="w-full"
                  rows={5}
                  value={formik?.values.message}
                  error={
                    formik?.touched.message && formik?.errors.message
                      ? formik?.errors.message
                      : ""
                  }
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-primary py-4 px-20 lg:px-22 rounded-full cursor-pointer"
                >
                  <Typography size="lg" className="text-white font-medium">
                    {buttonText}
                  </Typography>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 w-full">
              <InputField
                type={removeAccountEmail.type}
                name={removeAccountEmail.name}
                label={removeAccountEmail.label}
                styling="w-full"
                value={formikRemoveAccount?.values.email}
                onChange={formikRemoveAccount?.handleChange}
                onBlur={formikRemoveAccount?.handleBlur}
                error={
                  formikRemoveAccount?.touched.email && formikRemoveAccount?.errors.email
                    ? formikRemoveAccount?.errors.email
                    : ""
                }
              />
              <InputPassword
                type={password.type}
                name={password.name}
                label={password.label}
                styling="w-full"
                value={formikRemoveAccount?.values?.password}
                onChange={formikRemoveAccount?.handleChange}
                onBlur={formikRemoveAccount?.handleBlur}
                error={
                  formikRemoveAccount?.touched.password && formikRemoveAccount?.errors.password
                    ? formikRemoveAccount?.errors.password
                    : ""
                }
              />
              <TextField
                onChange={formikRemoveAccount?.handleChange}
                onBlur={formikRemoveAccount?.handleBlur}
                name={removeAccountMessage.name}
                label={removeAccountMessage.label}
                styling="w-full"
                rows={5}
                value={formikRemoveAccount?.values.message}
                error={
                  formikRemoveAccount?.touched.message && formikRemoveAccount?.errors.message
                    ? formikRemoveAccount?.errors.message
                    : ""
                }
              />
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-primary py-4 px-20 lg:px-22 rounded-full cursor-pointer"
                >
                  <Typography size="lg" className="text-white font-medium">
                    {buttonText}
                  </Typography>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default FormZera;
