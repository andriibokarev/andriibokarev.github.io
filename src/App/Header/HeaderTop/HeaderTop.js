import React from 'react'

import './headerTop.css'

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="header-top-social">
                        <a href="/"><i className="fab fa-facebook"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-google-plus"></i></a>
                    </div>
                    <div className="header-top-sign-in row align-items-center">
                        <div className="sign-in-icon">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="sign-in-title">sign in</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop