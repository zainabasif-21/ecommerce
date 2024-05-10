import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "../Firebase.js";
import HistoryTable from "../components/HistoryTable.jsx";




export function OrdersHistory() {
    const {userUid}=useSelector((state) => state.auth);
    const [orders, setOrders] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    console.log(userUid);

    const fetchOrdersHistory = async(userId) => {
        let ordersArray=[];
        console.log(userId);
        const reqQuery=query(collection(db,'orders'),where('userId','==',userId));
        let docs= await getDocs(reqQuery);
        docs.forEach((doc)=>{
            console.log(doc.id,doc.data())
            ordersArray.push({docId:doc.id,data:doc.data()});
        })
        console.log(ordersArray);
        setOrders(ordersArray);

    }

    useEffect(() => {
        fetchOrdersHistory(userUid).then(r => {
            console.log('done')
            setIsLoaded(true);
        })
    }, []);




    return (
        <><div>
            <h3>Orders history table</h3>
            {isLoaded && <HistoryTable data={orders}/>}
        </div></>
    )
}