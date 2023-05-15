import React from "react";

const Search = ({label}) => {

    return(
        <label>
            {label && <span>{label}</span>}
            <input />
        </label>
    )
}

export default Search