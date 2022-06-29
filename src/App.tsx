import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import todo from './store/todo';
import TodoPage from './components/TodoPage';
import Footer from './components/Footer';
import Header from './components/Header';

import 'antd/dist/antd.min.css';
import users from './store/users';
import TablePage from './components/TablePage';

const { Content } = Layout;

const App = observer(() => {
  useEffect(() => {
    todo.setTodos();
    users.setUsers();
  }, []);

  return (
    <Layout
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route index element={<TodoPage />} />
            <Route path="table" element={<TablePage />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
});

export default App;
