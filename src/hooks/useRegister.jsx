import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (email, password, name) => {
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
      await response.user.updateProfile({ name });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, register };
};
