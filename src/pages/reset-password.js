import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import ResetPassword from "@/components/ResetPassword";
function forgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ResetPassword />
    </div>
  );
}

export default forgotPassword;
