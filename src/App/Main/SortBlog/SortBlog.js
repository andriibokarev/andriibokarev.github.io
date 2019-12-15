import React from 'react'

import './sortBlog.css'

const SortBlog = () => {
    return (
        <div className="sort-blog">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="sort-blog-title">sort blog:</div>
                    </div>
                    <div className="col-10">
                        <div className="sort-blog-items row flex-wrap">
                            <div className="sort-blog-item">all</div>
                            <div className="sort-blog-item">photography</div>
                            <div className="sort-blog-item">lifestyle</div>
                            <div className="sort-blog-item">trip</div>
                            <div className="sort-blog-item">inspiration</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortBlog