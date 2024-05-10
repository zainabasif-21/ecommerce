import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {Button} from "antd";

export function ProtectorWrapper(props) {
    const {userUid} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    let isAuthenticated = userUid? true : false;


    return (
        <>
            {isAuthenticated ? (props.children) :
                <div>
                    User not logged in. Kindly log in.
                    <div>
                        <Button type='primary' onClick={()=>{
                            navigate('/login')
                        }}>Login</Button>
                    </div>

                </div>}
        </>
    )
}