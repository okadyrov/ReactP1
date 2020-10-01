import React from 'react'

//import './post-status-filter.ccs'

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <button type="button" className="btn-info">All</button>
            <button type="button" className="btn btn-outline-secondary">Liked</button>
        </div>
    )

}
export default PostStatusFilter;