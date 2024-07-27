import { AbiEvent } from 'viem';

export const setupNewContractEventAbi = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: 'address',
      name: 'newContract',
      type: 'address',
    },
    {
      indexed: true,
      internalType: 'address',
      name: 'creator',
      type: 'address',
    },
    {
      indexed: true,
      internalType: 'address',
      name: 'defaultAdmin',
      type: 'address',
    },
    {
      indexed: false,
      internalType: 'string',
      name: 'contractURI',
      type: 'string',
    },
    {
      indexed: false,
      internalType: 'string',
      name: 'name',
      type: 'string',
    },
    {
      components: [
        {
          internalType: 'uint32',
          name: 'royaltyMintSchedule',
          type: 'uint32',
        },
        {
          internalType: 'uint32',
          name: 'royaltyBPS',
          type: 'uint32',
        },
        {
          internalType: 'address',
          name: 'royaltyRecipient',
          type: 'address',
        },
      ],
      indexed: false,
      internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
      name: 'defaultRoyaltyConfiguration',
      type: 'tuple',
    },
  ],
  name: 'SetupNewContract',
  type: 'event',
} as AbiEvent;
