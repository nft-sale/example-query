import { gql } from '@apollo/client'

export const title = 'Use Profile | 個人中心'

export const query = gql`
query UserProfile($account: String!) {
  account(id: $account) {
    id
    nfts {
      amount
      nft {
        contract {
          name
          symbol
          address
        }
        uri
      }
    }
    bids(where: { status: "open" }) {
      id
    	nft {
        uri
      }
    }
    listings(where: { status: "open" }) {
      id
      nft {
        uri
      }
    }
  }
}
`

export const variables = {
  account: '0xbbbb690a9B1ACdbF0e7BAE4f9aCB457703f02556'
}

export const order = 5

export const type = 'page'
