export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface TrelloPageState {
  lists: List[];
}

export type ContainerState = TrelloPageState;
