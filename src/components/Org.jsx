import { organizers } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="organizers"
      className="flex flex-col  justify-center items-center relative pt-28 sm:flex-row"
    >
      <div className="flex flex-col items-center justify-center mr-20">
        <div className="">
          <h1 className={styles.heading2}>Organizers</h1>
          <div className="w-full md:mt-0 mt-6"></div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {organizers.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
