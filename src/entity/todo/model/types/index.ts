export interface Todo {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  subTodos: Todo[];
}

export type AddSubtaskProps = (id: string, array: Todo[], todo: Todo) => Todo[];

export type RecursionTodoProps = (id: string, array: Todo[]) => Todo[];

export type SearchTodoProps = (id: string, array: Todo[]) => Todo | null;

export type ToggleCompleteTodoProps = (array: Todo[], state: boolean) => Todo[];
