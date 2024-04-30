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

export default function MyRoutes() {
    const {Header, Content, Footer} = Layout;

    return (
        <div className='routes-div'>
            <Header>
                <Navbar/>
            </Header>
            <Content>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/about" element={<About/>}/>
                    {/*<Route path="/search" element={<Search/>}/>*/}
                    <Route path='/feedback' element={<Feedback/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>

            </Content>
            <Footer>

            </Footer>

        </div>
    )
}
