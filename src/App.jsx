import React, { useState, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  base16AteliersulphurpoolLight as queryTheme,
  coy as variablesTheme
} from 'react-syntax-highlighter/dist/esm/styles/prism'

import * as Queries from './queries'
import Result from './Result'
import './App.scss'

function App() {
  const [ selected, select ] = useState(null)
  const [ query, setQuery ] = useState(null)
  const [ variables, setVariables ] = useState(null)

  const onChange = useCallback((ev) => {
    const { value } = ev.target
    if (value !== selected) {
      setQuery(Queries[value].query)
      setVariables(Queries[value].variables ?? null)

      select(value)
    }
  }, [selected, select, setQuery])

  return (
    <div className="app">
      <header className="queries">
        <h3>Example Queries</h3>
        <form name="query" onChange={onChange}>
          {
            Object
              .entries(Queries)
              .sort(([, a], [, b]) => a.order - b.order)
              .map(([key, { title }]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={ selected === key }
                  value={key}
                  readOnly
                />
                { title }
              </label>
            ))
          }
        </form>
      </header>
      <div className="right-wrapper">
        <div className="request">
          <div className="query">
            <h4>Query</h4>
            <SyntaxHighlighter
              showLineNumbers
              language="graphql"
              style={queryTheme}
            >
              {
                query
                  ? query.loc.source.body.trim()
                  : 'query SelectQuery {}'
              }
            </SyntaxHighlighter>
          </div>
          <div className="variables">
            <h4>Variables</h4>
              <SyntaxHighlighter
                language="json"
                style={variablesTheme}
                wrapLines
              >
                {
                  variables
                    ? JSON.stringify(variables, null, 2)
                    : '{}'
                }
              </SyntaxHighlighter>
          </div>
        </div>
        <div className="response">
          <h4>Response</h4>
          {
            query ? <Result query={query} variables={variables} /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default App
