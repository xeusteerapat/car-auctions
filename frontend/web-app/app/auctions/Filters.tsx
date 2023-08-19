import React from 'react';
import { Button } from 'flowbite-react';

const pageSizeButtons = [4, 8, 12];

type FiltersProps = {
  pageSize: number;
  setPageSize: (size: number) => void;
};

const Filters = ({ pageSize, setPageSize }: FiltersProps) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      {/* <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Filter by</span>
        <Button.Group>
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>

      <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Order by</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div> */}

      <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
        <Button.Group>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setPageSize(value)}
              color={`${pageSize === value ? 'red' : 'gray'}`}
              className='focus:ring-0'
            >
              {value}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
};

export default Filters;
