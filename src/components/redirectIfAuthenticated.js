// components/redirectIfAuthenticated.js
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const redirectIfAuthenticated = (WrappedComponent, redirectPath = '/home') => {
  return (props) => {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        if (user) {
          router.replace(redirectPath);
        } else {
          setIsLoading(false);
        }
      }
    }, [user, router, redirectPath]);

    if (isLoading) {
      return null; // or a loading spinner if you prefer
    }

    return !user ? <WrappedComponent {...props} /> : null;
  };
};

export default redirectIfAuthenticated;
