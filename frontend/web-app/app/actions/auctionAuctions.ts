'use server';

import { Auction, PagedResults } from '@/types';

export const getData = async (query: string) => {
  const res = await fetch(`http://localhost:6001/search${query}`);

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json() as Promise<PagedResults<Auction>>;
};
