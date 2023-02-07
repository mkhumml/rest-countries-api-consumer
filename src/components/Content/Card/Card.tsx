import { Country } from '../../../Interfaces/CountryInterfaces'


interface ICountryCard {
    country: Country;
    setDetail: Function;
}


const Card = ({ setDetail, country }: ICountryCard) => {
    return (
        <div className='dark:bg-elementsDark rounded-md max-w-xs hover:cursor-pointer ' onClick={() => setDetail(country)}>
            <img src={country.flags!.png} alt="img" className='rounded-t-md' style={{ height: "200px", width: "320px" }} />
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