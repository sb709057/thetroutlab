import { RootState } from '../../../types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

const selectTrelloDomain = (state: RootState) =>
  state.trelloPage || initialState;
const selectDraggableDomain = (state: RootState) => state.dragItem;

export const selectLists = createSelector(
  [selectTrelloDomain],
  trelloPageState => trelloPageState.lists,
);

export const selectDragItem = createSelector(
  [selectDraggableDomain],
  dragItemState => dragItemState,
);
