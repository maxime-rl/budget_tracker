import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

/**
 * @name useRegister
 * @returns {object}
 */
export const useRegister = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (email, password, displayName) => {
    setIsLoading(true);

    try {
      // user register
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error("we are having a problem completing the registration");
      }

      // user name
      await response.user.updateProfile({ displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

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
    // cleanup function
    return () => setIsCancelled(true);
  }, []);

  return { error, isLoading, register };
};

export default useRegister;
