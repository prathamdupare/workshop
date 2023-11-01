import { feedback2 } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const ExtraSpeakers = () => {
  const maxColumns = 3; // Maximum number of columns

  return (
    <section id="speakers" className="">
      <div className="flex items-center justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full feedback-container relative z-[1]"
          style={{ maxWidth: `${maxColumns * 320}px` }} // Set a maximum width for the grid
        >
          {feedback2.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSpeakers;
