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
    id # 取得 Collection ID 後, 再透過 "Collection Info" Query
    floorPrice
		priceCeiling
    avgPrice
    volume
  }
}
`

export const order = 2

export const type = 'page'
