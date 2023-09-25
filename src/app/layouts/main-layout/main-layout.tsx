import { PropsWithChildren } from 'react';

import { Container } from 'src/shared/ui';
import { Header } from 'src/widgets/header';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
