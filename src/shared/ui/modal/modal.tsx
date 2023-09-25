import { PropsWithChildren, useEffect } from 'react';

import styles from './styles.module.scss';

interface ModalProps extends PropsWithChildren {
  isShow: boolean;
  onClose: () => void;
}

export const Modal = ({ isShow, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleCloseModalByEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleCloseModalByEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseModalByEscape);
    };
  }, [onClose]);

  return (
    <>
      {isShow && (
        <>
          <div className={styles.overlay} onClick={onClose} />
          <div className={styles.modal}>{children}</div>
        </>
      )}
    </>
  );
};
