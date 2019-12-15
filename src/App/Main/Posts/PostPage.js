import React from 'react'
import postsData, { getPostsMap } from './postsData'
import './postPage.css'

const PostPage = ({
    match,
    postsMap = getPostsMap(postsData)
}) => {
    return(
        <div>
            <h1 className="post-page-title">{postsMap[match.params.postId].title} </h1>
            <div className="post-page-content">
                <div className="post-page-img">
                    <img src={postsMap[match.params.postId].image} alt={postsMap[match.params.postId].tag}></img>
                    <div className="post-page-tag">{postsMap[match.params.postId].tag}</div>
                    <div className="post-page-likes row">
                        <div className="post-page-coment">
                            <div className="row">
                                <div className="post-page-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                </div>
                                <div className="post-coment-quantity">{postsMap[match.params.postId].comment}</div>
                            </div>
                        </div>
                        <div className="post-page-like">
                            <div className="row">
                                <div className="post-page-like-icon">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <div className="post-page-like-quantity">{postsMap[match.params.postId].like}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-page-content-main">
                    <div className="post-page-text">{postsMap[match.params.postId].description}</div>
                    <div className="post-info">
                        <div className="row justify-content-between align-items-center">
                            <div className="post-author row">
                                <div className="post-author-foto">
                                    <img src={postsMap[match.params.postId].authorAvatar} alt={postsMap[match.params.postId].authorName}></img>
                                </div>
                                <div className="post-author-atr">
                                    <div className="post-author-name">{postsMap[match.params.postId].authorName}</div>
                                    <div className="post-date">{postsMap[match.params.postId].date} {postsMap[match.params.postId].time}</div>
                                </div>
                            </div>
                            <div className="post-set">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostPage
