import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppContainer } from '../../components/styles';
import Column from '../Column';
import AddNewItem from '../NewItem';
import { useSelector } from 'react-redux';
import { selectLists } from '../../selectors';

const TrelloHomePage: React.FC = () => {
  const trelloList = useSelector(selectLists);
  return (
    <>
      <Helmet>
        <title>Trello</title>
        <meta name="description" content="Trello" />
      </Helmet>
      <AppContainer>
        {trelloList.map(list => (
          <Column text={list.text} key={list.id} />
        ))}
        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
      </AppContainer>
    </>
  );
};

export default TrelloHomePage;
