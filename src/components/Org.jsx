import { organizers } from '../constants';
import { coorganizers } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testiminials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex=col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Organizers</h1>
        <div className="w-full md:mt-0 mt-6"></div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {organizers.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex=col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Co-Organizers</h1>
        <div className="w-full md:mt-0 mt-6"></div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {coorganizers.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testiminials;
