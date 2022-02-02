import React from "react";
import ItemStatusFilter from "../item_status_filter/ItemStatusFilter";
import './SearchTodo.css'

const SearchTodo = ({onSearch, filter, onFilterChange}) => {
    return (
        <div>
            <input
                className='search-input'
                type="text"
                placeholder='search'
                onChange={event => onSearch(event.target.value) }
            />
            <ItemStatusFilter
                filter={ filter }
                onFilterChange={ onFilterChange }
            />
        </div>
    )
}

export default SearchTodo