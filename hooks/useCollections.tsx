import fetchCollectionsWithMetadata from "@/lib/fetchCollectionsWithMetadata";
import { useState, useEffect } from "react";

const useCollections = () => {
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionsWithMetadata = await fetchCollectionsWithMetadata();
      if (!collectionsWithMetadata) return;
      setCollections(collectionsWithMetadata);
    };

    fetchCollections();
  }, []);

  return { collections };
};

export default useCollections;
