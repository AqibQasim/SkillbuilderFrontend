import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import EyeShowSvg from "./EyeShowSvg";
import EyeHideSvg from "./EyeHideSvg";

// function ShowPassword({ pass, setPass, className }) {
//   return (
//     <Image
//       className={className}
//       src={pass ? "/eyeHide.svg" : "/eyeShow.svg"}
//       width={pass ? 19.64 : 21.33}
//       height={pass ? 18 : 16}
//       onClick={() => setPass((prevPass) => !prevPass)}
//     />
//   );
// }

// export default ShowPassword;

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
