import todo from '../store/todo';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import { Space, Spin } from 'antd';

const TodoList = observer(() => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 20px',
      }}
    >
      <div>
        {todo.todos.length ? (
          todo.todos.map((item, index) => (
            <TodoItem key={item.id} data={item} index={index + 1} />
          ))
        ) : (
          <Space size="middle" style={{ paddingTop: 50 }}>
            <Spin size="large" />
          </Space>
        )}
      </div>
    </div>
  );
});

export default TodoList;
