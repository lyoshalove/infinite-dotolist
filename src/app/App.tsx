import './styles/global.scss';

import { TodoDetails, Todolist } from 'src/entity/todo';

import { MainLayout } from './layouts';

const App = () => (
  <div className="app">
    <MainLayout>
      <Todolist />
    </MainLayout>
    <TodoDetails />
  </div>
);

export default App;
