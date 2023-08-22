'use client';

import { Auction, PagedResults } from '@/types';
import { useEffect, useState } from 'react';
import { getData } from '../actions/auctionAuctions';
import AppPagination from '../components/AppPagination';
import AuctionCard from './AuctionCard';
import Filters from './Filters';
import { useParamsStore } from '../hooks/useParamsStore';
import { shallow } from 'zustand/shallow';
import qs from 'query-string';

const Listings = () => {
  const [data, setData] = useState<PagedResults<Auction>>();
  const params = useParamsStore(
    state => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      pageCount: state.pageCount,
      searchTerm: state.searchTerm,
    }),
    shallow
  );
  const setParams = useParamsStore(state => state.setParams);
  const url = qs.stringifyUrl({
    url: '',
    query: params,
  });

  const setPageNumber = (pageNumber: number) => {
    setParams({ pageNumber });
  };

  useEffect(() => {
    getData(url).then(data => {
      setData(data);
    });
  }, [url]);

  if (!data) return <h3>Loading...</h3>;

  return (
    <>
      <Filters />
      <div className='grid grid-cols-4 gap-6'>
        {data.results.map(auction => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <AppPagination
          currentPage={params.pageNumber}
          pageCount={params.pageNumber}
          pageChange={setPageNumber}
        />
      </div>
    </>
  );
};

export default Listings;
