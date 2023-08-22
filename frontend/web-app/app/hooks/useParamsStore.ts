// import { create } from 'zustand';
import { create } from 'zustand';

type PaginatedState = {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  searchTerm: string;
};

type Actions = {
  setParams: (params: Partial<PaginatedState>) => void;
  reset: () => void;
};

const initialState: PaginatedState = {
  pageNumber: 1,
  pageSize: 12,
  pageCount: 1,
  searchTerm: '',
};

export const useParamsStore = create<PaginatedState & Actions>()(set => {
  return {
    ...initialState,
    setParams: (newParams: Partial<PaginatedState>) => {
      set(state => {
        if (newParams.pageNumber) {
          return {
            ...state,
            pageNumber: newParams.pageNumber,
          };
        } else {
          return {
            ...state,
            ...newParams,
            pageNumber: 1,
          };
        }
      });
    },
    reset: () => set(initialState),
  };
});
