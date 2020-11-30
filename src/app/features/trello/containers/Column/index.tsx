import React from 'react';
import { ColumnContainer, ColumnTitle } from '../../components/styles';
import AddNewItem from '../NewItem';

interface ColumnProps {
  text: string;
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add another task"
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
