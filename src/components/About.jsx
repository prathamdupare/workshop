import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-start justify-items-start flex-row p-6 rounded-[20px] pt-30 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={icon} className="w-[30%] h-[30%] object-contain" />
    </div>
    <div className="flex-1 z-[1] flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>

    <div className="absolute z-[0] w-[50%] h-[70%] top-0 blue__gradient"></div>
  </div>
);

export const About = () => {
  return (
    <section id="about" className={`${layout.section} `}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About the Workshop</h2>
        <p className={`${styles.paragraph} text-justify max-w-[670px] mt-5`}>
          This unique meeting started in 2001 in USA as “The International
          Symposium on Plant Photobiology” and since then the organisation
          responsibility circulates voluntarily between scientists from Asia,
          the Americas and Europe every two years.
        </p>

        <p className={`${styles.paragraph} text-justify max-w-[670px] mt-5`}>
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

        <h2 className={styles.heading2}>About IISER Bhopal</h2>
        <p className={`${styles.paragraph} text-justify max-w-[670px] mt-5`}>
          Bhopal, geographically located in the centre of India known to be the
          Heart of India is an attraction to many scenic beauties and famous for
          its historical richness, handicrafts, and jewellery. It is also known
          as the City of the Lakes. The details can be found here . IISER Bhopal
          is one of the premiere institutes of India established in the year
          2008 ( https://www.iiserb.ac.in). The scenic beauty as well as the
          electric atmosphere of the campus hosting over 1700 students is indeed
          worth spending a day here.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col hahh justify-items-end`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
