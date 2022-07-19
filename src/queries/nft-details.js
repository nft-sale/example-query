import { gql } from "@apollo/client";

export const title = "NFT Details | 詳情頁";

export const query = gql`
  query NFTDetails($collection: ID!, $tokenId: ID!) {
    nftcontract(id: $collection) {
      name
      symbol
      creator {
        id
      }
      standard

      nfts(where: { tokenId: $tokenId }) {
        # Getting NFT metadata from the URI
        uri

        activeListings {
          type
          currency {
            address
            symbol
            decimals
          }
          price

          bids(where: { status: open }) {
            price
            bidder {
              id
            }
          }
        }

        activities(orderBy: timestamp, orderDirection: desc) {
          type
          from
          to
          timestamp
        }
      }

      # More from this collection:
      # require to filter out the same tokenId from the front-end
      listings(where: { status: open }, orderBy: id, orderDirection: asc) {
        nft {
          tokenId
          uri
        }
      }
    }

    # For the history of price chart, pricings could be null if no trading records
    analyticDailyCollections(
      where: { collection: $collection }
      orderBy: date
      orderDirection: desc
    ) {
      date
      floorPrice
      priceCeiling
      avgPrice
      volume
    }
  }
`;

export const variables = {
  collection: "0x6A3d4A7555e5f19D405b805Ec5B1d467D07B72E6",
  tokenId: 0,
};

export const order = 3;

export const type = 'page'
