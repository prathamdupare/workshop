import { sponsors } from "../constants";
import styles from "../style";
import FeedbackCard2 from "./FeedbackCard2";

const Sponsors = () => {
  return (
    <section
      id="organizers"
      className="flex flex-col  justify-center items-center relative pt-28 sm:flex-row"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[10%]  rounded-full blue__gradient"></div>
      <div className="flex flex-col items-center justify-center mr-20">
        <div className="">
          <h1 className={styles.heading2}>Sponsors</h1>
          <div className="w-full md:mt-0 mt-6"></div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {sponsors.map((card) => (
            <FeedbackCard2 key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
