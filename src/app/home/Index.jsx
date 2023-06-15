'use client'
import Header from './Header'
import Info from './Info'
import ShortLinks from './ShortLinks'
import Link from './Link'
import Statistics from './Statistics'
import Footer from './Footer'
import '../../css/home/home.css'
import { useState } from 'react'

export default function Index() {

  const [links, setLinks] = useState([
    {url: 'https://www.wappalyzer.com/upgraded/?utm_source=upgraded&utm_medium', shortUrl: 'https://rel.ink/k4Pixy'},
    {url: 'https://www.wappalyzer.com/upgraded/?utm_source=upgraded&utm_medium', shortUrl: 'https://rel.ink/k4Pixo'}
  ])

  

  return (
    <div className='app'>
      <section className='bg-1'>
        <Header/>
        <Info/>
      </section>
      <section className='bg-2'>
        <ShortLinks/>
        <ul className='links'>
          {links.map(item=>{
            return <Link 
              key={item.shortUrl}
              fullUrl={item.url}
              shortUrl={item.shortUrl}
            />
          })}
        </ul>
        <Statistics/>
        <Footer/>
      </section>
    </div>
  )
}
