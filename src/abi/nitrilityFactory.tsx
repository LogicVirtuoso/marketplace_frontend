export const nitrilityFactoryAbi: any = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyGuardReentrantCall',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collectionAddr',
        type: 'address',
      },
    ],
    name: 'CollectionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'LicenseBurnt',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'LicenseTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'buyerAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'listedId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'tokenURI',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum NitrilityCommon.EventTypes',
        name: 'eventType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum NitrilityCommon.AccessLevel',
        name: 'accessLevel',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'counts',
        type: 'uint256',
      },
    ],
    name: 'SoldLicenseEvent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'auctionAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'burnSoldLicense',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
    ],
    name: 'fetchArtistAddressForsellerId',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
    ],
    name: 'fetchBalanceOfArtist',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
    ],
    name: 'fetchCollectionAddressOfArtist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'marketOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'marketplaceFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nitrilityRevenue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'listedId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'newTokenURI',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'buyerAddr',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'fPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tPrice',
            type: 'uint256',
          },
          {
            internalType: 'enum NitrilityCommon.ListingType',
            name: 'listingFormatValue',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'infiniteSupply',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'infiniteListingDuration',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'infiniteExclusiveDuration',
            type: 'bool',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'listingStartTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listingEndTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'exclusiveEndTime',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'code',
                type: 'string',
              },
              {
                internalType: 'enum NitrilityCommon.DiscountType',
                name: 'discountType',
                type: 'uint8',
              },
              {
                internalType: 'uint256',
                name: 'percentage',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'fixedAmount',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'infinite',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'endTime',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'actived',
                type: 'bool',
              },
            ],
            internalType: 'struct NitrilityCommon.DiscountCode',
            name: 'discountCode',
            type: 'tuple',
          },
          {
            internalType: 'enum NitrilityCommon.ListingStatus',
            name: 'listed',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
        ],
        internalType: 'struct NitrilityCommon.TemplateType',
        name: 'templateData',
        type: 'tuple',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
      {
        internalType: 'enum NitrilityCommon.EventTypes',
        name: 'eventType',
        type: 'uint8',
      },
      {
        internalType: 'enum NitrilityCommon.AccessLevel',
        name: 'accessLevel',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'counts',
        type: 'uint256',
      },
    ],
    name: 'purchaseLicense',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'refunder',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'reFundOffer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'sellerId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sellerName',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'percentage',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isAdmin',
            type: 'bool',
          },
          {
            internalType: 'enum NitrilityCommon.ReviewStatus',
            name: 'status',
            type: 'uint8',
          },
        ],
        internalType: 'struct NitrilityCommon.ArtistRevenue[]',
        name: 'artistRevenues',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'revenue',
        type: 'uint256',
      },
    ],
    name: 'revenueSplits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'artistAddress',
        type: 'address',
      },
    ],
    name: 'setArtistAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_auctionAddr',
        type: 'address',
      },
    ],
    name: 'setAuctionAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_marketOwner',
        type: 'address',
      },
    ],
    name: 'setMarketOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'socialRevenue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
      },
    ],
    name: 'withdrawFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawMarketRevenue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
