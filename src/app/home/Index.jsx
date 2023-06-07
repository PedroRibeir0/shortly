'use client'
import Header from './Header'
import Info from './Info'
import ShortLinks from './ShortLinks'
import '../../css/home/home.css'

export default function Index() {
  return (
    <div className='app'>
      <Header/>
      <Info/>
      <ShortLinks/>
    </div>
  )
}
