import { maxHeaderSize } from "http"

export default function Info() {
  return (
    <section className="info">
        <img src={'./illustration-working.svg'} alt="" />
        <div className="call-to-action">
            <h1>More than just shorter links</h1>
            <p>Bild your brand's recognition and get detailed insights on how your links are performing</p>
            <button className="get-started">Get Started</button>
        </div>
    </section>
  )
}

