import { PropsWithChildren } from 'react';

import { Container } from 'src/shared/ui';
import { Header } from 'src/widgets/header';

import styles from './styles.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};
