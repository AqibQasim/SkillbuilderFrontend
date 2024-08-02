import { useRouter } from "next/router";
import HomeSvg from "./HomeSvg";
import RightIconSvg from "./RightIconSvg";
import Link from "next/link";

function CurrentPath({ className }) {
  const router = useRouter();
  let currentPath = router.pathname.replace("/", "");

  // Add hyphen replacement logic
  currentPath = currentPath.replace(/-/g, " ");

  if (currentPath === "contact" || currentPath === "about") {
    currentPath += " us";
  } else if (currentPath === "shoppingcart") {
    currentPath = "Shopping Cart";
  }

  return (
    <>
      <Link href="/home">
        <HomeSvg className="inline-flex h-5 w-5" />
      </Link>
      <RightIconSvg className="ml-[3px] inline-flex h-4 w-4" />
      <p className={`ml-1 inline-flex capitalize text-blue ${className}`}>
        {currentPath}
      </p>
    </>
  );
}

export default CurrentPath;

// import { useRouter } from "next/router";
// import HomeSvg from "./HomeSvg";
// import RightIconSvg from "./RightIconSvg";
// import Link from "next/link";

// function CurrentPath({ className }) {
//   const router = useRouter();
//   let currentPath = router.pathname.replace("/", "");

//   if (currentPath === "contact" || currentPath === "about") {
//     currentPath += " us";
//   } else if (currentPath === "shoppingcart") {
//     currentPath = "Shopping Cart";
//   }
//   return (
//     <>
//       <Link href="/home">
//         <HomeSvg className="inline-flex h-5 w-5" />
//       </Link>
//       <RightIconSvg className="ml-[3px] inline-flex h-4 w-4" />
//       <p className="ml-1 inline-flex capitalize text-blue">{currentPath}</p>
//     </>
//   );
// }

// export default CurrentPath;
