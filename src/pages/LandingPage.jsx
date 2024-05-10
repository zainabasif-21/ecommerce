import {collection, getDocs} from "firebase/firestore";
import db from "../Firebase.js";
import {useEffect, useState} from "react";
import React from 'react';
import MyCard from "../components/MyCard.jsx";
import './LandingPage.css'
import {useSelector} from "react-redux";
import {Algolia} from "../Algolia.jsx";

export function LandingPage() {
    const [data, setData] = useState([]);
    const {userName,userUid}=useSelector(state => state.auth);

    console.log(userName,userUid);

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));

        let dataArray = [];
        querySnapshot.forEach((doc) => {
            dataArray.push(doc.data());
        });
        setData(dataArray);

    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <div className='landingMain'>

                <div>
                    <br/>
                    <h2>Welcome to Logic Cove</h2></div>
                <div>
                    <br/>
                    <Algolia></Algolia>
                </div>
                {/*<div className='cardDisplay'>
                    {data && data.map((doc, index) => {
                        //console.log(doc)
                        return (<MyCard data={doc} key={index} id={index}/>)})}
                </div>*/}

            </div>
        </>
    )
}