import React from 'react'
import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Oleg Kadyrov</h1>
            <h2>{allPosts} records, of them liked {liked}</h2>
        </div>

    )
}
export default AppHeader;