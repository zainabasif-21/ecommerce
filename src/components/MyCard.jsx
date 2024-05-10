import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Button, Card} from 'antd';
import {useNavigate} from "react-router-dom";
const { Meta } = Card;



function MyCard (props) {

    const {data}=props

    const navigate = useNavigate();

    const showDetails=()=>{
        navigate(`/details/${data.id}`,{
            state:{
                data
            }
        })
        console.log('show Details');
    }

    const addToCart=()=>{
        console.log('Add to cart');
    }




    return (
        <Card
            style={{
                width: 300,
                margin:10,
            }}

            cover={
                <img
                    alt="example"
                    src={data.imageUrl}
                    width={300}
                    height={250}
                />
            }

            actions={[
                <Button type='text' onClick={showDetails}>Show Details</Button>,

            ]}

        >
            <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                title={data.name}
                description={`Price: ${data.price}`}

            />


        </Card>
    );
}
export default MyCard;