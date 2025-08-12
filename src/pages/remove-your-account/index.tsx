import FormZera from "../../components/ui/form";
import { useFormik } from "formik";
import { removeAccountValidations } from "../../formik/validation";
import { toast } from "react-toastify";
import type { RemoveAccountFormValues } from "../../types";
import { removeAccountValues } from "../../formik/initial-values";

const RemoveAccount = () => {
  const formik = useFormik<RemoveAccountFormValues>({
  initialValues: removeAccountValues,
  validationSchema: removeAccountValidations,
  onSubmit: (values) => {
    console.log(values);
    toast.info("Coming soon!");
    resetForm();
  },
});

  const { resetForm } = formik;

  return (
    <section className="w-full px-5 lg:px-0 py-10 md:py-15 flex justify-center">
      <FormZera
        title="Remove Your Account."
        description="Provide the details to remove your Zera account"
        buttonText="Request"
        formikRemoveAccount={formik}
      />
    </section>
  );
};

export default RemoveAccount;
