import React from 'react'
import { useQuery } from '@apollo/client'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const defaultVariables = {
  account: '0xbbbb690a9B1ACdbF0e7BAE4f9aCB457703f02556',
}

const LoadingJSON = `
{
  "loading": true
}
`

function Result({ query, variables = defaultVariables }) {
  const { loading, error, data } = useQuery(query, {
    variables,
  })

  if (loading) return (
    <SyntaxHighlighter
      showLineNumbers
      language="json"
      style={theme}
    >
      { LoadingJSON }
    </SyntaxHighlighter>
  )

  if (error) return (
    <SyntaxHighlighter
      showLineNumbers
      language="json"
      style={theme}
    >
      { JSON.stringify({ error }) }
    </SyntaxHighlighter>
  )

  return (
    <SyntaxHighlighter
      showLineNumbers
      language="json"
      style={theme}
      wrapLines
    >
      {
        JSON.stringify(data, null, 2)
      }
    </SyntaxHighlighter>
  )
}

export default Result
