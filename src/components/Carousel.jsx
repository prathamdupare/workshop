import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  close,
  logo,
  menu,
  logo3,
  embo,
  iiserb,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
} from "../assets";

function Carousell() {
  return (
    <div>
      <Carousel autoPlay useKeyboardArrows infiniteLoop centerMode>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full " src={c1} alt="Image 1" />
        </div>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full " src={c2} alt="Image 2" />
        </div>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full " src={c3} alt="Image 3" />
        </div>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full " src={c4} alt="Image 4" />
        </div>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full " src={c5} alt="Image 5" />
        </div>
        <div className="flex overflow-hidden">
          <img className="object-cover w-full  " src={c6} alt="Image 6" />
        </div>
      </Carousel>
      <p className="text-right text-white text-[10px]">
        Image Credit: Oihik Mitra{" "}
      </p>
    </div>
  );
}

export default Carousell;
