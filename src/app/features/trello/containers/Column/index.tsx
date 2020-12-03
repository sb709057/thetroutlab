import React, { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from '../../components/styles';
import AddNewItem from '../NewItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDragItem, selectLists } from '../../selectors';
import Card from '../Card';
import { actions } from '../../slice';
import { useItemDrag } from '../../utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { DragItem } from '../../api/types';
import { isHidden } from '../../utils/isHidden';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch(actions.moveList({ dragIndex, hoverIndex }));
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;

        if (sourceColumn === targetColumn) {
          return;
        }

        dispatch(
          actions.moveTask({
            dragIndex,
            hoverIndex,
            sourceColumn,
            targetColumn,
          }),
        );

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  const drag = useItemDrag({ type: 'COLUMN', id, index, text });

  drag(drop(ref));
  const dragItem = useSelector(selectDragItem);
  const trelloList = useSelector(selectLists);
  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(dragItem, 'COLUMN', id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {trelloList[index].tasks.map((task, i) => (
        <Card
          text={task.text}
          key={task.id}
          index={i}
          columnId={id}
          id={task.id}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={text => dispatch(actions.addTask({ text, id }))}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
