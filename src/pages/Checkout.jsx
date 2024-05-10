import {useSelector} from "react-redux";
import {Formik} from "formik";
import {useEffect, useState} from "react";
import {Button} from "antd";
import {CheckoutDetailsForm} from "../components/CheckoutDetailsForm.jsx";

export function Checkout() {
    const {cartId,cart}=useSelector(state=>state.cart);
    const {userName,userEmail,userPhone,userAddress,userType}=useSelector(state => state.auth)
    const [total,setTotal]=useState(0);

    const calculateTotal=(cart)=>{
        let calTotal=0;
        cart.forEach((item)=>{
            calTotal+=(Number(item.item.price)*Number(item.qty));
        })
        setTotal(calTotal)
    }


    useEffect(() => {
        calculateTotal(cart);
    }, []);

    return (
        <>
            <div>
                <div>
                <h1>Your bill</h1>
                <p>Name: {userName}</p>
                <p>Email: {userEmail}</p>
                <p>Phone: {userPhone}</p>
                <p>Total: ${total}</p>
                </div>
                <div>
                    <p>Enter you details for billing option</p>
                    <CheckoutDetailsForm total={total}/>

                </div>
            </div>
        </>
    )
}