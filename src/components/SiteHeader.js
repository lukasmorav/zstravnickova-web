import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div className='site-header'>
        <h1>ZŠ Trávníčkova</h1>
        <nav>
            <Link to="/canteen"><h2>Ve škole</h2></Link>
            <Link to="/"><h2>Pedagogický sbor</h2></Link>
            <Link to="/"><h2>Úvod</h2></Link>
            <Link to="/"><h2>Bakaláři</h2></Link>
            <Link to="/"><h2>Kontakty</h2></Link>
        </nav>
    </div>
  )
}
