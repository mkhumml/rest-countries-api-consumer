import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useFetch from '../../../../hooks/useFetch';
import { FilterDropdownData } from '../../../../utils/FilterDropdownData';
import FilterDropdownElement from './FilterDropdownElement/FilterDropdownElement';
import { Country } from '../../../../Interfaces/CountryInterfaces';

type Props = {
    filter: string | undefined;
    setFilter: Function;
}

const FilterDropdown = ({ filter, setFilter }: Props) => {
    const defaultValue = 'Filter by Region';
    const [show, setShow] = useState(false)
    const { data } = useFetch<Country[]>('https://restcountries.com/v2/all');

    const regionSelected = (e: any) => {
        setFilter((prev: string) => prev === e.target.innerHTML ? undefined : e.target.innerHTML)
        setShow(!show)
    }

    return (
        <div className='min-w-min w-56 relative rounded-md shadow-md'>
            <button onClick={() => setShow(!show)} className='flex items-center rounded-md px-8 py-4 bg-elements dark:bg-elementsDark w-full text-left justify-between'>
                {filter ? filter : defaultValue}
                {show === true ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <div className='absolute z-10 rounded-md mt-1 w-full bg-elements shadow-filterDropdown'>
                {FilterDropdownData(data ? data : []).map((e, index) => <FilterDropdownElement data={e} key={index} show={show} regionSelected={regionSelected} />)}
            </div>
        </div>
    )
}

export default FilterDropdown