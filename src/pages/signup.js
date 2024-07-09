import Signup from "@/components/Signup";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";

function signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-4">
      <Signup />
    </div>
  );
}

export default redirectIfAuthenticated(signup);
