import { gql } from '@apollo/client'

export const title = 'Collection Info'

export const query = gql`
query CollectionInfo($collection: ID!) {
  nftcontract(id: $collection) {
    address
    name
    symbol
    creator

    nfts(first: 1, orderBy: tokenId, orderDirection: asc) {
      tokenId
      uri
    }
  }
}
`

export const variables = {
  collection: "0xa4606025191b5ede06d1e0a3609b8f386e9bd908",
}

export const order = 101

export const type = 'util'