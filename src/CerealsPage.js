import { useEffect, useState } from 'react';
import './App.css';
import { getCereals } from './services/fetch-utils';
import CerealsList from './CerealsList';

function App() {
  const [cereals, setCereals] = useState([]);
  const perPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetch() {
      const from = currentPage * perPage - perPage;
      const to = currentPage * perPage;
      const cereals = await getCereals(from, to);

      setCereals(cereals);
    }

    fetch();
  }, [currentPage]);

  return (
    <>
      <h2 className="header">
        Page {currentPage} / 9 of the <i>ultimate</i> box Cereal list
      </h2>
      <div className="buttons">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </button>
        {/* on click, this button should increment the page in state  */}
        <button disabled={currentPage >= 9} onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <CerealsList cereals={cereals} />
    </>
  );
}

export default App;
