import { gql } from '@apollo/client'

export const title = 'Explore Collections | 探索'

export const query = gql`
### 這邊只能得到 Collection ID, 後續要再加一次 Query NFT 才能得到 uri
query ExploreCollections($date: Int!) {
  # Trending
	analyticDailyCollections(
    where: { date: $date },
    orderBy: volume,
    orderDirection: desc
  ) {
		collection {
      id # 取得 Collection ID 後, 再透過 "Collection Info" Query
    }
  }

  # Top
	nftcontracts(
    first: 10,
    orderBy: volume,
    orderDirection: desc
  ) {
    id # 取得 Collection ID 後, 再透過 "Collection Info" Query
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
        id # 取得 Collection ID 後, 再透過 "Collection Info" Query
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
