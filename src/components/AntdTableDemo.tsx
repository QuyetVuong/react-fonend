import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Category 1',
                value: 'Category 1',
            },
            {
                text: 'Category 2',
                value: 'Category 2',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value: string | number | boolean, record) => record.name.startsWith(value as string),
        width: '30%',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value: string | number | boolean, record) => record.address.startsWith(value as string),
        filterSearch: true,
        width: '40%',
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Nguyễn Văn A',
        age: 28,
        address: 'Hà Nội, Việt Nam',
    },
    {
        key: '6',
        name: 'Trần Thị B',
        age: 25,
        address: 'TP. Hồ Chí Minh, Việt Nam',
    },
    {
        key: '7',
        name: 'Lê Văn C',
        age: 35,
        address: 'Đà Nẵng, Việt Nam',
    },
    {
        key: '8',
        name: 'Phạm Thị D',
        age: 30,
        address: 'Cần Thơ, Việt Nam',
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const AntdFilterTable: React.FC = () => {
    return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default AntdFilterTable;
