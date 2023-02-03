import React from 'react'

//search icon
import { FaSearch } from 'react-icons/fa';

type Props = {}

const SearchInput = (props: Props) => {
    return (
        <div className='input-container w-1/3 rounded-md'>
            <FaSearch className='absolute m-5' />
            <input placeholder='Search for a country...' className='px-12 py-4 dark:bg-elementsDark w-full'></input>
        </div>
    )
}

export default SearchInput