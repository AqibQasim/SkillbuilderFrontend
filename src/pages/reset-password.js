import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import ResetPassword from "@/components/ResetPassword";
function forgotPassword() {
  return (
    <div className="flex-col min-h-screen items-center justify-center bg-gray-100">
       <div className="flex justify-between items-center px-12 py-6 shadow-md bg-gray-100 border-b border-y-gray-300 ">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="logo" className="h-8"   />
        </div>
        </div>
      <ResetPassword />
    </div>
  );
}

export default forgotPassword;
