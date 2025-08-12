import * as yup from "yup";
import {
  ContactUsForm,
  RemoveAccountForm,
  subscribeEmailInput,
} from "../forms";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailRegex =
  /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

const {
  formFields: { firstname, lastName, email, message },
} = ContactUsForm;

export const contactUsValidations = yup.object({
  firstName: yup.string().required(firstname.errMsgs.required),
  lastName: yup.string().required(lastName.errMsgs.required),
  message: yup.string().required(message.errMsgs.required),
  email: yup
    .string()
    .trim()
    .lowercase()
    .matches(emailRegex, { message: email.errMsgs.inValid })
    .required(email.errMsgs.required),
});

const {
  formFields: {
    email: removeAccountEmail,
    password,
    message: removeAccountMessage,
  },
} = RemoveAccountForm;

export const removeAccountValidations = yup.object({
  message: yup.string().required(removeAccountMessage.errMsgs.required),
  password: yup.string().required(password.errMsgs.required),
  email: yup
    .string()
    .trim()
    .lowercase()
    .matches(emailRegex, { message: removeAccountEmail.errMsgs.inValid })
    .required(removeAccountEmail.errMsgs.required),
});

const {
  formFields: { email:subscribeEmail },
} = subscribeEmailInput;
export const subscribeNewsValidations = yup.object({
  email: yup
    .string()
    .trim()
    .lowercase()
    .matches(emailRegex, { message: subscribeEmail.errMsgs.inValid })
    .required(subscribeEmail.errMsgs.required),
});
