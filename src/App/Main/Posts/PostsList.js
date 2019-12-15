import React from 'react'
import PostsListItem from './PostsListItem'
import postsData from './postsData'

import "./PostsListItem.css"


const PostsList = () => {
    return (
        <div>
            <div className="row item-margin flex-wrap">
                {
                    postsData.map(({
                        id,
                        title,
                        description,
                        shortDescription,
                        authorName,
                        date,
                        time,
                        category,
                        tag,
                        comment,
                        like,
                        authorAvatar,
                        image,
                    })=>(
                        <div className="col-4 item-padding" key={id}>
                            <PostsListItem
                                title={title}
                                description={description}
                                shortDescription={shortDescription}
                                authorName={authorName}
                                date={date}
                                time={time}
                                category={category}
                                tag={tag}
                                comment={comment}
                                like={like}
                                authorAvatar={authorAvatar}
                                image={image}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default PostsList
