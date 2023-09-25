import { AddSubtaskProps, Todo } from '../../types';

export const addSubtodo: AddSubtaskProps = (id, array, todo) => {
  return array.reduce((arr: Todo[], item) => {
    if (item.id === id) {
      item.subTodos.push(todo);
      arr.push(item);
    } else {
      arr.push({ ...item, subTodos: addSubtodo(id, item.subTodos, todo) });
    }

    return arr;
  }, []);
};
