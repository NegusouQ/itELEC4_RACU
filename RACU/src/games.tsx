import './games.css'
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space, Table, Tag, Rate, ConfigProvider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Typography } from 'antd';
import type { SearchProps } from '../Search';
import type { ColumnsType } from 'antd/es/table';

// dropdown
const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Video Game',
    },
    {
      key: '2',
      label: 'Adventure Game',
    },
    {
      key: '3',
      label: 'Action',
    },
  ];

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
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
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
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
      render: (_, record) => (
        <Space size="middle">
          <Rate />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  

const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />
// );

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Games: React.FC = () => {
    return <>
        <div className="games-main-container">
        <ConfigProvider
        theme={{
            token: {
                colorBgContainer: 'transparent',
                colorText: 'white',
                colorTextPlaceholder: 'white'
            },
        }}
        >
            <Space direction="horizontal">
                    <Search
                    style={{ width:'500px', marginRight: '50px' }}
                    placeholder="Search by Game name" onSearch={onSearch} enterButton />

            <ConfigProvider
            theme={{
                token: {
                    colorBgElevated: 'black',
                },
            }}
            >
                            <Dropdown
                                menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ['3'],
                                }}
                            >
                                <Typography.Link>
                                <Space>
                                    Category
                                    <DownOutlined />
                                </Space>
                                </Typography.Link>
                            </Dropdown>
            </ConfigProvider>
                
            </Space>
        </ConfigProvider>
        

        <ConfigProvider
        theme={{
            components: {
            Table: {
                colorBgContainer: '#131313',
                headerColor: 'white',
                colorText: 'white',
            },
            },
        }}
        >
        <Table
        style={{ marginTop: '20px' }}
        columns={columns} dataSource={data} />
        </ConfigProvider>
        
        </div>
    </>
}

export default Games;