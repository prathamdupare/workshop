const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded px-6 bg-blue-gradient font-poppins font-medium text-[18px]  text-primary outline-none ${styles} transform hover:scale-105 transition-transform  `}
    >
      Apply
    </button>
  );
};

export default Button;
