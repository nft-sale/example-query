import { gql } from '@apollo/client'

export const title = 'Rankings | 排行榜'

export const query = gql`
query Rankings {
  nftcontracts(
    first: 30
    skip: 0,
    orderBy: volume,
    orderDirection: desc
  ) {
    id
    name
    symbol
    creator
    uri
    floorPrice
		priceCeiling
    avgPrice
    volume
  }
}
`

export const order = 2

export const type = 'page'
