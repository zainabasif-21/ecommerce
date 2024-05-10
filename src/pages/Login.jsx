import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../slices/AuthSlice.jsx";
import {setCart} from '../slices/CartSlice.jsx'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, query, where, collection, getDocs} from "firebase/firestore";
import db from '../Firebase.js'
import './Login.css'

const auth = getAuth();

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let {userName, userPassword, userType,userEmail,userPhone,userUid} = useSelector((state) => state.auth);
    let {cart,cartId}=useSelector((state) => state.cart);

    const obj = {
        name: setName,
        password: setPassword,
    }

    const handleChange = (e) => {
        obj[e.target.id](e.target.value);

    }
    const handleClick = () => {

        signInWithEmailAndPassword(auth, name, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const reqQuery=query(collection(db,'cart'),where('userId','==',user.uid))
                // ..
                console.log(user.uid)
                getDoc(doc(db, 'userInfo', user.uid)).then((data)=>{
                    let userData=data.data();
                    dispatch(login({name:userData.name, password:userData.password, type: 'user',address:userData.address,phone:userData.phone,uid:user.uid,email:userData.email}));

                    getDocs(reqQuery).then(data=>{
                      console.log('Success:', data)
                        data.forEach((doc)=>{
                            console.log('Here in  for each')
                            console.log(doc.id, " => ", doc.data());
                            dispatch(setCart(doc.id));
                            console.log('Here')
                            console.log(cart,cartId,userName, userPassword, userType,userEmail,userPhone,userUid);
                            navigate('/home');
                        })
                    })


                })




            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

        //dispatch(login({name, password, type: 'user',}));
       // navigate('/home')
    }


    return (<div className='loginDiv'>

            <Form
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onChange={handleChange}
        >
            <Form.Item
                name="name"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            {/*<Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>*/}

            <Form.Item>
                <Button type="primary" onClick={handleClick} htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to='/signup'><a href="">register now!</a></Link>
            </Form.Item>
        </Form>
        </div>
    )
}
