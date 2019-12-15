import React from 'react'

import './sideBar.css'

const SideBar = () => {
    return (
        <div className="content-side-bar">
            <div className="row">
                <div className="col">
                    <div className="side-bar-search">
                        <input className="side-bar-search-plholder" type="text" placeholder="Search"></input>
                        <input className="side-bar-search-btn" type="button"></input>
                    </div>
                    <div className="side-bar-categories">
                        <div className="side-bar-title">Categories</div>
                        <div className="side-bar-categories-items">
                            <div className="side-bar-categories-item">
                                <div className="row justify-content-between">
                                    <div className="side-bar-categories-item-title">Photography</div>
                                    <div className="side-bar-categories-item-value">195</div>
                                </div>
                            </div>
                            <div className="side-bar-categories-item">
                                <div className="row justify-content-between">
                                    <div className="side-bar-categories-item-title">Illustration</div>
                                    <div className="side-bar-categories-item-value">195</div>
                                </div>
                            </div>
                            <div className="side-bar-categories-item">
                                <div className="row justify-content-between">
                                    <div className="side-bar-categories-item-title">Graphic Design</div>
                                    <div className="side-bar-categories-item-value">195</div>
                                </div>
                            </div>
                            <div className="side-bar-categories-item">
                                <div className="row justify-content-between">
                                    <div className="side-bar-categories-item-title">Web design</div>
                                    <div className="side-bar-categories-item-value">195</div>
                                </div>
                            </div>
                            <div className="side-bar-categories-item">
                                <div className="row justify-content-between">
                                    <div className="side-bar-categories-item-title">Videography</div>
                                    <div className="side-bar-categories-item-value">195</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-bar-subscribe">
                        <div className="side-bar-title">Subscribe</div>
                        <input className="side-bar-subscribe-input" type="text" placeholder="Name"></input>
                        <input className="side-bar-subscribe-input" type="text" placeholder="Email"></input>
                        <div className="side-bar-subscribe-btn">subscribe</div>
                        <div className="side-bar-social">
                            <div className="row align-items-center">
                                <div className="side-bar-subscribe-or-line"></div>
                                <div className="side-bar-subscribe-or">or</div>
                                <div className="side-bar-subscribe-or-line"></div>
                            </div>
                            <div className="side-bar-social-icons">
                                <div className="row justify-content-around">
                                    <a href="/"><i className="fab fa-facebook"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                    <a href="/"><i className="fab fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-bar-posts">
                        <div className="side-bar-title">Posts</div>
                        <div className="side-bar-posts-tab">
                            <div className="row">
                                <div className="side-bar-posts-btn side-bar-posts-btn-active recent-btn">Recent</div>
                                <div className="side-bar-posts-btn popular-btn">Popular</div>
                            </div>
                        </div>
                        <div className="side-bar-post">
                            <div className="row">
                                <div className="col-4">
                                    <div className="side-bar-post-img">
                                        <img src="/images/posts/post_1.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="side-bar-post-content">
                                        <div className="side-bar-post-date">Nov 28, 2019</div>
                                        <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="side-bar-post">
                            <div className="row">
                                <div className="col-4">
                                    <div className="side-bar-post-img">
                                        <img src="/images/posts/post_2.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="side-bar-post-content">
                                        <div className="side-bar-post-date">Nov 28, 2019</div>
                                        <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="side-bar-post">
                            <div className="row">
                                <div className="col-4">
                                    <div className="side-bar-post-img">
                                        <img src="/images/posts/post_3.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="side-bar-post-content">
                                        <div className="side-bar-post-date">Nov 28, 2019</div>
                                        <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="side-bar-post">
                            <div className="row">
                                <div className="col-4">
                                    <div className="side-bar-post-img">
                                        <img src="/images/posts/post_4.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="side-bar-post-content">
                                        <div className="side-bar-post-date">Nov 28, 2019</div>
                                        <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-bar-tags">
                        <div className="side-bar-title">Tags</div>
                        <div className="side-bar-tags-margin">
                            <div className="row flex-wrap">
                                <div className="side-bar-tag">
                                    <div className="side-bar-tag-item">photo</div>
                                </div>
                                <div className="side-bar-tag">
                                    <div className="side-bar-tag-item">video</div>
                                </div>
                                <div className="side-bar-tag">
                                    <div className="side-bar-tag-item">art</div>
                                </div>
                                <div className="side-bar-tag">
                                    <div className="side-bar-tag-item">webdesign</div>
                                </div>
                                <div className="side-bar-tag">
                                    <div className="side-bar-tag-item">illustration</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar