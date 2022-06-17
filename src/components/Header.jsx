import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

export default function Header({active, clickFunc}) {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__row'>

                    <div className='header__logo'>
                        <Link to="/"><img src={logo} alt="Anna Li Art" /></Link>
                    </div>

                    <div className={active ? 'header__burger show' : 'header__burger'} onClick={clickFunc}>
                        <span></span>
                    </div>

                    <div className={active ? 'header__nav show' : 'header__nav'}>
                        <nav className='nav link'>
                            <ul className='header__list' onClick={clickFunc}>
                                <li><Link to="/">Artworks</Link></li>
                                <li><Link to="/press">Press</Link></li>
                                <li><Link to="/about">Biography</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
}
