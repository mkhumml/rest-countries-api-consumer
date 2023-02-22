import { useEffect, useState } from 'react'
import Card from './components/Content/Card/Card';
import SearchControls from './components/Content/SearchControlRow/SearchControlRow';
import Header from './components/Header/Header';
import { Country } from './Interfaces/CountryInterfaces'
import useFetch from './hooks/useFetch';
import Detail from './components/Detail/Detail';

const INIT_URL = 'https://restcountries.com/v2/all';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState(undefined);
  const [url, setUrl] = useState(INIT_URL);
  const { error, data } = useFetch<Country[]>(url);
  const [detail, setDetail] = useState<Country | undefined>(undefined);

  useEffect(() => {
    if (filter) {
      setUrl("https://restcountries.com/v2/region/" + filter)
    } else if (searchInput) {
      setUrl("https://restcountries.com/v2/name/" + searchInput)
    } else {
      setUrl(INIT_URL)
    }
  }, [searchInput, filter, data])

  return (
    <div id="page" className="App bg-bg dark:bg-bgDark dark:text-textDark min-h-screen">
      <Header />
      <main className='mx-auto xl:p-4 md:p-16' style={{ maxWidth: "1440px" }}>
        {
          (!error && detail) ?
            <Detail detail={detail} setDetail={setDetail} />
            : <>
              <SearchControls filter={filter} setFilter={setFilter} searchInput={searchInput} setSearchInput={setSearchInput} />
              <div className='py-4 px-4 md:px-0 md:flex md:gap-cards md:justify-center justify-between flex-wrap'>
                {
                  (!error && data && !detail) && data.map((country, index) => <Card country={country} setDetail={setDetail} key={index} />)
                }
                {
                  (error && !data) && <div>Error at fetching data...</div>
                }
                {
                  (!error && !data) && <div>Loading...</div>
                }
              </div>
            </>
        }
      </main>
    </div>
  );
}

export default App;
