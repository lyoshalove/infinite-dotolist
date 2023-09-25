import './styles/global.scss';

import { useState } from 'react';

import { Checkbox, Input, Textarea } from 'src/shared/ui';

import { MainLayout } from './layouts';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <MainLayout>
      <h1>SNUS</h1>
      <Input placeholder="Write todo" />
      <Checkbox
        label="SNUS"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <Textarea placeholder="Write description" />
    </MainLayout>
  );
};

export default App;
