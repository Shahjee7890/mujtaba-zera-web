import { useState, type FC } from "react";
import { Typography } from "../../typography";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import type { InputProps } from "../../../../types";

const InputPassword: FC<InputProps> = ({
  onChange,
  value,
  styling,
  name,
  label,
  onBlur,
  error,
}) => {
  const [visible, setIsVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsVisible(!visible);
  };
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="relative z-0 w-full mb-1 group ">
        <div>
          <input
            type={visible ? "text" : "password"}
            name={name}
            value={value}
            autoComplete="off"
            maxLength={30}
            onChange={onChange}
            onBlur={onBlur}
            id="floating_email"
            className={`inter block py-2.5 px-0 w-full text-[16px] text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600  peer ${styling}`}
            placeholder={" "}
          />
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleToggleVisibility}
          >
            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
          <label
            htmlFor="floating_email"
            className="inter peer-focus:font-medium absolute text-md text-[#C8C8C8] dark:text-[#C8C8C8] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-[#C8C8C8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {label}
          </label>
        </div>
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

export default InputPassword;
