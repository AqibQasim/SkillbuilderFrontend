import { useOutsideClick } from "@/utils/useOutsideClick";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { remove } from "../../redux/slices/profileSlice";
import Avatar from "./Avatar";
import BellIconSvg from "./BellIconSvg";
import CartIconSvg from "./CartIconSvg";
import ChatIconSvg from "./ChatIconSvg";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import Button from "./Button";
import { useRouter } from "next/router";
import Image from "next/image";

function User({ cartClickHandler, cartItemsLength }) {
  const [show, setShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showIconsOnSmallScreen, setShowIconsOnSmallScreen] = useState(false);
  const { user, isLoading } = useSelector((store) => store.auth);
  const profile = useSelector((store) => store.profile);
  const ref = useOutsideClick(handleClose);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const router = useRouter();

  const instructorid = useSelector((state) => state.singleInstructor.id);

  console.log("Instructor ki id h ye : ", instructorid);

  // const instructorPath = instructorid ? "/dashboard" : "/details-upload";
  const handleNavigation = () => {
    const path = instructorid ? "/dashboard" : "/details-upload";

    try {
      router.push(path);
    } catch (error) {
      console.error("Error navigating to the path:", error);
      // Optional: Display an alert or a message to the user
      alert("Unable to navigate. Please try again later.");
    }
  };

  function handleClose() {
    if (!show) return;
    setShow(false);
  }

  function handleLogout() {
    if (session) {
      dispatch(remove());
      signOut();
    }
    if (user) {
      dispatch(remove());
      dispatch(logout());
    }
  }
  let notification = [
    {
      id: 1,
      name: "Aahil Alvani",
      description: "This is description ",
    },
    {
      id: 2,
      name: "Aahil Alvani",
      description: "This is description",
    },
    {
      id: 3,
      name: "Aahil Alvani",
      description: "This is description",
    },
    {
      id: 4,
      name: "Aahil Alvani",
      description: "This is description",
    },
  ];
  useEffect(() => {
    if (status === "authenticated" || user) {
    }
  }, [status, user]);

  if (status === "loading" || isLoading) {
    return null;
  }

  const isAdminRoute = router.pathname.includes("/admin");

  if (status === "authenticated" || user) {
    return (
      <div className="relative inline-flex items-center justify-center gap-3 text-dark-svg">
        {!isAdminRoute && (
          <>
            <button className="hidden w-[100%] md:flex">
              <CartIconSvg
                clickHandler={cartClickHandler}
                className="h-7 w-7"
              />
              {cartItemsLength ? (
                <div className="flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-[100%] bg-red-600 text-sm text-white">
                  {cartItemsLength}
                </div>
              ) : null}
            </button>
            <button
              className="hidden md:block"
              onClick={() => {
                setShowNotification((prevalue) => !prevalue);
                if (show) setShow(false);
              }}
            >
              <BellIconSvg className="h-7 w-7" />
            </button>
            <button className="hidden md:block">
              <ChatIconSvg className="h-7 w-7" />
            </button>
          </>
        )}
        <div
          ref={ref}
          className="action relative flex items-center justify-center"
        >
          <button
            onClick={() => {
              setShow((prevValue) => !prevValue);
              if (showNotification) setShowNotification(false);
            }}
          >
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                className="h-7 w-7 rounded-full"
                alt="User avatar"
              />
            ) : (
              <Avatar
                firstName={profile.first_name || user.first_name}
                lastName={profile.last_name || user.last_name}
                className="h-7 w-7"
              />
            )}
          </button>
          <div
            className={`absolute -right-6 top-6 z-50 min-w-80 rounded-lg bg-white py-3 shadow-lg transition-all duration-300 sm:right-0 ${show ? "visible translate-y-3 opacity-100" : "invisible translate-y-0 opacity-0"}`}
          >
            <div className="mb-5 flex flex-col items-center justify-center px-5">
              <div
                className="flex items-center justify-center gap-2 transition-all"
                onMouseEnter={() => setShowIconsOnSmallScreen(true)}
                onMouseLeave={() => setShowIconsOnSmallScreen(false)}
              >
                {session?.user?.image ? (
                  <img
                    src={session?.user?.image}
                    className={`z-[2] h-16 w-16 cursor-pointer rounded-full transition-all duration-300 ${showIconsOnSmallScreen ? "translate-x-0" : "translate-x-12 md:translate-x-0"}`}
                    alt="User avatar"
                  />
                ) : (
                  <Avatar
                    firstName={profile.first_name || user.first_name}
                    lastName={profile.last_name || user.last_name}
                    className={`z-[2] h-16 w-16 cursor-pointer transition-all duration-300 ${showIconsOnSmallScreen ? "translate-x-0" : "translate-x-[3.4rem] md:translate-x-0"}`}
                  />
                )}
                {!isAdminRoute && (
                  <>
                    <button
                      className={`transition-all duration-300 md:hidden ${showIconsOnSmallScreen ? "scale-1 translate-x-4 opacity-100" : "translate-x-0 opacity-0"}`}
                    >
                      <ChatIconSvg className="h-7 w-7" />
                    </button>
                    <button
                      className={`transition-all delay-100 duration-300 md:hidden ${showIconsOnSmallScreen ? "scale-1 translate-x-4 opacity-100" : "translate-x-0 opacity-0"}`}
                    >
                      <BellIconSvg className="h-7 w-7" />
                    </button>
                    <button
                      className={`flex transition-all delay-200 duration-300 md:hidden ${showIconsOnSmallScreen ? "scale-1 translate-x-4 opacity-100" : "translate-x-0 opacity-0"}`}
                    >
                      <CartIconSvg
                        clickHandler={cartClickHandler}
                        className="h-7 w-7"
                      />
                      {cartItemsLength ? (
                        <div className="flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-[100%] bg-red-600 text-sm text-white">
                          {cartItemsLength}
                        </div>
                      ) : null}
                    </button>
                  </>
                )}
              </div>
              <p className="text-center font-semibold text-gray-500">
                {session?.user?.name || profile?.first_name}
              </p>
              <p className="text-center text-gray-500">
                {session?.user?.email || profile?.email}
              </p>
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => {
                    router.push("/my-learning");
                  }}
                  className="mt-4 inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Learning
                  <ChevronRightIconSvg className="h-4 w-4" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    router.push("/profile");
                  }}
                  className="mt-1 inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Account Settings
                  <ChevronRightIconSvg className="h-4 w-4" />
                </button>
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
                {/* <Link
                  href={handleNavigation}
                  className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Become a Tutor
                  <ChevronRightIconSvg className="h-4 w-4" />
                </Link> */}
                <button
                  onClick={handleNavigation}
                  className="inline-flex w-full items-center justify-between px-5 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Become a Tutor
                  <ChevronRightIconSvg className="h-4 w-4" />
                </button>
              </li>
              <li className="!mt-5 px-5">
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            </ul>
          </div>
          {/* ________________________________ */}
          <div
            className={`absolute -right-6 top-6 z-50 min-w-80 rounded-lg bg-white px-2 py-3 py-4 shadow-lg transition-all duration-300 sm:right-0 ${showNotification ? "visible translate-y-3 opacity-100" : "invisible translate-y-0 opacity-0"}`}
          >
            <h2 className="text-lg font-bold">Notification</h2>
            <hr />
            <ul className="">
              {notification.map((noti) => (
                <>
                  <li className="flex gap-4 py-6">
                    <div>
                      <Image
                        src="/Avatardisplay.png"
                        width={30}
                        height={30}
                        alt=""
                        className="ml-2 rounded-full"
                      />
                    </div>
                    <div className="w-full self-center">
                      <span className="text-sm font-semibold">{noti.name}</span>
                      <span className="pl-1 text-xs text-[#4A525D]">
                        {noti.description}
                      </span>
                    </div>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
          {/* ________________________________ */}
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="hidden w-full items-center justify-between rounded-lg bg-blue px-4 py-2 text-white lg:flex lg:w-auto"
    >
      Get started
    </Link>
  );
}

export default User;
