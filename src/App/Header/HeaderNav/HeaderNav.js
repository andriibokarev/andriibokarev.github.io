import React from 'react'
import {Link} from 'react-router-dom'

import './headerNav.css'

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                        <div className="logo">
                            <a href="/"><span>My</span>Blog</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <nav>
                            <ul className="main-menu row justify-content-between">
                                <li className="main-menu-item"><Link to="/about">About</Link></li>
                                <li className="main-menu-item"><Link to="/blog">Blog</Link></li>
                                <li className="main-menu-item"><Link to="/photos">Photos</Link></li>
                                <li className="main-menu-item"><Link to="/videos">Videos</Link></li>
                                <li className="main-menu-item"><Link to="/stories">Stories</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="header-search">
                            <input className="header-search-plholder" type="text" placeholder="search"></input>
                            <input className="header-search-btn" type="button"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav