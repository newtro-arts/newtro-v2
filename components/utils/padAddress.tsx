export default function padEthereumAddress(address: string) {
  // Validate that it's a potentially valid Ethereum address
  if (!address.startsWith("0x") || address.length !== 42) {
    throw new Error("Invalid Ethereum address");
  }

  const padding = "0".repeat(24); // 24 characters (12 bytes)
  return `0x${padding}${address.slice(2)}`;
}
