import React from 'react'

type Props = {
    regionSelected: Function;
    show: boolean;
    data: string;
}

const FilterDropdownElement = ({ show, regionSelected, data}: Props) => {
    return (
        <div onClick={(e: any) => regionSelected(e)} className={'first:rounded-t-md last:rounded-b-md px-8 py-2 dark:bg-elementsDark hover:cursor-pointer ' + (show ? ' ' : ' hidden')}>{data}</div>
    )
}

export default FilterDropdownElement