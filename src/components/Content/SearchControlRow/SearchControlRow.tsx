import React from 'react'
import FilterDropdown from './FilterDropdown/FilterDropdown'
import SearchInput from './SearchInput/SearchInput'


type Props = {
    searchInput: string | undefined;
    setSearchInput: Function;
    filter: string | undefined;
    setFilter: Function;
}

const SearchControls = ({ filter, setFilter, searchInput, setSearchInput }: Props) => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between md:py-4 md:px-0 p-4'>
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
            <FilterDropdown filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default SearchControls