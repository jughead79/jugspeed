import React from 'react'

import './style.css'

const Search = () => {
    return(
        <div className='search'>
            <div>
                <i class="fas fa-search"></i>
            </div>
            <div>
                <p className="">Power your life with Knowledge.</p>
                <input placeholder='Search from hundreads of Articles'></input>
            </div>
        </div>
    )
}

export default Search