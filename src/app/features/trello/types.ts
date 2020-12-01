import { List } from './api/types';

export interface TrelloPageState {
  lists: List[];
}

export type ContainerState = TrelloPageState;
