import { close, menu, logo3, embo, iiserb, sp16 } from "../assets";

function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="flex flex-col sm:flex-row justify-center container mx-auto text-center">
        <img
          src={sp16}
          alt="hoobank"
          className="rounded-full w-[1blur navbar in tailwing50px] mr-4 r px-[40px] h-[70px] hidden sm:block md:block lg:block"
        />
        <div className="">
          <p className="text-lg">
            &copy; 2023-2024 EMBO-ISPP SATELLITE MEETING
          </p>
          <p className="text-sm text-slate-400">
            Designed and developed by{" "}
            <a
              className="text-blue-300"
              href="https://github.com/prathamdupare"
            >
              Pratham Dupare
            </a>
          </p>
          <p className="text-sm text-slate-400">
            EMBO-ISPP SATELLITE MEETING Logo by{" "}
            <span className="text-blue-300">Sukriti and Shubhi Dwivedi</span>
          </p>
        </div>
        {/*<img
          src={sp16}
          alt="hoobank"
          className="w-[1blur navbar in tailwing50px] mr-4 rounded-full px-[40px] h-[70px] hidden sm:block md:block lg:block"
  />*/}
      </div>
    </footer>
  );
}

export default Footer;
