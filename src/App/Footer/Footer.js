import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-galery">
                <div className="row">
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_9.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_8.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_7.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_6.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_5.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-galery-img">
                            <img src="/images/posts/post_4.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-subscribe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="footer-subscribe-title">Subscribe to our newsletter</div>
                        </div>
                        <div className="col-4">
                            <div className="footer-subscribe-block">
                                <input className="footer-subscribe-input" type="text" placeholder="Email Adress"></input>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-subscribe-btn">subscribe</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-block">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="footer-menu">
                                    <nav>
                                        <ul className="row flex-start align-items-center">
                                            <li className="footer-menu-item"><a href="/">About</a></li>
                                            <li className="footer-menu-item"><a href="/">Blog</a></li>
                                            <li className="footer-menu-item"><a href="/">Photos</a></li>
                                            <li className="footer-menu-item"><a href="/">Videos</a></li>
                                            <li className="footer-menu-item"><a href="/">Stories</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer-copyright">© Blog Prolect 2019</div>
                            </div>
                            <div className="col-3">
                                <div className="footer-social">
                                    <div className="row flex-end">
                                        <a href="/"><i className="fab fa-facebook"></i></a>
                                        <a href="/"><i className="fab fa-twitter"></i></a>
                                        <a href="/"><i className="fab fa-instagram"></i></a>
                                        <a href="/"><i className="fab fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer