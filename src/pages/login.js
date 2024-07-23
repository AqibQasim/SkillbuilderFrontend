import Login from "@/components/Login";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
function login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Login />
    </div>
  );
}

export default redirectIfAuthenticated(login, "/profession");
