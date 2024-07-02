import { useSession } from "next-auth/react";
import Link from "next/link";
import BellIconSvg from "./BellIconSvg";
import CartIconSvg from "./CartIconSvg";
import ChatIconSvg from "./ChatIconSvg";

function User() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // or a loading indicator if desired
    return null;
  }

  if (status === "authenticated") {
    return (
      <div className="inline-flex justify-center items-center gap-3 text-dark-svg">
        <button>
          <CartIconSvg className="h-7 w-7" />
        </button>
        <button>
          <BellIconSvg className="h-7 w-7" />
        </button>
        <button>
          <ChatIconSvg className="h-7 w-7" />
        </button>
        <button>
          <img
            src={session?.user?.image}
            className="rounded-full h-7 w-7 ml-6"
            alt="User avatar"
          />
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/signup"
      className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg"
    >
      Get started
    </Link>
  );
}

export default User;
