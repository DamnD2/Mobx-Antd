import { Checkbox, Typography, Modal, Space } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { color, TodoType } from '../interfaces/interfaces';
import todo from '../store/todo';

const { Title } = Typography;
const { confirm } = Modal;

const styles = {
  wrapper: { display: 'flex', alignItems: 'center' },
};

type TodoItemProps = {
  data: TodoType;
  index: number;
};

const TodoItem = ({ data, index }: TodoItemProps) => {
  const { id, completed, title } = data;

  const handleChangeStatus = () => todo.changeStatus(id);

  const handleRemove = () => todo.removeTodo(id);

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this todo?',
      icon: <ExclamationCircleOutlined />,
      content: 'If you do this, you will not be able to recover in the future!',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleRemove();
      },
    });
  };

  return (
    <Space style={styles.wrapper}>
      <Title
        level={3}
        delete={completed}
        style={{ color: completed ? color.green : color.black }}
      >{`${index}. ${title}`}</Title>
      <Checkbox onClick={handleChangeStatus} checked={completed} />
      <DeleteFilled
        style={{ color: color.red, fontSize: 18 }}
        onClick={showDeleteConfirm}
      />
    </Space>
  );
};

export default TodoItem;
