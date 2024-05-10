import {Button, Card} from "antd";
import './DetailsComponent.css'
import {useEffect, useState} from "react";
import {addToCart, removeFromCart} from "../slices/CartSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {doc, setDoc} from "firebase/firestore";
import db from "../Firebase.js";

export function DetailsComponent(props) {
    const {cartId,cart}=useSelector(state=>state.cart);
    const {userUid}=useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const details ={...props.details}

    const removeCart=()=>{
        let productsRem=_.cloneDeep(cart);
        let exists=false;
        if(productsRem.length>0){
            productsRem.forEach((item,index,array)=>{
                if(item.item.id == details.id){
                    if(array[index].qty>1)
                        array[index].qty=array[index].qty-1;
                    else{
                        array.splice(index,1);
                    }
                }
            })
            let obj={
                userId:userUid,
                items:productsRem
            }
            console.log(obj)
            setDoc(doc(db, 'cart', cartId), obj).then((resp)=>{
                console.log('daat writing done',resp)
                dispatch(removeFromCart(productsRem))
            }).catch(err=>{
                console.log('Error Code: ' + err)
            })

        }
    }

    const addCart=()=>{
        //
        let products=_.cloneDeep(cart);

        if(products.length==0){
            products.push({qty:1,item:{...details}});
        }
        else if(products.length>=1 )
        {
            let newItem=true;
            products.forEach((item,index,array)=>{
                if(item.item.id==details.id){
                    newItem=false;
                    if(details.stock>array[index].qty)
                        array[index].qty=array[index].qty+1;
                    else
                        alert('Item Quantity cannot exceed the current stock')
                }
            })
            if(newItem==true){
                products.push({qty:1,item:{...details}});
            }
        }
        let obj={
            userId:userUid,
            items:products
        }
        console.log(obj)
         setDoc(doc(db, 'cart', cartId), obj).then((resp)=>{
             console.log('daat writing done',resp)
             dispatch(addToCart(products));
         }).catch((err)=>{
             console.log('Error Code: ' + err)
         })

    }


    return (
        <div >
            <Card
                title={details.name}
                bordered={false}
                style={{
                    width: 500,
                    padding:15,
                    margin:10,
                }}
            >
                <div className='prodDesc'>
                <div>Name: {details.name}</div>
                <div>Category: {details.category}</div>
                <div>Brand: {details.brand}</div>
                <div>Description: {details.description}</div>
                <b><div>Price: ${details.price}</div></b>
                </div>
                <div className='btnDiv'>
                    <Button size='large' type='primary' onClick={addCart}> + </Button>
                    <p>Add/Remove to cart</p>
                    <Button size='large' type='primary' onClick={removeCart}> - </Button>
                </div>
            </Card>


        </div>
    )
}