import { useRouter } from "next/router";
import HomeSvg from "./HomeSvg";
import RightIconSvg from "./RightIconSvg";
import Link from "next/link";

function formatPath(pathSegments, dynamicPath) {
  return pathSegments.map((segment, index, array) => {
    const formattedSegment = segment.replace(/-/g, " ");
    if (formattedSegment === "[id]") {
      return dynamicPath;
    }
    return formattedSegment;
  });
}

function CurrentPath({ className, dynamicPath = "Dynamic title for id path" }) {
  const router = useRouter();
  const pathSegments = router.pathname.replace("/", "").split("/");
  const { id } = router.query;

  const formattedSegments = formatPath(pathSegments, dynamicPath);

  const createPath = (index) =>
    `/${pathSegments.slice(0, index + 1).join("/")}`;

  return (
    <>
      <Link href="/" className="inline-flex">
        <HomeSvg className="h-5 w-5" />
      </Link>
      {formattedSegments.map((segment, index) => (
        <span key={index} className="inline-flex items-center">
          <RightIconSvg className="ml-[3px] inline-flex h-4 w-4" />
          <Link
            href={
              index === formattedSegments.length - 1
                ? router.pathname.replace("[id]", id)
                : createPath(index).replace(/ /g, "-")
            }
            className="inline-flex"
          >
            <p
              className={`ml-1 inline-flex capitalize ${
                index === formattedSegments.length - 1
                  ? "text-blue"
                  : "text-black"
              } ${className}`}
            >
              {segment}
            </p>
          </Link>
        </span>
      ))}
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
