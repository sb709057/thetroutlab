import { RootState } from '../../../types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

const selectDomain = (state: RootState) => state.trelloPage || initialState;

export const selectLists = createSelector(
  [selectDomain],
  trelloPageState => trelloPageState.lists,
);
