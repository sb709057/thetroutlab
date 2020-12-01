import { DragItem } from '../api/types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { actions } from '../slice';

export const useItemDrag = (item: DragItem) => {
  const dispatch = useDispatch();
  const [, drag] = useDrag({
    item,
    begin: () => {
      dispatch(actions.setDraggedItem(item));
    },
    end: () => {
      dispatch(actions.setDraggedItem(undefined));
    },
  });
  return drag;
};
