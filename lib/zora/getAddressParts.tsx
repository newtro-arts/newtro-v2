const getAddressParts = (combinedAddress: string) => {
  if (!combinedAddress) return {};
  const [network, address] = combinedAddress.split(":");
  return {
    network,
    address,
  };
};

export default getAddressParts;
