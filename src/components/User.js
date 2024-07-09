import { useOutsideClick } from "@/utils/useOutsideClick";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIconSvg from "./CartIconSvg";
import BellIconSvg from "./BellIconSvg";
import ChatIconSvg from "./ChatIconSvg";
import Link from "next/link";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import { logout } from "../../redux/slices/authSlice";
import Avatar from "./Avatar";
import { remove } from "../../redux/slices/profileSlice";

function User() {
  const [show, setShow] = useState(false);
  const ref = useOutsideClick(handleClose);
  const { user, isLoading } = useSelector((store) => store.auth);
  const profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  const { data: session, status } = useSession();

  console.log("Session", session);
  console.log("Status", status);

  // Runs on every outside click while the user is logged in, returning immediately
  // to prevent unnecessary state changes.
  function handleClose() {
    if (!show) return;
    setShow(false);
  }
  // Handle logout
  function handleLogout() {
    if (session) {
      signOut();
      dispatch(remove());
    }
    if (user) {
      dispatch(logout());
      dispatch(remove());
    }
  }
  // Use effect to handle side effects
  useEffect(() => {
    if (status === "authenticated" || user) {
      // User is authenticated, you can perform additional side effects here if needed
    }
  }, [status, user]);
  // Render nothing if loading
  if (status === "loading" || isLoading) {
    return null;
  }
  // Render the user menu if authenticated
  if (status === "authenticated" || user) {
    return (
      <div className="relative inline-flex items-center justify-center gap-3 text-dark-svg">
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
          className="action relative flex items-center justify-center"
        >
          <button onClick={() => setShow((prevValue) => !prevValue)}>
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                className="ml-6 h-7 w-7 rounded-full"
                alt="User avatar"
              />
            ) : (
              <Avatar
                name={profile.first_name || user.first_name}
                className="ml-6 h-7 w-7"
              />
            )}
          </button>
          {show && (
            <div className="absolute right-0 top-12 z-50 mt-2 min-w-80 rounded-lg bg-white py-3">
              <div className="mb-5 px-5">
                {session?.user?.image ? (
                  <img
                    src={session?.user?.image}
                    className="mx-auto h-16 w-16 rounded-full"
                    alt="User avatar"
                  />
                ) : (
                  <Avatar
                    name={user.first_name}
                    className="mx-auto h-16 w-16"
                  />
                )}

                <p className="mt-2 text-center font-semibold">
                  {/* Use user name if session name is not available */}
                  {session?.user?.name || user?.name}
                </p>
                <p className="text-center text-gray-500">
                  {/* Use user email if session email is not available */}
                  {session?.user?.email || user?.email}
                </p>
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/my-learning"
                    className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Learning
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Account Settings
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Help
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchase-history"
                    className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Purchase History
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/become-a-tutor"
                    className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Become a Tutor
                    <ChevronRightIconSvg className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="mx-5 mt-5 hidden w-full items-center justify-between rounded-lg bg-blue px-4 py-2 text-white lg:flex lg:w-auto"
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
  // Render the "Get started" link if not authenticated
  return (
    <Link
      href="/signup"
      className="hidden w-full items-center justify-between rounded-lg bg-blue px-4 py-2 text-white lg:flex lg:w-auto"
    >
      Get started
    </Link>
  );
}
export default User;