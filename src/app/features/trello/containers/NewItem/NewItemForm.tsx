import React, { useState } from 'react';
import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from '../../components/styles';
import { useFocus } from '../../utils/useFocus';

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState('');
  const { onAdd } = props;
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
