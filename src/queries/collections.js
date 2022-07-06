import { gql } from '@apollo/client'

export const title = 'Get Collections'

export const query = gql`
query Collections {
  nftcontracts(first: 30) {
    address
    name
    symbol
  }
}
`
