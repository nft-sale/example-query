import { gql } from '@apollo/client'

export const title = 'Get Account NFTs and listings'

export const query = gql`
query Profile($account: String!) {
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
