/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import TrelloHomePage from './features/trello/containers/TrelloHomePage';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Troutlab"
        defaultTitle="Where developers learn and share knowledge"
      >
        <meta
          name="description"
          content="Where developers learn and share knowledge"
        />
      </Helmet>

      <Switch>
        <Route exact path="/trello" component={TrelloHomePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
