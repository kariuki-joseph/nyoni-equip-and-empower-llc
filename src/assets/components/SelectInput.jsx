
export default function SelectInput({
  options,
  onChange,
  defaultValue = "",
  className
}) {
  return (
    <select
        className={`text-black/opacity-50 text-sm outline-none border border-gray-400 rounded-lg p-3 w-full text-gray-500 ${className}`}
      onChange={onChange}
      defaultValue={defaultValue}
    >
        <option value={"nil"} >
            -- Mode of Learning --
        </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}