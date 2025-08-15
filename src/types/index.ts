import type { FormikProps } from "formik";
import type { Dispatch, SetStateAction } from "react";

export interface CategoryData {
  heading: string;
  paragraph: string;
  image: string;
}
export interface InputProps {
  name: string;
  label: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  styling?: string;
  value?: string | number | readonly string[] | undefined;
}
export interface InputProps {
  type: string;
  name: string;
  label: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  styling?: string;
  value?: string | number | readonly string[] | undefined;
}

export interface TextFieldProps {
  name: string;
  label: string;
  rows: number;
  error: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  styling?: string;
  value?: string | number | readonly string[] | undefined;
}
export interface ContactUsFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  password?: string;
}

export interface RemoveAccountFormValues {
  email: string;
  message: string;
  password: string;
}


export interface CategoriesLayoutProps {
  data: {
    heading?: string;
    paragraph?: string;
    image?: string;
  };
}

export interface InfoBannerLayoutProps {
  title?: string;
  image?: string;
}

export interface SubscribProps {
  styling?: string;
  email: string;
}
export interface SideBarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export interface FormProps {
  title: string;
  description: string;
  buttonText: string;
  isContactUs?: boolean;
  formik?: FormikProps<ContactUsFormValues>;
  formikRemoveAccount?: FormikProps<RemoveAccountFormValues>;
}
export interface Tab {
  id: number;
  title: string;
}

export interface TabsProps {
  tabs: Tab[];
  handleMenuClick: (id: number) => void;
  activeMenu: number;
}

