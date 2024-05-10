import {createSlice} from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState: {
        userName: "",
        userPassword: "",
        userType: "",
        userAddress:"",
        userEmail:"",
        userPhone:"",
        userUid:"",
    },
    reducers: {
        register: (state, action) => {
            state.userName = action.payload.name;
            state.userType = action.payload.type;
            state.userPassword = action.payload.password;

        },
        login: (state, action) => {
            state.userType = action.payload.type;
            state.userName = action.payload.name;
            state.userPassword = action.payload.password;
            state.userEmail=action.payload.email;
            state.userPhone=action.payload.phone;
            state.userUid=action.payload.uid;
            state.userAddress=action.payload.address;
            console.log(state.userType, state.userPassword,state.userName);
            console.log(state.userEmail,state.userPhone,state.userUid);

        },
        logout: (state, action) => {
            state.userType = "";
            state.userName = "";
            state.userPassword = "";
            state.userEmail="";
            state.userPhone="";
            state.userUid="";
            state.userAddress="";

        },

    }
})

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;