'use client';
import React, { useState } from 'react';
import { Pagination } from 'flowbite-react';
import { Auction, PagedResults } from '@/types';

type PaginationProps = Pick<PagedResults<Auction>, 'pageCount'> & {
  currentPage: number;
  pageChange: (page: number) => void;
};

const AppPagination = ({
  currentPage,
  pageCount,
  pageChange,
}: PaginationProps) => {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={pageChange}
      totalPages={pageCount}
      layout='pagination'
      showIcons={true}
      className='text-blue-500 mb-5'
    />
  );
};

export default AppPagination;
