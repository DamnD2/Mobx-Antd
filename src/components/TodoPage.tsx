import { Row, Col } from 'antd';
import AddTodoField from './AddTodoField';
import TodoList from './TodoList';

function TodoPage() {
  return (
    <div style={{ flex: '1 0 auto' }}>
      <Row>
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <AddTodoField />
          <TodoList />
        </Col>
      </Row>
    </div>
  );
}

export default TodoPage;
