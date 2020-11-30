import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Troutlab - WHere developers learn and share knowledge"
        />
      </Helmet>
      <span>Home Page</span>
      <br />
      <Link to={'/trello'}>Trello</Link>
    </>
  );
}
