
export default function Link(props) {
  return (
    <li className="link">
      <span className="full-url">{props.fullUrl}</span>
      <span className="short-url"><a target="blank" href={props.shortUrl}>{props.shortUrl}</a></span>
      <button className="copy-button">Copy</button>
    </li>
  )
}
