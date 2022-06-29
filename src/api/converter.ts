import { TodoType, UserType } from '../interfaces/interfaces';

const convert = {
  toTodos(todos: any): TodoType[] {
    return todos.map((todo: any) => ({
      userId: Number(todo.userId),
      id: String(todo.id),
      title: String(todo.title),
      completed: Boolean(todo.completed),
    }));
  },
  toUsers(users: any): UserType[] {
    return users.map((user: any) => ({
      id: Number(user.id),
      key: String(user.id),
      firstName: String(user.first_name),
      lastName: String(user.last_name),
      email: String(user.email),
      avatar: String(user.avatar),
    }));
  },
};

export default convert;
