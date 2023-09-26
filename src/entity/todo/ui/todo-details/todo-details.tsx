import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';
import { cn } from 'src/shared/lib';
import { Button } from 'src/shared/ui';

import styles from './styles.module.scss';

export const TodoDetails = observer(() => {
  const activeTodo = todos.activeTask;

  const closeTodoDetails = () => todos.setActiveTask(null);

  return (
    <>
      <div
        className={cn(styles.todoDetails, [], {
          [styles.opened]: !!activeTodo?.name,
        })}>
        <h2 className={styles.title}>Todo info</h2>
        <h3 className={styles.todoName}>Name: {activeTodo?.name}</h3>
        <p className={styles.todoDescription}>
          Description: {activeTodo?.description}
        </p>
        <p className={styles.todoCompleted}>
          Status: {activeTodo?.isCompleted ? 'Completed' : 'Not completed'}
        </p>
        <Button
          text="Close details"
          onClick={closeTodoDetails}
          className={styles.button}
        />
      </div>
    </>
  );
});
