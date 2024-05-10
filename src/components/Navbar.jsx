import {Link, useNavigate} from "react-router-dom";
import './Navbar.css';
import Search from "antd/es/input/Search.js";
import {Button} from "antd";
import {useState} from "react";
import {Cart} from "./Cart.jsx";
import {useDispatch} from "react-redux";
import {logout} from "../slices/AuthSlice.jsx";
import {resetCart} from "../slices/CartSlice.jsx";

export function Navbar() {
    const [cart, setCart] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        setCart(!cart);
    }
    const handleLogout=()=>{
        dispatch(logout());
        dispatch(resetCart());
        navigate('/');
    }

    return (
        <>
            <div>
                <ul className="nav">
                    <Link to='/'>
                        <li className="logo-item"><img src='/home/zainabasif/Downloads/logo.png' alt='Logo'/></li>
                    </Link>
                    <Link to='/home'>
                        <li className="nav-item">Home</li>
                    </Link>

                    <Link to='/login'>
                        <li className="nav-item">Login</li>
                    </Link>
                    <li className="nav-item"><Button onClick={handleLogout}>Logout</Button> </li>

                    <Link to='/account'>
                        <li className="nav-item">Account</li>
                    </Link>
                    <Link to='/history'>
                        <li className="nav-item">Order History</li>
                    </Link>
                    <Link to='/about'>
                        <li className="nav-item">About</li>
                    </Link>
                    <Link to='/feedback'>
                        <li className="nav-item">Feedback</li>
                    </Link>
                    <li className="nav-item"><Button onClick={handleClick}>Cart</Button></li>
                </ul>
                {cart && <div className='cartDiv'>
                    This is my cart
                    <Cart/>
                </div>}
            </div>
        </>
    )
}