import React from 'react';
import {MdSearch} from "react-icons/md";
/*using the handleSearchNote as props and onClick event function for searching*/
function Search({handleSearch}) {
    return (
        <div className="search">
        {/*search icon within our search bar*/}
            <MdSearch className="search-icon" size="1.4em"/>
            {/*input tag for our search*/}
            <input type="text" placeholder="Search for your notes..." onChange={(event)=>handleSearch(event.target.value)}/>
        </div>
    )
};

export default Search;
