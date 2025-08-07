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
