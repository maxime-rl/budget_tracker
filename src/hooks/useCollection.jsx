import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";

/**
 * @name useCollection
 * @param {string} collection
 * @param {array} _query
 * @returns {string|object}
 */
export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // use a ref to avoid infinite loop in useEffect
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    // handle users query
    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};

export default useCollection;
