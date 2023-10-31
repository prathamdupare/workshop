import styles from "../style";
import { features } from "../constants";
import { layout } from "../style";
import { hero } from "../assets";

const Hero = () => {
  const heroImageStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-row m-10 ${styles.paddingY} pt-30 m-24`}
      style={heroImageStyle}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-row xl:px-0 sm:px-16 px-6 text-center`}
      >
        <div className="flex flex-col  w-full">
          <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[42px] text-[32px]">
            EMBO Workshop{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <h1 className="flex-1 font-poppins text-gradient font-semibold ss:text-[72px] text-[52px]">
            International Symposium on Plant Photobiology (ISPP)
            <br className="sm:block hidden" />
          </h1>
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[32px] text-[22px]">
            09 – 12 January 2024 | Bhubaneswar, Odisha, India{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
