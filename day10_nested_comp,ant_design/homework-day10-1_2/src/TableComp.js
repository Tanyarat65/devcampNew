import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Space } from 'antd';
import AvatarComp from './AvatarComp';
import ButtonComp from './ButtonComp';

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <ButtonComp/>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      avatar: <AvatarComp/>,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      avatar: <AvatarComp/>,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      avatar: <AvatarComp/>,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  

const TableComp = ()=>{
    return(
        <>
        <Table columns={columns} dataSource={data} />
        </>
    );
}
export default TableComp;