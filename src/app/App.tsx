import './styles/global.scss';

import { useState } from 'react';

import { Checkbox, Input } from 'src/shared/ui';

import { MainLayout } from './layouts';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <MainLayout>
      <h1>SNUS</h1>
      <Input />
      <Checkbox
        label="SNUS"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    </MainLayout>
  );
};

export default App;
