/**
 * Asynchronously loads the component for TrelloHomePage
 */

import { lazyLoad } from 'utils/loadable';

export const TrelloHomePage = lazyLoad(
  () => import('./index'),
  module => module.default,
);
