import { useEffect } from "react";
import { BiSolidError } from "react-icons/bi";

function ErrorMessage({
  showError = false,
  setShowError = () => {},
  errorMessage = "pass a setShowError function to clear the state",
}) {
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 4000); // Set to 4 seconds

      // Cleanup
      return () => clearTimeout(timer);
    }
  }, [showError, setShowError]);

  return (
    <div
      className={`fixed left-1/2 top-4 flex -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 shadow-lg transition-all duration-500 ease-in-out ${
        showError
          ? "w-[unset] translate-y-0 opacity-100"
          : "w-0 -translate-y-5 opacity-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <span className="mr-2 text-status-red">
        <BiSolidError />
      </span>
      <p>{errorMessage}</p>
    </div>
  );
}

export default ErrorMessage;
