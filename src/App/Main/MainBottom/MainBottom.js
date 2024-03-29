import React from 'react'
import {Link} from 'react-router-dom'

import './mainBottom.css'

const MainBottom = () => {
    return (
        <div className="main-bottom">
            <div className="container">
                <div className="main-more-btn">
                    <div className="row flex-end align-items-center">
                        <div className="more-btn-title">More</div>
                        <Link to="/blog">
                            <div className="more-btn-arrow">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBottom