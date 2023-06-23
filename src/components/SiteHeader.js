import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../assets/travnickova-skola.jpg'

export default function SiteHeader() { 
  return (
    <div className='site-header'>
      <img src={headerImg} id='header-img'/>
        <h1>ZŠ Trávníčkova</h1>
        <nav>
            <Link to="/canteen">Ve škole</Link>
            <Link to="/">Jídelna</Link>
            <Link to="/">Úvod</Link>
            <Link to="/">Bakaláři</Link>
            <Link to="/">Kontakty</Link>
        </nav>
    </div>
  )
}
