const fetchCreators = async () => {
  try {
    const response = await fetch("/api/creators");
    if (!response.ok) {
      throw new Error("Failed to fetch creators");
    }
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchCreators;
