
export default function ShortLinks() {

  const style = {
    backgroundImage : 'url("/images/bg-shorten-mobile.svg")'
  }

  return (
    <div className="short-links" style={style}>
      <input className="link-input" type="text" placeholder="Shorten a link here..."/>
      <button className="shorten-it-button">Shorten It!</button>
    </div>
  )
}
