import { logoW, logo, logoM } from "../assets";

function Logo() {
  return (
    <div style={{ position: "relative" }}>
      <img
        className="pt-3 z-[2]"
        src={logoM} // Replace with your image URL
        alt="Image Description" // Replace with a suitable image description
        width="320" // Set the desired width
        height="220" // Set the desired height
      />
      <div className="absolute z-[0] w-[100%] h-[90%] top-0 mt-10 skyblue__gradient"></div>
    </div>
  );
}

export default Logo;
