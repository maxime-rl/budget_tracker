import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * @name useAuthContext
 * @returns {object}
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
};

export default useAuthContext;
