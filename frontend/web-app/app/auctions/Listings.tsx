import React from 'react';
import AuctionCard from './AuctionCard';
import { Auction, PagedResults } from '@/types';

const getData = async () => {
  const res = await fetch('http://localhost:6001/search?pageSize=10');

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json() as Promise<PagedResults<Auction>>;
};

const Listings = async () => {
  const data = await getData();
  return (
    <div className='grid grid-cols-4 gap-6'>
      {data &&
        data.results.map(auction => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
    </div>
  );
};

export default Listings;
