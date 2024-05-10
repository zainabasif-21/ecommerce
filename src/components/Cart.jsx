import {useSelector} from "react-redux";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

 export function Cart() {
    const {userUid}=useSelector((state) => state.auth);
    const {cartId,cart}=useSelector((state) => state.cart);
    const navigate = useNavigate();
    console.log(userUid);
    console.log(cart,cartId);

    const handleCheckout=()=>{
        console.log('checked outtttttttt');
        navigate('/checkout')
    }


    return (
        <><div>
            My Cart
            <Button onClick={handleCheckout}>Checkout</Button>
        </div></>
    )
}