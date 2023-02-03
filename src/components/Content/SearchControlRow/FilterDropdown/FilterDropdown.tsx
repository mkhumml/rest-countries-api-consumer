import React, { useEffect, useState } from 'react'
import Data from '../../../../data.json'
// for dropdown
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import FilterDropdownElement from './FilterDropdownElement/FilterDropdownElement';

type Props = {}

const FilterDropdown = (props: Props) => {
    const [show, setShow] = useState(false)
    const [buttonValue, setButtonValue] = useState('Filter by Region');


    const regionSelected = (e: any) => {
        setButtonValue(e.target.innerHTML)
        setShow(!show)
    }

    let fitleredData: string[] = [];

    Data.forEach(data => {
        console.log(data.region)
        if (!fitleredData.includes(data.region)) {
            fitleredData.push(data.region)
        }

    });

    console.log(fitleredData);

    return (
        <div className='min-w-min w-56 relative rounded-md'>
            <button onClick={() => setShow(!show)} className='flex items-center rounded-md px-8 py-4 dark:bg-elementsDark w-full text-left justify-between'>
                {buttonValue}
                {show === true ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <div className='absolute z-10 rounded-md mt-1 w-full'>
                {fitleredData.map((e, index) => <FilterDropdownElement data={e} key={index} show={show} regionSelected={regionSelected} />)}
            </div>
        </div>
    )
}

export default FilterDropdown