import Image from "next/image";
import EyeShowSvg from "./EyeShowSvg";
import EyeHideSvg from "./EyeHideSvg";

function ShowPassword({ pass, setPass, className }) {
  return (
    <div className={className} onClick={() => setPass((prevPass) => !prevPass)}>
      {pass ? (
        <EyeHideSvg className="someclasses" />
      ) : (
        <EyeShowSvg className="someclasses" />
      )}
    </div>
  );
}

export default ShowPassword;
