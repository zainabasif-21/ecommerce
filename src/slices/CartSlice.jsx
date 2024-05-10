import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash';

const cartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        cartId:'',
        cart:[]
    },
    reducers:{
        setCart: (state, action) => {
            state.cartId = action.payload;

        },
        addToCart: (state, action) => {
            console.log(state.cart,action.payload);
            state.cart=_.cloneDeep(action.payload);
            console.log(state.cart,action.payload);
           /*
           let products=_.cloneDeep(state.cart);//state.cart.map(item=> item)
           if(products.length==0){
                products.push({qty:1,item:{...action.payload}});
                state.cart=_.cloneDeep(products);
                console.log(products);
                console.log(state.cart);
            }
            else if(products.length>=1 )
            {
                let newItem=true;
                products.forEach((item,index,array)=>{
                    if(item.item.id==action.payload.id){
                        newItem=false;

                        array[index].qty=array[index].qty+1;

                        state.cart=_.cloneDeep(products);
                    }
                })
                if(newItem==true){
                    products.push({qty:1,item:{...action.payload}});
                    state.cart=_.cloneDeep(products);
                }
            }*/


        },
        removeFromCart: (state, action) => {
            /*let products=_.cloneDeep(state.cart);//state.cart.map(item=> item)
                console.log(products)
                products.forEach((item,index,array)=>{
                    if(item.item.id==action.payload.id){
                        if(array[index].qty>1)
                            array[index].qty=array[index].qty-1;
                        else{
                            array.splice(index,1);
                        }
                        state.cart=_.cloneDeep(products);
                    }

                })*/
            state.cart=_.cloneDeep(action.payload);
            console.log(state.cart)

        },
        checkout: (state, action) => {
            state.cart=[]
        },
        resetCart: (state, action) => {
            state.cartId=''
        }
    }
})

export const {setCart,addToCart, removeFromCart,checkout,resetCart} = cartSlice.actions;
export default cartSlice.reducer;