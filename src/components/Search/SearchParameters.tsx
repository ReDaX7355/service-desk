import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SerachParametersProps {
  clearSearch: () => void;
}

const SearchParameters: FC<SerachParametersProps> = ({ clearSearch }) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search');

  return (
    <div className="mt-4 flex h-5 items-center gap-3 text-sm lg:mt-0">
      {searchParam && (
        <>
          <p>
            Результаты поиска: <b>{searchParam}</b>
          </p>
          <button
            onClick={clearSearch}
            className="rounded bg-primary px-2 py-1 text-white"
          >
            Очистить
          </button>
        </>
      )}
    </div>
  );
};

export default SearchParameters;
