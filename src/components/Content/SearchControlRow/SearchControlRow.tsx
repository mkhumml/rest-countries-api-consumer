import React from 'react'
import FilterDropdown from './FilterDropdown/FilterDropdown'
import SearchInput from './SearchInput/SearchInput'


type Props = {}

const SearchControls = (props: Props) => {
    return (
        <div className='flex justify-between py-4'>
            <SearchInput />
            <FilterDropdown />
        </div>
    )
}

export default SearchControls