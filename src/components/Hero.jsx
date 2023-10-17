import styles from '../style';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-row m-10 ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-row xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col  w-full">
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[42px] text-[32px]">
            EMBO Workshop{' '}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <h1 className="flex-1 font-poppins justify-center items-center text-gradient font-semibold ss:text-[72px] text-[52px]">
            International Symposium on Plant Photobiology (ISPP)
            <br className="sm:block hidden" />
          </h1>
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[32px] text-[22px]">
            09 – 12 January 2024 | Bhubaneswar, Odisha, India{' '}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
