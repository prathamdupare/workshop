import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-start justify-items-start flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={icon} className="w-[30%] h-[30%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export const Business = () => {
  return (
    <section id="features" className={`${layout.section} `}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About the Workshop</h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          This unique meeting started in 2001 in USA as “The International
          Symposium on Plant Photobiology” and since then the organisation
          responsibility circulates voluntarily between scientists from Asia,
          the Americas and Europe every two years.
        </p>

        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          It is the single platform where plant photobiology leaders as well as
          upcoming talents across the globe gather on their own interest to
          share their latest mostly unpublished results and discuss future
          directions. This helps the community to exchange up-to-date techniques
          and approaches to address the different biological problems taken by
          the different leading groups. This EMBO workshop on “current trends in
          Photobiology” will bring together researchers from North and South
          America, Europe and Asia to present their latest works on the role of
          photoreceptors as thermo-sensors, how light-perception is linked to
          plant competition, neighbour detection, nutritional uptake, flowering,
          stress response, circadian clocks, and recent advances in new
          optogenetic tools that use light to manipulate cellular signalling.
        </p>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          This year, it was decided by the organisers to take this 11th meeting
          of international photobiology under the umbrella of EMBO so that, a
          better hybrid workshop with high impact and higher quality can be
          achieved and most likely would continue in subsequent years,
          bi-annually by next organizers.
        </p>

        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          EMBO Courses and Workshops are selected for their excellent scientific
          quality and timelines, provision of good networking activities for all
          participants and speaker gender diversity (at least 40% of speakers
          must be from the underrepresented gender).
        </p>

        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          Organisers are encouraged to implement measures to make the meeting
          environmentally more sustainable.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col hahh justify-items-end`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
