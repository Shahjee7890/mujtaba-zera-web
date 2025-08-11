import { useFormik } from "formik";
import FormZera from "../../../ui/form";
import { contactUsValidations } from "../../../../formik/validation";
import { contactUsValues } from "../../../../formik/initial-values";
import { toast } from "react-toastify";

const ContactUs = () => {
  const formik = useFormik({
    initialValues:  contactUsValues ,
    validationSchema: contactUsValidations,

    onSubmit: (values) => {
      console.log(values);
      toast.info("Coming soon!")
      resetForm()

    },
  });

  const {resetForm} = formik
  return (
    <section id="contact" className="w-full flex flex-col py-6 lg:pb-25">
      <FormZera
        isContactUs
        title="Contact Us For A Free Consultation"
        description="Looking for expert guidance or have something in mind? Reach out for a free consultation and let’s explore the best way forward. We’re here to answer your questions and help you make confident decisions — no pressure, just support."
        buttonText="Submit"
        formik={formik}
      />
    </section>
  );
};

export default ContactUs;
