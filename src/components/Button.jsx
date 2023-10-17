const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Apply
    </button>
  );
};

export default Button;
