import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Input({
  placeholder,
  type = "text",
  onChange,
  className,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    setInputType(showPassword ? "password" : "text");
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        className={`text-black/opacity-50 text-sm outline-none border border-gray-400 rounded-lg p-3 w-full ${className}`}
        onChange={onChange}
        type={inputType}
        placeholder={placeholder}
      />
      {type === "password" && (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <IoEyeOffOutline size={24} />
          ) : (
            <IoEyeOutline size={24} />
          )}
        </div>
      )}
    </div>
  );
}
