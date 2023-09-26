import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';

import { TodoItem } from '../todo-item';
import styles from './styles.module.scss';

export const Todolist = observer(() => {
  if (todos.todoArray.length === 0) {
    return <h1 className={styles.title}>You don't have todos</h1>;
  }

  return (
    <div>
      {todos.todoArray.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
});
