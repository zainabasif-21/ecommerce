import {Link} from "react-router-dom";
import './Navbar.css';
import Search from "antd/es/input/Search.js";

export function Navbar() {
    return (
        <>
            <div>
                <ul className="nav">
                    <Link to='/'><li className="logo-item"><img src='/home/zainabasif/Downloads/logo.png' alt='Logo'/></li></Link>
                    <Link to='/home'><li className="nav-item">Home</li></Link>
                    <li className="nav-item"><Search placeholder="input search text" enterButton="Search" size="large" allowClear={true} /></li>
                    <Link to='/login'><li className="nav-item">Login</li></Link>
                    <li className="nav-item">Logout</li>
                    <Link to='/about'><li className="nav-item">About</li></Link>
                    <Link to='/feedback'><li className="nav-item">Feedback</li></Link>
                </ul>
            </div>
        </>
    )
}