import { sponsors } from "../constants";
import styles from "../style";
import FeedbackCard2 from "./FeedbackCard2";

const Sponsors = () => {
  const maxColumns = 5; // Maximum number of columns

  return (
    <section
      id="speakers"
      className={`${styles.flexCenter} flex-col relative sm: justify-center `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2} pt-[100px]`}>Sponsors</h1>
        <div className="w-full md:mt-0 mt-9"></div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full feedback-container relative z-[1]"
        style={{ maxWidth: `${maxColumns * 320}px` }} // Set a maximum width for the grid
      >
        {sponsors.map((card) => (
          <FeedbackCard2 key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
