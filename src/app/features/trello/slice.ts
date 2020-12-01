import { trelloState } from './api/data';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { v4 as uuid } from 'uuid';
import { findItemIndexById } from './utils/findItemIndexById';
import { moveItem } from './utils/moveItem';
import { DragItem, Task } from './api/types';

export const initialState: ContainerState = trelloState;

const trelloPageSlice = createSlice({
  name: 'trelloPage',
  initialState,
  reducers: {
    addList(state, action: PayloadAction<string>) {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    },
    addTask(state, action: PayloadAction<Task>) {
      const targetLaneIndex = findItemIndexById(state.lists, action.payload.id);
      state.lists[targetLaneIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });
    },
    moveList(
      state,
      action: PayloadAction<{ dragIndex: number; hoverIndex: number }>,
    ) {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return {
        ...state,
      };
    },
    setDraggedItem(state, action: PayloadAction<DragItem | undefined>) {
      return {
        ...state,
        draggedItem: action.payload,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = trelloPageSlice;
