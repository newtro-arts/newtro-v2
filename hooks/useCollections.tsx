import { useState, useEffect } from "react";

const useCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("/api/collections");
        if (!response.ok) {
          throw new Error("Failed to fetch collections");
        }
        const data = await response.json();
        // TODO: fetch each contractURI from the data.data[i].args.contractURI
        // TODO: add metadata property to collections array

        setCollections(data.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return { collections };
};

export default useCollections;
