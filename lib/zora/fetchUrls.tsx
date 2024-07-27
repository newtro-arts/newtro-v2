const fetchUrls = async (entries: { url: string; contract: any; owner: string }[]) => {
  const promises = entries.map((entry) =>
    fetch(entry.url)
      .then((response) => response.json())
      .then((data) => ({
        data,
        collectionAddress: entry.contract,
        owner: entry.owner,
      }))
      .catch((error) => {
        console.error(`Failed to fetch ${entry.url}:`, error);
        return null;
      }),
  );

  const response = await Promise.allSettled(promises);

  const filteredResponse = response
    .filter((result) => result.status === 'fulfilled' && result.value !== null)
    .map((result: any) => result.value);

  return filteredResponse;
};

export default fetchUrls;
