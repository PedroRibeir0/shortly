
export default function ShortLinks() {

  const style = {
    backgroundImage : 'url("/images/bg-shorten-mobile.svg")'
  }

  return (
    <form className="short-links" style={style}>
      <input required className="link-input" type="text" placeholder="Shorten a link here..."/>
      <span className="warning">Please add a link</span>
      <button onClick={e=>{
        e.preventDefault()
      }} className="shorten-it-button">Shorten It!</button>
    </form>
  )
}
