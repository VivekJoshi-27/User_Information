import React from 'react';
import './Searchbar.css'
const Searchbar = (props) => {
    return (
        <>
            <input type="text" placeholder='Search' onChange={e => props.handleChange(e.target.value)}/>
        </>
    );
};

export default Searchbar;