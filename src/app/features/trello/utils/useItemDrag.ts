import { DragItem } from '../api/types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { actions } from '../slice';
import { useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useItemDrag = (item: DragItem) => {
  const dispatch = useDispatch();
  const [, drag, preview] = useDrag({
    item,
    begin: () => {
      dispatch(actions.setDraggedItem(item));
    },
    end: () => {
      dispatch(actions.setDraggedItem(undefined));
    },
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  });
  return drag;
};
