import { useRouter } from "next/router";
import HomeSvg from "./HomeSvg";
import RightIconSvg from "./RightIconSvg";
import Link from "next/link";

function CurrentPath({ className }) {
  const router = useRouter();
  let currentPath = router.pathname.replace("/", "");

  if (currentPath === "contact" || currentPath === "about") {
    currentPath += "us";
  }
  return (
    <>
      <Link href="/home">
        <HomeSvg className="h-5 w-5 inline-flex" />
      </Link>
      <RightIconSvg className="ml-[3px] h-4 w-4 inline-flex" />
      <p className="capitalize inline-flex ml-1">{currentPath}</p>
    </>
  );
}

export default CurrentPath;
