import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"



const Header = () => {
  const [click, setClick] = useState(false)

  

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Anasayfa</Link>
            </li>
            <li>
              <Link to='/courses'>Bütün Kurslar</Link>
            </li>
            <li>
              <Link to='/about'>Hakkımızda</Link>
            </li>
            <li>
              <Link to='/team'>Takım</Link>
            </li>
            <li>
              <Link to='/pricing'>Fiyatlandırma</Link>
            </li>
            <li>
              <Link to='/journal'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>İletişim</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>SERTİFİKA ALIN</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header