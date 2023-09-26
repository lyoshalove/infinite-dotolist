import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';
import { ButtonTheme } from 'src/shared/constants';
import { Button, Input, Textarea } from 'src/shared/ui';

import styles from './styles.module.scss';

interface CreateSubTodoModalContentProps {
  id: string;
  onClose: () => void;
}

export const CreateSubTodoModalContent = observer(
  ({ id, onClose }: CreateSubTodoModalContentProps) => {
    const addTodo = () => {
      if (!todos.trimmedTodoName) {
        return;
      }

      todos.addSubtodo(id);
      onClose();
      todos.clearFieldsValues();
    };

    return (
      <>
        <h2 className={styles.title}>Create todo</h2>
        <Input
          value={todos.todoName}
          onChange={(e) => todos.setTodoName(e.target.value)}
          placeholder="Todo name"
          className={styles.input}
        />
        <Textarea
          value={todos.todoDesciption}
          onChange={(e) => todos.setTodoDescription(e.target.value)}
          placeholder="Todo description"
          className={styles.textarea}
        />
        <div className={styles.buttons}>
          <Button
            text="Cancel"
            onClick={onClose}
            className={styles.button}
            theme={ButtonTheme.SECONDARY}
          />
          <Button text="Add" onClick={addTodo} className={styles.button} />
        </div>
      </>
    );
  },
);
