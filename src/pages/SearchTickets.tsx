import React, { useCallback, useEffect, useState } from 'react';
import { getAllTickets, searchTickets } from '../server/api';
import { useQuery } from 'react-query';
import ITicket from './../types/ITicket';
import TicketsTable from './../components/TicketsTable/TicketsTable';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/Search/SearchBar';
import SearchParameters from '../components/Search/SearchParameters';

const SearchTickets = () => {
  const { data, isError, isLoading } = useQuery<ITicket[]>(
    'tickets',
    getAllTickets,
    {
      refetchOnWindowFocus: false,
    }
  );

  const [filteredTickets, setFilteredTickets] = useState<ITicket[] | []>();

  const [searchParams, setSearchParams] = useSearchParams();
  const serachParam = searchParams.get('search');

  useEffect(() => {
    if (!serachParam) {
      setFilteredTickets(data);
    } else {
      searchTickets(serachParam).then((data) => {
        setFilteredTickets(data);
        setSearchParams({ search: serachParam });
      });
    }
  }, []);

  const handleSearch = useCallback((value: string) => {
    searchTickets(value).then((data) => {
      setFilteredTickets(data);
      setSearchParams({ search: value });
    });
  }, []);

  const clearSearch = () => {
    setFilteredTickets(data);
    setSearchParams({});
  };

  return (
    <div>
      <div className="lg:flex lg:items-center lg:gap-8">
        <SearchBar searchFunction={handleSearch} />
        <SearchParameters clearSearch={clearSearch} />
      </div>

      <TicketsTable
        tickets={filteredTickets}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchTickets;
