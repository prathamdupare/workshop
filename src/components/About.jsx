import { features } from "../constants";
import styles, { layout } from "../style";

import { poster } from "../assets";

import Button from "./Button";

import Carousell from "./Carousel";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex  flex-start justify-items-start flex-row p-6 rounded-[20px] pt-30 ${
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
  </div>
);

export const About = () => {
  return (
    <section id="about" className={`${layout.section}`}>
      {" "}
      <div className={layout.sectionInfo}>
        <div className="absolute z-[0] w-[30%] h-[60%] -left-[10%]  rounded-full blue__gradient"></div>
        <h2 className={`pt-[50px] ${styles.heading2}`}>About the Meeting</h2>
        <p className={`${styles.paragraph} text-justify max-w-[680px] mt-5`}>
          The EMBO-ISPP satellite meeting in January 2024 hosted by IISER Bhopal
          , INDIA will follow the “International Symposium on Plant
          Photobiology”.The ISPP meetings started in 2001 in USA and since then
          the organisation responsibility circulates voluntarily between
          scientists from Asia, the Americas and Europe every two years. In this
          meeting plant photobiology leaders as well as upcoming talents across
          the globe gather to share their latest mostly unpublished results and
          discuss future directions. This helps the community to exchange ideas
          and approaches to address different biological problems related to
          photobiology. The satellite meeting will bring together researchers
          from all over the globe to present their latest works on various
          aspects of photobiology including plant photoreceptors, light
          signaling, neighbour detection, flowering, circadian rhythms and
          thermomorphogenesis. The meeting intends to provide a platform for
          research scholars to interact with world leaders in the field of plant
          photobiology and enhance collaboration between national and
          international groups.{" "}
        </p>

        <h2 className={`pt-[50px] ${styles.heading2}`}>About IISER Bhopal</h2>

        <p className={`${styles.paragraph} text-justify max-w-[670px] mt-5`}>
          Bhopal, geographically located in the centre of India known to be the
          Heart of India is an attraction to many scenic beauties and famous for
          its historical richness, handicrafts, and jewellery. It is also known
          as the City of the Lakes. The details can be found{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" underline "
            href="https://www.mptourism.com/destination-bhopal.php"
          >
            {" "}
            here.
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 "
            href="https://www.iiserb.ac.in/"
          >
            IISER Bhopal{" "}
          </a>
          is one of the premiere institutes of India established in the year
          2008. The scenic beauty as well as the electric atmosphere of the
          campus hosting over 1700 students is indeed worth spending a day here.
        </p>

        <div className="py-4 my-3 rounded px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} transform hover:scale-105 transition-transform">
          <a
            href={poster}
            download={poster}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download Flyer</button>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row  justify-center mx-10">
          <div
            className={`pt-[80px] flex flex-col justify-center items-center mx-9 my-9 sm:m-0`}
          >
            <div className="flex flex-col justify-center max-w-[400px] mb-7">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>

            <div className="max-w-[450px] mt-60 ">
              <Carousell />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
