import { RecursionTodoProps, Todo } from '../../types';

export const recursionFilter: RecursionTodoProps = (id, array) => {
  return array.reduce((arr: Todo[], item) => {
    if (item.id !== id) {
      arr.push({ ...item, subTodos: recursionFilter(id, item.subTodos) });
    }

    return arr;
  }, []);
};
