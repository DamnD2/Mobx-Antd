export type TodoType = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export type UserType = {
  id: number;
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

export enum color {
  green = '#4ca867',
  black = '#474747',
  red = '#db2c1f',
  background = '#dadce0',
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
