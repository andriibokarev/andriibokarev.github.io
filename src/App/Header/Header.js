import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderMain from './HeaderMain/HeaderMain'

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <HeaderNav/>
            <HeaderMain/>
        </header>
    )
}

export default Header