import { Country } from '../../../Interfaces/CountryInterfaces'


interface ICountryCard {
    country: Country;
    setDetail: Function;
}


const Card = ({ setDetail, country }: ICountryCard) => {
    return (
        <div className='dark:bg-elementsDark rounded-md hover:cursor-pointer md:mb-0 mb-8' onClick={() => setDetail(country)}>
            <img src={country.flags!.png} alt="img" className='rounded-t-md md:max-w-xs' style={{ height: "200px", minWidth: "320px", width: "100%" }} />
            <div className='flex flex-col p-8 shadow-2xl rounded-md'>
                <h2 className='pb-4'>{country.name}</h2>
                <p className='flex flex-col pb-4'>
                    <span><b>Population:</b> {country.population}</span>
                    <span><b>Region:</b> {country.region}</span>
                    <span><b>Capital:</b> {country.capital}</span>
                </p>
            </div>
        </div>
    )
}

export default Card