import React from "react";

export default function Input({
  placeholder,
  type = "text",
  onChange,
}) {
  return (
    <input
      className="text-black/opacity-50 text-sm outline-none border border-gray-400 rounded-lg p-3 w-full"
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}
