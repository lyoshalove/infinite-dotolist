import { SearchTodoProps } from '../../types';

export const recursionSearch: SearchTodoProps = (id, array) => {
  for (const item of array) {
    if (item.id === id) {
      return item;
    }

    const subTodo = recursionSearch(id, item.subTodos);

    if (subTodo) {
      return subTodo;
    }
  }

  return null;
};
