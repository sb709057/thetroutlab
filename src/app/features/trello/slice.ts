import { trelloState } from './api/data';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, TrelloPageState } from './types';

export const initialState: ContainerState = trelloState;

const trelloPageSlice = createSlice({
  name: 'trelloPage',
  initialState,
  reducers: {
    updateLists(state, action: PayloadAction<TrelloPageState>) {
      state.lists = action.payload.lists;
    },
  },
});

export const { actions, reducer, name: sliceKey } = trelloPageSlice;
