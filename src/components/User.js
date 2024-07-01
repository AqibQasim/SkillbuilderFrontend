import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function User() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session)
    return (
      <button
        onClick={() => router.push("/signup")}
        className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg"
      >
        Get started
      </button>
    );

  return <div>{session.user.name}</div>;
}

export default User;
