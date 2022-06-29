import { Image, Table as TableAntd } from 'antd';
import { observer } from 'mobx-react-lite';
import { UserType } from '../interfaces/interfaces';
import users from '../store/users';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    sorter: (a: UserType, b: UserType) => a.id - b.id,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    sorter: (a: UserType, b: UserType) => {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }

      return 0;
    },
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    sorter: (a: UserType, b: UserType) => {
      if (a.lastName > b.lastName) {
        return 1;
      }
      if (a.lastName < b.lastName) {
        return -1;
      }

      return 0;
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (image: string) => <Image src={image} width={150} />,
  },
];

const Table = observer(() => {
  return (
    <TableAntd
      dataSource={users.users}
      columns={columns}
      pagination={{
        defaultPageSize: 4,
        showSizeChanger: true,
        pageSizeOptions: [3, 4, 5, 6, 7, 8],
      }}
    />
  );
});

export default Table;
