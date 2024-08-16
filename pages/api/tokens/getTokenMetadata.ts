import getIpfsLink from "@/lib/ipfs/getIpfsLink";

interface URIReturn {
  name: string,
  description: string,
  image: `ipfs://${string}`,
  content: { mime: string, uri: `ipfs://${string}` }
};

export default function getTokenMetdata(tokens: any[]) {
  return Promise.all(
    tokens.map(async token => {
      const res = await fetch(getIpfsLink(token.tokenURI));
      if (!res.ok) console.error(res.status, res.statusText);
      const data: URIReturn = await res.json();

      return {
        id: null,
        dropId: null,
        name: data.name,
        description: data.description,
        address: token.contract.address,
        tokenId: token.tokenId,
        webAssets: {
          previewAsset: {
            previewImage: data.image,
            mime: ''
          },
          originalAsset: {
            originalAsset: data.image,
            mime: ''
          }
        },
        totalSupply: token.totalMinted,
        saleStart: token.salesConfig.saleStart,
        saleEnd: token.salesConfig.saleStart,
      };
    })
  )
};