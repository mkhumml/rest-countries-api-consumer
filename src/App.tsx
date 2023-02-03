// backarrow for detailpage
import { FaArrowLeft } from 'react-icons/fa';
import Card from './components/Content/Card/Card';
import SearchControls from './components/Content/SearchControlRow/SearchControlRow';
import Header from './components/Header/Header';
import array from './data.json'
import { Country } from './Interfaces/CountryInterfaces'

function App() {

  const dataarray: Country[] = array;

  return (
    <div id="page" className="App bg-bg dark:bg-bgDark dark:text-textDark">
      <Header />
      <main className='mx-auto py-6' style={{ maxWidth: "1440px" }}>
        <SearchControls />F
        <div className='py-4 flex justify-between gap-y-16 flex-wrap'>
          {dataarray.map((item, index) => <Card flags={item.flags} name={item.name} population={item.population} region={item.region} capital={item.capital} key={index} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
