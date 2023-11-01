const FeedbackCard = ({ link, name, affiliation, title, img }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <div className="flex flex-col justify-center items-center">
      <img
        src={img}
        alt={name}
        className="w-[98px] h-[98px] rounded-full transform scale-100 hover:scale-110 transition-transform duration-300"
      />

      <div className="flex flex-col justify-center ml-4 py-5 w-[200px] h-[100px]">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {affiliation}
        </p>
      </div>
    </div>
  </a>
);

export default FeedbackCard;
