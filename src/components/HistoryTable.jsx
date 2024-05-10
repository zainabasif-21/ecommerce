import React, {useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Order-Id',
        dataIndex: 'docId',
        key: 'docId',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Order Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Shipping Address',
        dataIndex: 'shippingAddress',
        key: 'shippingAddress',
    },
    /*{
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
    },*/
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status'

    },
];
const data = [
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
const HistoryTable = (props) => {
    console.log(props.data)
    const [dispData, setDispData] = React.useState(null);

    useEffect(() => {
        let dataArr=[];
        props.data.forEach(item => {
            console.log(item);
            dataArr.push({'docId':item.docId, 'date':item.data.date,'status':item.data.status,'shippingAddress':item.data.shippingAddress});
        })
        setDispData(dataArr);
    }, []);


    return(
        <div>
            <Table columns={columns} dataSource={dispData} />
        </div>
    )
}
export default HistoryTable;