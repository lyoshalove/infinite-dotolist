import { ChangeEvent, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';
import { ButtonTheme } from 'src/shared/constants';
import { Button, Input, Textarea } from 'src/shared/ui';

import styles from './styles.module.scss';

interface CreateTodoModalContentProps {
  onClose: () => void;
}

export const CreateTodoModalContent = observer(
  ({ onClose }: CreateTodoModalContentProps) => {
    const addTodo = useCallback(() => {
      if (!todos.trimmedTodoName) {
        return;
      }

      todos.addTodo();
      onClose();
      todos.clearFieldsValues();
    }, [onClose]);

    const changeTodoNameHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        todos.setTodoName(event.target.value);
      },
      [],
    );

    const changeTodoDescriptionHandler = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        todos.setTodoDescription(event.target.value);
      },
      [],
    );

    return (
      <>
        <h2 className={styles.title}>Create todo</h2>
        <Input
          value={todos.todoName}
          onChange={changeTodoNameHandler}
          placeholder="Todo name"
          className={styles.input}
        />
        <Textarea
          value={todos.todoDesciption}
          onChange={changeTodoDescriptionHandler}
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
