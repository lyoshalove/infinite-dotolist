import './styles/global.scss';

import { TodoDetails, Todolist } from 'src/entity/todo';

import { MainLayout } from './layouts';

const App = () => {
  return (
    <MainLayout>
      <Todolist />
      <TodoDetails />
    </MainLayout>
  );
};

export default App;
