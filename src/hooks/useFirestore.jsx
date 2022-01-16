import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

/**
 * @name firestoreReducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        success: false,
        isLoading: true,
        error: null,
        document: null,
      };
    case "ERROR":
      return {
        success: false,
        isLoading: false,
        error: action.payload,
        document: null,
      };
    case "ADDED_DOCUMENT":
      return {
        success: true,
        isLoading: false,
        error: null,
        document: action.payload,
      };
    default:
      return state;
  }
};

/**
 * @name useFirestore
 * @param {string} collection
 * @returns {function|object}
 */
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_LOADING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (doc) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};

export default useFirestore;
