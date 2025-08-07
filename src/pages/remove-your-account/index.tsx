import FormZera from "../../components/ui/form";
import { useFormik } from "formik";
import { removeAccountValidations } from "../../formik/validation";
import { toast } from "react-toastify";

const RemoveAccount = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: removeAccountValidations,

    onSubmit: (values) => {
      // handle form submission here
      console.log(values);
      toast.info("Coming soon!");

      resetForm();
    },
  });
  const { resetForm } = formik;

  return (
    <div className="w-full px-5 lg:px-0 py-10 md:py-15 flex justify-center">
      <FormZera
        title="Remove Your Account."
        description="Provide the details to remove your Zera account"
        buttonText="Request"
        formik={formik}
      />
    </div>
  );
};

export default RemoveAccount;
