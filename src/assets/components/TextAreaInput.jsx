export default function TextAreaInput({
    onChange,
    defaultValue = "",
    placeholder = "Type here...",
    className
}) {
    return (
        <textarea
            className={`text-black/opacity-50 text-sm outline-none border border-gray-400 rounded-lg p-3 w-full ${className}`}
      rows={4}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}
