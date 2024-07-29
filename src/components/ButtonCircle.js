import { useRouter } from "next/router";

function ButtonCircle({ onClick, role = "", children, clasName }) {
  const isForBack = role !== "link";
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  const handleClick = isForBack ? handleBack : onClick || (() => {});

  return (
    <button
      onClick={handleClick}
      className={`${clasName} hover:text-black group-hover:text-black flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-arrow-link-bg text-arrow-link-text transition-all duration-300`}
    >
      {children}
    </button>
  );
}

export default ButtonCircle;
