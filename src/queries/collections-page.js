import { gql } from '@apollo/client'

export const title = 'Collection 頁'

export const query = gql`
query CollectionPage($collection: ID!) {
  nftcontract(id: $collection) {
    address
    name
    symbol
    creator

    # Items (Filter: all)

    nfts(
      first: 10,
      skip: 0
    ) {
      uri
      tokenId
      holders(first: 1, orderBy: amount, orderDirection: desc) {
        account {
          id
        }
      }
    }

    # Items (Filter: listing-only)

    listings(
      first: 10,
      skip: 0,
      orderBy: price,
      orderDirection: asc
    ) {
    	id
      nft { id }
      owner { id }
    }
  }

  # Activities:

  listings(
    where: { collection: $collection },
    first: 30,
    orderBy: id,
    orderDirection: desc
  ) {
    id
    nft { id }
    owner { id }
  }

  sales(
    where: { id_contains: $collection },
    orderBy: timestamp,
    orderDirection: desc
  ) {
    id
    amount
    timestamp
    currency {
      address
      name
      symbol
    }
    price
    type
  }
}
`

export const variables = {
  collection: '0xa4606025191b5ede06d1e0a3609b8f386e9bd908',
}

export const order = 4

export const type = 'page'
