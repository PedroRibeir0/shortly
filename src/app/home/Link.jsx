import { useState } from 'react'

export default function Link(props) {

  const [isCopied, setIsCopied] = useState(false)

  function copy(){
    navigator.clipboard.writeText(props.shortUrl)
    setIsCopied(true)
  }

  const copyButton = {
    backgroundColor: isCopied ? '#3b3054'  : '#2acfcf',
    content: isCopied ? 'Copied!' : 'Copy'
  }

  return (
    <li className="link" key={props.k}>
      <span className="full-url">{props.fullUrl}</span>
      <span className="short-url"><a target="blank" href={props.shortUrl}>{props.shortUrl}</a></span>
      <button onClick={copy} className="copy-button" style={copyButton}>{copyButton.content}</button>
    </li>
  )
}
