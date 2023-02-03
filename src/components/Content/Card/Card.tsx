import React from 'react'
import { Country } from '../../../Interfaces/CountryInterfaces'

const Card = ({ flags, name, population, region, capital }: Country) => {
    return (
        <div className='dark:bg-elementsDark rounded-md'>
            <img src={flags!.png} alt="img" className='rounded-t-md' style={{ height: "200px", width: "320px" }} />
            <div className='flex flex-col p-8'>
                <h2 className='pb-4'>{name}</h2>
                <p className='flex flex-col pb-4'>
                    <span>Population: {population}</span>
                    <span>Region: {region}</span>
                    <span>Capital: {capital}</span>
                </p>
            </div>
        </div>
    )
}

export default Card