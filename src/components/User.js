import { useOutsideClick } from "@/utils/useOutsideClick";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import BellIconSvg from "./BellIconSvg";
import CartIconSvg from "./CartIconSvg";
import ChatIconSvg from "./ChatIconSvg";
import ChevronRightIconSvg from "./ChevronRightIconSvg";

function User() {
  const [show, setShow] = useState(false);
  const ref = useOutsideClick(handleClose);

  const { data: session, status } = useSession();
  console.log(show);

  function handleClose() {
    setShow((v) => !v);
    console.log(show);
  }

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    return (
      <div className="relative inline-flex justify-center items-center gap-3 text-dark-svg">
        <button>
          <CartIconSvg className="h-7 w-7" />
        </button>
        <button>
          <BellIconSvg className="h-7 w-7" />
        </button>
        <button>
          <ChatIconSvg className="h-7 w-7" />
        </button>
        <div
          ref={ref}
          className="action relative flex justify-center items-center"
        >
          <button onClick={handleClose}>
            <img
              src={session?.user?.image}
              className="rounded-full h-7 w-7 ml-6"
              alt="User avatar"
            />
          </button>
          {/* menu */}

          {show && (
            <div className="absolute top-6 right-0 mt-2 min-w-80 py-3 bg-white z-50 rounded-lg ">
              <div className="mb-5 px-5">
                <img
                  src={session?.user?.image}
                  alt="User avatar"
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="mt-2 text-center font-semibold">
                  {session?.user?.name}
                </p>
                <p className="text-center text-gray-500">
                  {session?.user?.email}
                </p>
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/my-learning"
                    className="px-5 inline-flex justify-between w-full items-center py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Learning
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account-settings"
                    className="px-5 inline-flex justify-between w-full items-center py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Account Settings
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="px-5 inline-flex justify-between w-full items-center py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Help
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchase-history"
                    className="px-5 inline-flex justify-between w-full items-center  py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Purchase History
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/become-a-tutor"
                    className="px-5 inline-flex justify-between w-full items-center  py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Become a Tutor
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="mx-5 mt-5 py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
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

// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import BellIconSvg from "./BellIconSvg";
// import CartIconSvg from "./CartIconSvg";
// import ChatIconSvg from "./ChatIconSvg";

// function User() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     // or a loading indicator if desired
//     return null;
//   }

//   if (status === "authenticated") {
//     return (
//       <div className="inline-flex justify-center items-center gap-3 text-dark-svg">
//         <button>
//           <CartIconSvg className="h-7 w-7" />
//         </button>
//         <button>
//           <BellIconSvg className="h-7 w-7" />
//         </button>
//         <button>
//           <ChatIconSvg className="h-7 w-7" />
//         </button>
//         <div className="action">
//           <button>
//             <img
//               src={session?.user?.image}
//               className="rounded-full h-7 w-7 ml-6"
//               alt="User avatar"
//             />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Link
//       href="/signup"
//       className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg"
//     >
//       Get started
//     </Link>
//   );
// }

// export default User;
