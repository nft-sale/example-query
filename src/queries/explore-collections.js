import { gql } from '@apollo/client'

export const title = 'Explore Collections | 探索'

export const query = gql`
query ExploreCollections($date: Int!) {
  # Trending
	analyticDailyCollections(
    where: { date: $date },
    orderBy: volume,
    orderDirection: desc
  ) {
		collection {
      id
      name
      symbol
      creator
      uri
    }
  }

  # Top
	nftcontracts(
    first: 10,
    orderBy: volume,
    orderDirection: desc
  ) {
    id
    name
    symbol
    creator
    uri
  }

  # Categories:
  categories(
    orderBy: level,
    orderDirection: desc,
    where: { level_gt: 0 }
  ) {
    id
    level
    text
    collections {
      contract {
        id
        name
        symbol
        creator
        uri
      }
    }
  }
}
`

export const variables = {
  date: 1657843200,
}

export const order = 1

export const type = 'page'
