import { Country, Language, Currency } from '../../Interfaces/CountryInterfaces'
// backarrow for detailpage
import { FaArrowLeft } from 'react-icons/fa';

type Props = {
    detail: Country;
    setDetail: Function;
}

const Detail = ({ detail, setDetail }: Props) => {
    return (
        <div className='flex flex-col'>
            <div className='my-4 md:my-8 w-full'>
                <button
                    onClick={() => setDetail(undefined)}
                    className='flex items-center rounded-md px-8 shadow-filterDropdown mx-3 md:mx-0 py-2 dark:bg-elementsDark text-left justify-between first:mr-2'>
                    <FaArrowLeft style={{ marginRight: "0.5em" }} />
                    Back
                </button>
            </div>
            <div className='flex flex-col md:flex-row my-8 items-center'>
                <div className='flex-grow basis-1/2 mb-8 md:mb-0'>
                    <img className='w-full md:pr-12 max-w-2xl md:min-h-detailImg max-h-96' src={detail.flags?.png} alt={detail.name + "-img"} />
                </div>
                <div className='flex-grow flex-col mx-4 md:flex-row basis-1/2 md:pl-12 md:mx-0'>
                    <h3 className=''>{detail.name}</h3>
                    <div className='flex flex-col md:flex-row my-8 justify-between'>
                        <div>
                            <p><b>Native Name:</b> {detail.nativeName}</p>
                            <p><b>Population:</b> {detail.population}</p>
                            <p><b>Region:</b> {detail.region}</p>
                            <p><b>Sub Region:</b> {detail.subregion} </p>
                            <p><b>Captial:</b> {detail.capital}</p>
                        </div>
                        <div>
                            <p><b>Top Level Domain:</b> {detail.topLevelDomain}</p>
                            <p><b>Currencies:</b> {convertCurrency(detail?.currencies)}</p>
                            <p><b>Languages:</b> {convertLanguages(detail?.languages)}</p>
                        </div>
                    </div>

                    {/** map for border countries - **/}
                    <div className='flex flex-wrap items-center mt-16'>
                        <p className='w-full mb-4 md:mb-0 md:w-fit'><b>Border Countries:</b></p>
                        <div className='flex flex-wrap md:ml-6 gap-4'>
                            {convertBorderCountries(detail?.borders)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function convertCurrency(list: Currency[] | undefined) {
    let x = list?.map((item, index) => {
        console.log(index)
        if (list.length - 1 === index) {
            return <span>{item.name}</span>
        } else {
            return <span>{item.name + " ,"}</span>
        }
    })
    return <>{x}</>
}


function convertLanguages(list: Language[] | undefined) {
    let x = list?.map((item, index) => {
        console.log(index)
        if (list.length - 1 === index) {
            return <span>{item.name}</span>
        } else {
            return <span>{item.name + ", "}</span>
        }
    })
    return <>{x}</>
}

function convertBorderCountries(list: string[] | undefined) {
    let x = list?.map((item, index) => {
        console.log(list)
        return <span className='inline-block px-6 py-2 rounded-md shadow-filterDropdown dark:bg-elementsDark'>{item}</span>
    })
    return <>{x}</>
}

export default Detail