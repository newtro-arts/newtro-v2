import getIpfsLink from "./ipfs/getIpfsLink";

export default function getValidImage(url: string) {
  return url.includes("ipfs")
    ? getIpfsLink(url)
    : `https://storage.newtro.xyz/${url}`;
}
