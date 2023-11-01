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
    </div>
  );
}

export default Logo;
