import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        type={isShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />

{isShowPassword ? (
  <FaRegEye
    size={22}
    className="text-primary cursor-pointer"
    onClick={() => toggleShowPassword()}
  ></FaRegEye>
) : (
  <FaRegEyeSlash
    size={22}
    className="text-slate-400 cursor-pointer"
    onClick={() => toggleShowPassword()}
  ></FaRegEyeSlash>
)}
    </div>
  );
};

export default PasswordInput;
