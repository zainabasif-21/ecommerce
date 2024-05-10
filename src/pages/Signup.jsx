import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc, getDoc, collection,addDoc} from "firebase/firestore";
import db from "../Firebase.js";
import {useNavigate} from "react-router-dom";
import {login} from "../slices/AuthSlice.jsx";
import {useDispatch} from "react-redux";
import {setCart} from "../slices/CartSlice.jsx";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const obj = {
        name: setName,
        password: setPassword,
        phone: setPhone,
        email: setEmail,
        address: setAddress,
    }

    const handleChange = (e) => {

        obj[e.target.id](e.target.value);
        //console.log('Name: '+name +'Password: '+ password+ 'Email: '+email+'Phone '+phone+'Address: '+address);


    }

    const handleSignup = () => {
        //console.log(name, password,email,phone,email,address);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in

                const user = userCredential.user;
                let obj={
                    name,
                    password,
                    email,
                    address,
                    phone,
                    type: 'user'
                }
                console.log(user.uid)
                await setDoc(doc(db, 'userInfo', user.uid), obj)
                const docRef=await addDoc(collection(db,'cart'),{
                    userId:user.uid,
                })
                dispatch(login({...obj,uid: user.uid}));
                dispatch(setCart(docRef.id));
                navigate('/home');
                // ..



            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('Error Codde: ' + errorCode + '. Error Message: ' + errorMessage);
            });
    }

    return (
        <Form
            onChange={handleChange}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="phone number"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="address"
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Address',
                    },
                ]}
            >
                <Input/>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={handleSignup}>
                    Signup
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Signup;