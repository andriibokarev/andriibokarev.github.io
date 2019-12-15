import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import "./PostsListItem.css"


class PostsListItem extends Component {

    render() {
        const {
            id,
            title,
            // description,
            shortDescription,
            authorName,
            date,
            time,
            // category,
            tag,
            comment,
            like,
            authorAvatar,
            image,
        } = this.props
        return (
            <div className="content-grid-post post-vertical">
                <div className="post-img post-img-top">
                    <img src={image} alt={tag}></img>
                    <div className="post-tag">{tag}</div>
                    <div className="post-likes row">
                        <div className="post-coment">
                            <div className="row">
                                <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                </div>
                                <div className="post-coment-quantity">{comment}</div>
                            </div>
                        </div>
                        <div className="post-like">
                            <div className="row">
                                <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <div className="post-like-quantity">{like}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-title">
                        <Link to={`/blog/${id}`}>{title}</Link>
                    </div>
                    <div className="post-text post-text-small">{shortDescription}</div>
                    <div className="post-info">
                        <div className="row justify-content-between align-items-center">
                            <div className="post-author row">
                                <div className="post-author-foto">
                                    <img src={authorAvatar} alt={authorName}></img>
                                </div>
                                <div className="post-author-atr">
                                    <div className="post-author-name">{authorName}</div>
                                    <div className="post-date">{date} {time}</div>
                                </div>
                            </div>
                            <div className="post-set">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

PostsListItem.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    shortDescription:PropTypes.string,
    authorName:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    comment:PropTypes.number,
    like:PropTypes.number,
    authorAvatar:PropTypes.string,
    image:PropTypes.string,
}

PostsListItem.defaultProps = {
    description:"No description ...",
    shortDescription:"No description ...",
    comment:0,
    like:0,
    authorAvatar:"/images/authors/author_1.jpg",
    image:"/images/posts/post_1.jpg",
}

export default PostsListItem





