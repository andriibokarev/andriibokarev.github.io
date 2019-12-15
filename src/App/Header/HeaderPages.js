import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderNav from './HeaderNav/HeaderNav'

import './headerPages.css'
import './header.css'

const HeaderPages = () => {
    return (
        <header className="header-pages">
            <HeaderTop/>
            <HeaderNav/>
        </header>
    )
}

export default HeaderPages