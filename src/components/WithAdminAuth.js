"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const WithAdminAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem("adminAuth");
      if (!isAuthenticated) {
        router.push("/admin/login");
      }
    }, [router]); // Include router in the dependency array

    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.displayName = `WithAdminAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default WithAdminAuth;
