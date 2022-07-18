import { gql } from '@apollo/client'

export const title = 'Collection'

export const query = gql`
query CollectionInfo {
  nftcontracts(first: 30) {
    address
    name
    symbol
  }
}
`

export const order = 4
