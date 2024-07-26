const ERC721 = {
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "comment",
          type: "string",
        },
        {
          internalType: "address",
          name: "mintReferral",
          type: "address",
        },
      ],
      name: "mintWithRewards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
  ],
};

export default ERC721;
