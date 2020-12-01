import React, { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from '../../components/styles';
import AddNewItem from '../NewItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectLists } from '../../selectors';
import Card from '../Card';
import { actions } from '../../slice';
import { useItemDrag } from '../../utils/useItemDrag';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

const Column = ({ text, index, id }: ColumnProps) => {
  const dispatch = useDispatch();
  const trelloList = useSelector(selectLists);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useItemDrag({
    id,
    index,
    text,
    type: 'COLUMN',
  });
  drag(ref);
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {trelloList[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        onAdd={text => dispatch(actions.addTask({ text, id }))}
        toggleButtonText="+ Add another task"
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
