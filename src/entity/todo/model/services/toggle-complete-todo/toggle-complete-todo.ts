import { RecursionTodoProps, Todo, ToggleCompleteTodoProps } from '../../types';

export const recursionToggleTodoComplete: RecursionTodoProps = (id, array) => {
  return array.reduce((arr: Todo[], item) => {
    if (item.id !== id) {
      arr.push({
        ...item,
        subTodos: recursionToggleTodoComplete(id, item.subTodos),
      });
    } else {
      arr.push({
        ...item,
        isCompleted: !item.isCompleted,
        subTodos: subTodosToggleComplete(item.subTodos, !item.isCompleted),
      });
    }

    return arr;
  }, []);
};

export const subTodosToggleComplete: ToggleCompleteTodoProps = (
  array,
  state,
) => {
  return array.reduce((arr: Todo[], item) => {
    arr.push({
      ...item,
      isCompleted: state,
      subTodos: subTodosToggleComplete(item.subTodos, state),
    });

    return arr;
  }, []);
};
