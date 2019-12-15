import React from 'react'

import './headerMain.css'

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="header-subtitle">Life is a journey</div>
                        <div className="header-title">My Adventure World</div>
                        <div className="header-description">Immerse yourself in a world of new experiences and unsurpassed landscapes</div>
                    </div>
                </div>
                <div className="btn-read-more">
                    <a href="/">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain