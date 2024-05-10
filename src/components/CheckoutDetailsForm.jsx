import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addDoc, collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import db from "../Firebase.js";
import {checkout} from "../slices/CartSlice.jsx";

const updateInventory=async (cart)=>{
    for (const item of cart) {
        let docId;
        console.log(item)
        let queryDef= query(collection(db,'products'),where('id','==',item.item.id));
        let queryProd=await getDocs(queryDef);
        console.log(queryProd)

        queryProd.forEach((queryDoc)=>{
            console.log(queryDoc.id,queryDoc.data())
            docId=queryDoc.id;
            setDoc(doc(db,'products',docId),{stock:item.item.stock-item.qty},{merge:true}).then((resp)=>{
                console.log('Stock updated')
            })
        })
    }
}


export function CheckoutDetailsForm(props) {
    const {cartId,cart}=useSelector(state=>state.cart);
    const {userName,userEmail,userPhone,userAddress,userType,userUid}=useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleSubmit =  async (values,formikProps) => {
        console.log(values);
        console.log(props.total);

        updateInventory(cart)

      const orderRef=await addDoc(collection(db,'orders'),{
           userId:userUid,
           date:new Date().toDateString(),
           orderDetails:cart,
           shippingAddress:values.shippingAddress,
           status:'delivered'

        })
        console.log(orderRef.id)
        const paymentRef=await addDoc(collection(db,'payments'),{
            date:new Date().toDateString(),
            orderId:orderRef.id,
            paymentMethod:values.paymentMethod,
            paymentStatus:'Successful',
            totalAmount:props.total

        })
        console.log(paymentRef.id)
        setDoc(doc(db,'orders',orderRef.id),{paymentDetailsId:paymentRef.id},{merge:true}).then((data)=>{
            formikProps.resetForm();
            dispatch(checkout());
            console.log(cart);
            alert('Order has been placed successfully.');

        })







    }

    return (
        <>
            <div>
                <h3>Fill in the details below for checkout</h3>
                <Formik
                    initialValues={{
                    shippingAddress: '',
                    paymentMethod: ''
                    }}
                    onSubmit={(values,{setSubmitting})=>{
                        console.log(values);
                        setSubmitting(true);
                    }}
                    validationSchema={Yup.object({
                        shippingAddress: Yup.string()
                            .required('Required'),
                        paymentMethod: Yup.string()
                            .required('Required'),
                    })}


                >
                    {(formikProps)=>(
                        <Form>
                            <div>
                                <label htmlFor="shippingAddress">Shipping Address </label>
                                <Field name="shippingAddress" type="text"/>
                                <ErrorMessage name="shippingAddress"/>
                            </div>
                            <div>
                                <label htmlFor="paymentMethod">Payment Method </label>
                                <Field name="paymentMethod" type="text"/>
                                <ErrorMessage name="paymentMethod"/></div>

                            <Button type='primary' disabled={!(formikProps.isValid && formikProps.dirty)} onClick={()=>handleSubmit(formikProps.values,formikProps)} >Confirm Checkout</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}