import { useRouter } from "next/router";

function ButtonCircle({ onClick, children, clasName }) {
  const router = useRouter();
  function handleBack() {
    router.back();
  }
  return (
    <button
      onClick={onClick || handleBack}
      className={`${clasName} flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-arrow-link-bg text-arrow-link-text transition-all duration-300 hover:text-black group-hover:text-black`}
    >
      {children}
    </button>
  );
}

export default ButtonCircle;
