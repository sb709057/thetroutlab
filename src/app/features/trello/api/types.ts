export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export type ColumnDragItem = {
  index: number;
  id: string;
  text: string;
  type: 'COLUMN';
};

export type DragItem = ColumnDragItem;
