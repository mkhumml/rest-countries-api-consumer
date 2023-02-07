import React from 'react'

//search icon
import { FaSearch } from 'react-icons/fa';

type Props = {
    searchInput: string | undefined;
    setSearchInput: Function;
}

const SearchInput = ({ setSearchInput, searchInput }: Props) => {
    return (
        <div className='input-container shadow-md mb-12 md:mb-0 md:w-1/3'>
            <FaSearch className='absolute m-5' />
            <input value={searchInput} onChange={(e: any) => setSearchInput(e.target.value)} type="text" placeholder='Search for a country...' className='px-12 py-4 rounded-md dark:bg-elementsDark w-full' />
        </div>
    )
}

export default SearchInput