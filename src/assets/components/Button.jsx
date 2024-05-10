export default function Button({ onClick, children, primary, secondary, className }) {
let buttonClass = `py-2 px-4 rounded-lg h-min ${className}`;

  if (primary) {
    buttonClass += ' bg-primary hover:bg-primar-700 text-white';
  }

  if (secondary) {
    buttonClass += ' hover:bg-primary-700 text-default border border-primary';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}