import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'ToDo Page',
    key: 'mail',
    icon: (
      <>
        <MailOutlined style={{ marginRight: 10 }} />
        <Link to="" />
      </>
    ),
  },
  {
    label: 'Table Page',
    key: 'app',
    icon: (
      <>
        <AppstoreOutlined style={{ marginRight: 10 }} />
        <Link to="table" />
      </>
    ),
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        marginBottom: 20,
        padding: '5px 100px',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}
    />
  );
};

export default Header;
