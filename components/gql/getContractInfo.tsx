import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

// Define types for your GraphQL response
interface ZoraToken {
  address: string;
  tokenId: string;
  totalSupply: number;
  totalMinted: number;
  maxSupply: number;
  metadata: {
    image: string;
    animationUrl: string;
  };
  salesStrategies: {
    fixedPrice: {
      maxTokensPerAddress: number;
      saleStart: number;
      saleEnd: number;
      pricePerToken: number;
      configAddress: string;
      fundsRecipient: string;
      txn: {
        timestamp: number;
      };
    };
  };
}

interface QueryResponse {
  zoraCreateTokens: ZoraToken[];
}

// Define types for your GraphQL variables
interface QueryVariables {
  collectionAddress?: string;
  tokenId?: number;
}

// Define your GraphQL query
const GET_CONTRACT_INFO = gql`
  query zoraCreateToken($collectionAddress: String!, $tokenId: BigInt!) {
    zoraCreateTokens(
      where: { contract: $collectionAddress, tokenId: $tokenId }
    ) {
      address
      tokenId
      totalSupply
      totalMinted
      maxSupply
      metadata {
        image
        animationUrl
      }
      salesStrategies {
        fixedPrice {
          maxTokensPerAddress
          saleStart
          saleEnd
          pricePerToken
          configAddress
          fundsRecipient
          txn {
            timestamp
          }
        }
      }
    }
  }
`;

// Create a function that uses the useQuery hook
const useGetContractInfo = (variables: QueryVariables) => {
  return useQuery<QueryResponse, QueryVariables>(GET_CONTRACT_INFO, {
    variables,
  });
};

export default useGetContractInfo;
