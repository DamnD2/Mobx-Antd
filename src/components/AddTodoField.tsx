import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Input, Space, Button, notification } from 'antd';

import todo from '../store/todo';
import { NotificationType } from '../interfaces/interfaces';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '920px',
  },
};

const AddTodoField = observer(() => {
  const [title, setTitle] = useState<string>('');

  const handleAdd = () => {
    if (title) {
      todo.addTodo(title);
      setTitle('');
      openNotificationWithIcon('success');
    }
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    notification[type]({
      message: 'Successfully',
      description: 'New todo added successfully',
      duration: 2,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event?.target.value);

  return (
    <Space style={styles.wrapper}>
      <Input
        value={title}
        onChange={handleChange}
        size="large"
        style={{ width: 500 }}
        placeholder="New todo"
      />
      <Button size="large" type="primary" onClick={handleAdd}>
        Add
      </Button>
    </Space>
  );
});

export default AddTodoField;
