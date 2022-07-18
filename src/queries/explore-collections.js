import { gql } from '@apollo/client'

export const title = 'Explore Collections | 探索'

export const query = gql`
query ExploreCollections {
  nftcontracts(first: 30) {
    address
    name
    symbol
  }
}
`

export const order = 1
