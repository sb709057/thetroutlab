import React, { useRef } from 'react';
import { CardContainer } from '../../components/styles';
import { useDrop } from 'react-dnd';
import { CardDragItem } from '../../api/types';
import { useDispatch } from 'react-redux';
import { actions } from '../../slice';
import { useItemDrag } from '../../utils/useItemDrag';

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
}

const Card = ({ text, index, id, columnId }: CardProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const drag = useItemDrag({ type: 'CARD', id, index, text, columnId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;
      dispatch(
        actions.moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn }),
      );
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });
  drag(drop(ref));
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
