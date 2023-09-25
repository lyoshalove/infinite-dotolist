import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';

import { TodoItem } from '../todo-item';

export const Todolist = observer(() => {
  return (
    <div>
      {todos.todoArray.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
});
