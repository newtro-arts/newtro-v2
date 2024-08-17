import { useEffect, useState } from "react";

const useCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch("/api/creators");
        if (!response.ok) {
          throw new Error("Failed to fetch creators");
        }
        const data = await response.json();
        setCreators(data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreators();
  }, []);

  return { creators };
};

export default useCreators;
