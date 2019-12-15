import React from 'react'
import postsData, { getPostsMap } from './postsData'

const PostPage = ({
    match,
    postsMap = getPostsMap(postsData)
}) => {
    console.log(match)
    return(
        <div>
            <h1 className="post-title">{postsMap[match.params.postId].title} </h1>
            <p>{postsMap[match.params.postId].description}</p>
        </div>
    )
}

export default PostPage
