import React, { type FC } from "react";
import { Typography } from "../../typography";
import type { InputProps } from "../../../../types";

const InputField: FC<InputProps> = ({
  onChange,
  value,
  styling,
  name,
  type,
  label,
  onBlur,
  error,
}) => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="relative z-0 w-full mb-1 group ">
        <input
          type={type}
          name={name}
          value={value}
          maxLength={50}
          autoComplete="off"
          onChange={onChange}
          onBlur={onBlur}
          id="floating_email"
          className={`inter block py-2.5 px-0 w-full text-[16px] text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer ${styling}`}
          placeholder={" "}
        />
        <label
          htmlFor="floating_email"
          className="text-lg font-medium z-50 inter peer-focus:font-medium absolute text-md text-[#C8C8C8] dark:text-[#C8C8C8] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-[#C8C8C8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
      <div className="min-h-[20px]">
        {error ? (
          <Typography size="sm" className="inter text-red-600">
            <p>{error}</p>
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
