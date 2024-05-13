export default function ColoredInput({
  placeholder,
  type = "text",
  onChange,
  className,
  icon,
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        className={`text-black/opacity-50 text-sm outline-none bg-gray-100 rounded-lg p-3 pe-10 w-full`}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        {icon}
      </div>
    </div>
  );
}
