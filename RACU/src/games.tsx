import './games.css'
import { AudioOutlined } from '@ant-design/icons';
import gamePic from "../src/assets/images/genshin.png"
import React from 'react';
import { Input, Space, Table, Tag, Rate, ConfigProvider, Modal } from 'antd';
import { DownOutlined, StarFilled } from '@ant-design/icons';
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
    year: number;
    developer: string;
    category: string[];
    rating: number;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Game Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Year Published',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Developer',
      dataIndex: 'developer',
      key: 'developer',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: (_, { category }) => (
        <>
          {category.map((tag) => {
            let color = tag.length > 15 ? 'geekblue' : 'green';
            if (tag === 'Racing') {
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
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      // render: (_, record) => (
      //   <Space size="middle">
      //     <Rate />
      //   </Space>
      // ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Genshin Impact',
      year: 2020,
      developer: 'miHoYo',
      category: ['Video Game', 'Adventure Game'],
      rating: 4.7,
    },
    {
      key: '2',
      name: 'Jim Green',
      year: 2021,
      developer: 'London No. 1 Lake Park',
      category: ['Racing'],
      rating: 4.5,
    },
    {
      key: '3',
      name: 'Joe Black',
      year: 2019,
      developer: 'Sydney No. 1 Lake Park',
      category: ['Simulation Video Game', 'First-person Shooter'],
      rating: 4.9,
    },
  ];


  // MODAL
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  
  // END OF MODAL

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
                borderColor: '#131313',
                rowHoverBg:'#0197FF'
            },
            },
        }}
        >
        <Table
        style={{ marginTop: '20px' }}
        columns={columns} dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {}, // click row
          };
        }} />
        </ConfigProvider>
        
        </div>
    </>
}

export default Games;