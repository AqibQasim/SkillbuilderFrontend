import { useState, useEffect } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : "",
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
};
