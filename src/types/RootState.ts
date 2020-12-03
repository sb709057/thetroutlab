import { TrelloPageState } from '../app/features/trello/types';
import { ColumnDragItem } from '../app/features/trello/api/types';
// [IMPORT NEW CONTAINER_STATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

export interface RootState {
  trelloPage: TrelloPageState;
  dragItem: ColumnDragItem;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
