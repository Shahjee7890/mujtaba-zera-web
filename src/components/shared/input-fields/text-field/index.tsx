import { type FC } from "react";
import { Typography } from "../../typography";
import type { TextFieldProps } from "../../../../types";

const TextField: FC<TextFieldProps> = ({
  onChange,
  value,
  styling,
  name,
  label,
  rows,
  error,
  onBlur,
}) => {
  return (
    <div>
      <div className="relative z-0 w-full mb-1 group">
        <textarea
          name={name}
          value={value}
          rows={rows}
          onChange={onChange}
          onBlur={onBlur}
          id="floating_email"
          className={`inter block py-2.5 px-0 w-full text-[16px] text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer ${styling}`}
          placeholder={" "}
        />
        <label
          htmlFor="floating_email"
          className="text-lg font-medium inter peer-focus:font-medium absolute text-md text-[#C8C8C8] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#C8C8C8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
      <div>
        {error && (
          <Typography size="sm" className="inter text-red-600">
            <p>{error}</p>
          </Typography>
        )}
      </div>
    </div>
  );
};

export default TextField;
