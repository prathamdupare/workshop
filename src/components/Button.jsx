const Button = ({ styles }) => {
  return (
    <div className="py-4 rounded px-6 bg-blue-gradient font-poppins font-medium text-[18px]  text-primary outline-none ${styles} transform hover:scale-105 transition-transform ">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdjY_gmoOlsYiKH6p-q1GHkuCwxYT4vBs_G1BEFLZpKr4Tbxg/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Apply</button>
      </a>
    </div>
  );
};

export default Button;
