import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppContainer } from '../../components/styles';
import Column from '../Column';
import AddNewItem from '../NewItem';
import { useInjectReducer } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectLists } from '../../selectors';
import { reducer, actions } from '../../slice';
import { sliceKey } from '../../slice';

const TrelloHomePage: React.FC = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const trelloList = useSelector(selectLists);

  return (
    <>
      <Helmet>
        <title>Trello</title>
        <meta name="description" content="Trello" />
      </Helmet>
      <AppContainer>
        {trelloList.map((list, i) => (
          <Column text={list.text} key={list.id} index={i} id={list.id} />
        ))}
        <AddNewItem
          onAdd={text => dispatch(actions.addList(text))}
          toggleButtonText="+ Add another list"
        />
      </AppContainer>
    </>
  );
};

export default TrelloHomePage;
