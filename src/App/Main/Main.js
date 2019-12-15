import React from 'react'
import {Route} from 'react-router-dom'

import PostsList from './Posts/PostsList'
import SortBlog from './SortBlog/SortBlog'
import SideBar from './SideBar/SideBar'
import AboutPage from './AboutPage/AboutPage'
import BlogPage from './BlogPage/BlogPage'
import PhotosPage from './PhotosPage/PhotosPage'
import VideosPage from './VideosPages/VideosPage'
import StoriesPage from './StoriesPage/StoriesPage'

import './main.css'

const Main = () => {
    return (
        <main className="main">
            <SortBlog/>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="content-main">
                                <Route path="/" exact render={()=>(
                                    <PostsList/>
                                )}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/blog" component={BlogPage}/>
                                <Route path="/photos" component={PhotosPage}/>
                                <Route path="/videos" component={VideosPage}/>
                                <Route path="/stories" component={StoriesPage}/>
                            </div>
                            <div className="main-bottom">
                                <div className="container">
                                    <div className="main-more-btn">
                                        <div className="row flex-end align-items-center">
                                            <div className="more-btn-title">More</div>
                                            <div className="more-btn-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main