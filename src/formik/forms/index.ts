export const ContactUsForm = {
  id: "01-contact-us-form",
  formFields: {
    firstname: {
      type: "text",
      name: "firstName",
      label: "First Name",
      errMsgs: {
        required: "First name is requried",
      },
    },
    lastName: {
      type: "text",
      name: "lastName",
      label: "Last Name",
      errMsgs: {
        required: "Last name is requried",
      },
    },
    email: {
      type: "email",
      name: "email",
      label: "Email",
      errMsgs: {
        required: "Email Address is required.",
        inValid: "Email must be valid.",
      },
    },
    message: {
      name: "message",
      label: "Message",
      errMsgs: {
        required: "Message is requried",
      },
    },
  },
};

export const RemoveAccountForm = {
  id: "02-remove-account-form",
  formFields: {
    email: {
      type: "email",
      name: "email",
      label: "Email",
      errMsgs: {
        required: "Email Address is required.",
        inValid: "Email must be valid.",
      },
    },
    message: {
      name: "message",
      label: "Provide Reason",
      errMsgs: {
        required: "Message is requried",
      },
    },
    password: {
      type: "password",
      name: "password",
      label: "Password",
      errMsgs: {
        required: "Password is required.",
      },
    },
  },
};
