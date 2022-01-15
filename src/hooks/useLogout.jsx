import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsLoading(true);

    // sign the user out
    try {
      await projectAuth.signOut();

      // dispatch login action
      dispatch({ type: "LOGOUT" });

      // update state
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isLoading, logout };
};
