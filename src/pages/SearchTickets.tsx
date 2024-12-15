import React, { useCallback, useEffect, useState } from 'react';
import { searchTickets } from '../server/api';
import ITicket from './../types/ITicket';
import TicketsTable from './../components/TicketsTable/TicketsTable';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/Search/SearchBar';
import SearchParameters from '../components/Search/SearchParameters';

const SearchTickets = () => {
  const [filteredTickets, setFilteredTickets] = useState<ITicket[] | []>();

  const [searchParams, setSearchParams] = useSearchParams();
  const serachParam = searchParams.get('search');

  // useEffect(() => {
  //   if (!serachParam) {
  //     setFilteredTickets(data);
  //   } else {
  //     searchTickets(serachParam).then((data) => {
  //       setFilteredTickets(data);
  //       setSearchParams({ search: serachParam });
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (searchParams) {
      setDataFromSearch(serachParam);
    }
  }, []);

  const setDataFromSearch = useCallback((value: string | null) => {
    if (value) {
      searchTickets(value).then((data) => {
        setFilteredTickets(data);
        setSearchParams({ search: value });
      });
    }
  }, []);

  const handleSearch = (value: string) => {
    setDataFromSearch(value);
  };

  const clearSearch = () => {
    setFilteredTickets([]);
    setSearchParams({});
  };

  return (
    <div>
      <div className="mb-3 lg:flex lg:items-center lg:gap-8">
        <SearchBar searchFunction={handleSearch} />
        <SearchParameters clearSearch={clearSearch} />
      </div>

      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default SearchTickets;
