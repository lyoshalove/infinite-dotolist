import { Logo } from 'src/shared/icons';
import { Button, Container } from 'src/shared/ui';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Button text="Add todo" />
        </div>
      </Container>
    </header>
  );
};
