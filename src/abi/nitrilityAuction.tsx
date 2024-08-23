export const nitrilityAuctionAbi: any = [
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
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'listedId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'buyerAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'offerPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'offerDuration',
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
        internalType: 'enum NitrilityCommon.EventTypes',
        name: 'eventType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
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
      {
        indexed: false,
        internalType: 'bool',
        name: 'isSeller',
        type: 'bool',
      },
    ],
    name: 'OfferEvent',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'sellerId',
        type: 'string',
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
    ],
    name: 'acceptOffer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'discountCode',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'newTokenURI',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sellerId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
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
        ],
        internalType: 'struct NitrilityAuction.LicensesData[]',
        name: 'licenseDatas',
        type: 'tuple[]',
      },
    ],
    name: 'calculateTotalPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
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
        internalType: 'uint256',
        name: 'offerDuration',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'tokenURI',
        type: 'string',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
      {
        internalType: 'enum NitrilityCommon.AccessLevel',
        name: 'accessLevel',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'buyerAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'offerPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'counts',
        type: 'uint256',
      },
    ],
    name: 'createOfferData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'offerPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'offerDuration',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'tokenURI',
        type: 'string',
      },
      {
        internalType: 'enum NitrilityCommon.EventTypes',
        name: 'eventType',
        type: 'uint8',
      },
    ],
    name: 'editOffer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fetchAllOffers',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyerAddr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
          {
            internalType: 'enum NitrilityCommon.EventTypes',
            name: 'eventType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
        ],
        internalType: 'struct NitrilityAuction.OfferData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_buyer',
        type: 'address',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
    ],
    name: 'fetchAllOffersOfBuyer',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyerAddr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
          {
            internalType: 'enum NitrilityCommon.EventTypes',
            name: 'eventType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
        ],
        internalType: 'struct NitrilityAuction.OfferData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_listedId',
        type: 'uint256',
      },
    ],
    name: 'fetchAllOffersOfSeller',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyerAddr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
          {
            internalType: 'enum NitrilityCommon.EventTypes',
            name: 'eventType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
        ],
        internalType: 'struct NitrilityAuction.OfferData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
    ],
    name: 'fetchCurrentOfferPrice',
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
        name: '_buyer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_listedId',
        type: 'uint256',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
    ],
    name: 'fetchOfferOfBuyer',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyerAddr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
          {
            internalType: 'enum NitrilityCommon.EventTypes',
            name: 'eventType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
        ],
        internalType: 'struct NitrilityAuction.OfferData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_listedId',
        type: 'uint256',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
    ],
    name: 'fetchOffersOfSeller',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'offerId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyerAddr',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tokenURI',
            type: 'string',
          },
          {
            internalType: 'enum NitrilityCommon.EventTypes',
            name: 'eventType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
        ],
        internalType: 'struct NitrilityAuction.OfferData[]',
        name: '',
        type: 'tuple[]',
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
    name: 'nitrilityFactory',
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
        internalType: 'uint256',
        name: 'offerDuration',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'tokenURI',
        type: 'string',
      },
      {
        internalType: 'enum NitrilityCommon.LicensingType',
        name: 'licensingType',
        type: 'uint8',
      },
      {
        internalType: 'enum NitrilityCommon.AccessLevel',
        name: 'accessLevel',
        type: 'uint8',
      },
    ],
    name: 'placeOffer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'discountCode',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'newTokenURI',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sellerId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'listedId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'offerDuration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'counts',
            type: 'uint256',
          },
          {
            internalType: 'enum NitrilityCommon.LicensingType',
            name: 'licensingType',
            type: 'uint8',
          },
          {
            internalType: 'enum NitrilityCommon.AccessLevel',
            name: 'accessLevel',
            type: 'uint8',
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
        ],
        internalType: 'struct NitrilityAuction.LicensesData[]',
        name: 'licenseDatas',
        type: 'tuple[]',
      },
    ],
    name: 'purchaseLicenses',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'offerId',
        type: 'uint256',
      },
    ],
    name: 'rejectOffer',
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
        internalType: 'address',
        name: '_nitrilityFactory',
        type: 'address',
      },
    ],
    name: 'setFactory',
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
]
