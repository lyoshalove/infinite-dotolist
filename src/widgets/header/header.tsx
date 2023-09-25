import { useCallback, useState } from 'react';

import { CreateTodoModalContent } from 'src/features/create-todo';
import { Logo } from 'src/shared/icons';
import { Button, Container, Modal } from 'src/shared/ui';

import { Portal } from '../portal';
import styles from './styles.module.scss';

const modalsContainer = document.querySelector('#modals');

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = useCallback(() => setIsShowModal(true), []);
  const closeModal = useCallback(() => setIsShowModal(false), []);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <Button text="Add todo" onClick={openModal} />
          </div>
        </Container>
      </header>
      <Portal to={modalsContainer}>
        <Modal isShow={isShowModal} onClose={closeModal}>
          <CreateTodoModalContent onClose={closeModal} />
        </Modal>
      </Portal>
    </>
  );
};
