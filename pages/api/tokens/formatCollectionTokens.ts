import format from "@/lib/format";
import { MintableReturn } from "@zoralabs/protocol-sdk/dist/mint/types";

export default function formatCollectionTokens(
  collectionTokens: { tokens: MintableReturn[] }[]
) {
  return format(collectionTokens
    .flatMap(tokens => tokens.tokens)
    .map(token => token.token)
    .toSorted((a, b) => {
      if (a.totalMinted > b.totalMinted) return -1;
      if (a.totalMinted < b.totalMinted) return 1;
      return 0;
    })
  );
}