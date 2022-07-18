import { gql } from '@apollo/client'

export const title = 'Rankings | 排行榜'

export const query = gql`
query Rankings {
  nftcontracts(first: 30) {
    address
    name
    symbol
  }
}
`

export const order = 2
