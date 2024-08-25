import getIpfsLink from "@/lib/ipfs/getIpfsLink";

interface URIReturn {
  name: string;
  description: string;
  image: `ipfs://${string}`;
  content: { mime: string; uri: `ipfs://${string}` };
}

async function getTokenMetdata(tokenURI: string) {
  const res = await fetch(getIpfsLink(tokenURI));
  if (!res.ok) throw Error(res.statusText);
  const data: URIReturn = await res.json();

  return data;
}

export default getTokenMetdata;
