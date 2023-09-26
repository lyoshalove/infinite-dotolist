import { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { todos } from 'src/app/store';
import { CreateSubTodoModalContent } from 'src/features/create-subtodo';
import { ButtonSizes } from 'src/shared/constants';
import { CrossIcon } from 'src/shared/icons';
import { cn } from 'src/shared/lib';
import { Button, Checkbox, Modal } from 'src/shared/ui';
import { Portal } from 'src/widgets/portal';

import { Todo } from '../..';
import styles from './styles.module.scss';

interface TodoItemProps {
  todo: Todo;
}

const modalsContainer = document.querySelector('#modals');

export const TodoItem = observer(({ todo }: TodoItemProps) => {
  const { id, name, isCompleted, subTodos } = todo;
  const [isModalShow, setIsModalShow] = useState(false);
  const [isSubtodosShow, setIsSubtodosShow] = useState(false);

  const openModal = useCallback(() => setIsModalShow(true), []);
  const closeModal = useCallback(() => setIsModalShow(false), []);
  const toggleIsSubtodosShow = () => setIsSubtodosShow((prev) => !prev);

  const isShowArrow = subTodos.length > 0;
  const showTodosCondition = subTodos.length > 0 && isSubtodosShow;

  return (
    <>
      <div className={styles.todoItem}>
        <div className={styles.todoInfo}>
          {isShowArrow && (
            <div
              className={cn(styles.arrow, [], {
                [styles.arrowRotated]: isSubtodosShow,
              })}
              onClick={toggleIsSubtodosShow}
            />
          )}
          <h3
            className={styles.todoName}
            onClick={() => todos.setActiveTask(id)}>
            {name}
          </h3>
          <Checkbox
            checked={isCompleted}
            onChange={() => todos.toggleComplete(id)}
          />
          <CrossIcon
            onClick={() => todos.removeTodo(id)}
            className={styles.cross}
          />
          <Button
            text="Add todo"
            onClick={openModal}
            size={ButtonSizes.SMALL}
          />
        </div>
        <div className={styles.subTodos}>
          {showTodosCondition &&
            subTodos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
        </div>
      </div>
      <Portal to={modalsContainer}>
        <Modal isShow={isModalShow} onClose={closeModal}>
          <CreateSubTodoModalContent id={id} onClose={closeModal} />
        </Modal>
      </Portal>
    </>
  );
});
