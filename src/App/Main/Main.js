import React from 'react'
import {Route} from 'react-router-dom'

import PostsList from './Posts/PostsList'
import SortBlog from './SortBlog/SortBlog'
import MainBottom from './MainBottom/MainBottom'
import SideBar from './SideBar/SideBar'
import AboutPage from './AboutPage/AboutPage'
import BlogPage from './BlogPage/BlogPage'
import PhotosPage from './PhotosPage/PhotosPage'
import VideosPage from './VideosPages/VideosPage'
import StoriesPage from './StoriesPage/StoriesPage'
import PostPage from './Posts/PostPage'

import './main.css'

const Main = () => {
    return (
        <main className="main">
            <Route path="/" exact render={()=>(
                <SortBlog/>
            )}/>
            <Route path="/blog" exact render={()=>(
                <SortBlog/>
            )}/>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="content-main">
                                <Route path="/" exact render={()=>(
                                    <PostsList/>
                                )}/>
                                <Route path="/blog/:postId" component={PostPage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/blog" exact render={()=>(
                                    <BlogPage/>
                                )}/>
                                <Route path="/photos" component={PhotosPage}/>
                                <Route path="/videos" component={VideosPage}/>
                                <Route path="/stories" component={StoriesPage}/>
                            </div>
                            <Route path="/" exact render={()=>(
                                <MainBottom/>
                            )}/>
                            <Route path="/blog" exact render={()=>(
                                <MainBottom/>
                            )}/>
                            <Route path="/photos" exact render={()=>(
                                <MainBottom/>
                            )}/>
                            <Route path="/videos" exact render={()=>(
                                <MainBottom/>
                            )}/>
                            <Route path="/stories" exact render={()=>(
                                <MainBottom/>
                            )}/>
                            <Route path="/blog/:postId" component={MainBottom}/>
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