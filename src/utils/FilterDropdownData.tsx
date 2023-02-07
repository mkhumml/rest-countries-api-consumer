import { Country } from '../Interfaces/CountryInterfaces'

export function FilterDropdownData(data: Country[]) {
    let filteredData: string[] | undefined = [];
    data.forEach((item: Country) => {
        if (!filteredData?.includes(item.region ? item.region : "")) {
            filteredData?.push(item.region ? item.region : "")
        }
    });

    return filteredData;
}