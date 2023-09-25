import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';

import styles from './styles.module.scss';

export const TodoDetails = observer(() => {
  const activeTodo = todos.activeTask;

  return (
    <>
      {todos.activeTask && (
        <div className={styles.todoDetails}>
          <h2 className={styles.title}>Todo info</h2>
          <h3 className={styles.todoName}>Name: {activeTodo?.name}</h3>
          <p className={styles.todoDescription}>
            Description: {activeTodo?.description}
          </p>
        </div>
      )}
    </>
  );
});
