import { gql } from '@apollo/client'

export const title = 'Get Collection NFTs'

export const query = gql`
query Collection($collectionId: ID!) {
  nftcontract(id: $collectionId) {
    address
    name
    symbol

    nfts {
      uri
    }
  }
}
`

export const variables = {
  collectionId: '0x242fb90ea4afa98c03b30bd8a79feee6a7e06cea',
}
