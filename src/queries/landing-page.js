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
