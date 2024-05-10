// eslint-disable-next-line no-unused-vars
import './MyRoutes.css'
import React from 'react'
import {Home} from "../pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "../pages/ErrorPage.jsx";
import {LandingPage} from "../pages/LandingPage.jsx";
import {About} from "../pages/About.jsx";
import {Navbar} from "./Navbar.jsx";
import {Login} from "../pages/Login.jsx";
import {Feedback} from "../pages/Feedback.jsx";
import {Layout} from "antd";
import Signup from "../pages/Signup.jsx";
import {Details} from "../pages/Details.jsx";
import {Account} from "../pages/Account.jsx";
import {Checkout} from "../pages/Checkout.jsx";
import {ProtectorWrapper} from "./ProtectorWrapper.jsx";
import {OrdersHistory} from "../pages/OrdersHistory.jsx";

export default function MyRoutes() {
    const {Header, Content, Footer} = Layout;

    return (
        <div className='routes-div'>
            <Header className="nav">
                <Navbar/>
            </Header>
            <Content className='content'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<ProtectorWrapper><LandingPage/></ProtectorWrapper>}/>
                    <Route path="/account" element={<ProtectorWrapper><Account/></ProtectorWrapper>}/>
                    <Route path="/details/:id" element={<ProtectorWrapper><Details/></ProtectorWrapper>}/>
                    <Route path='/checkout' element={<ProtectorWrapper><Checkout/></ProtectorWrapper>}/>
                    <Route path='/history' element={<ProtectorWrapper><OrdersHistory/></ProtectorWrapper>}/>
                    {/*<Route path="/search" element={<Search/>}/>*/}
                    <Route path='/feedback' element={<Feedback/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </Content>


        </div>
    )
}
