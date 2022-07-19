import { gql } from '@apollo/client'

export const title = 'Landing Page | 首頁'

export const query = gql`
query LandingPage($date: Int!) {
  analyticDailyCollections(
    where: {
      date: $date
    }
    orderBy: volume
    orderDirection: desc
  ) {
    collection {
      id # 取得 Collection ID 後, 再透過 "Collection Info" Query
    }
    date
    floorPrice
    priceCeiling
    avgPrice
    volume
  }
}
`

export const variables = {
  date: 1657843200,
}

export const order = 0

export const type = 'page'
