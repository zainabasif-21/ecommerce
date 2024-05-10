import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from "antd";
import {DetailsComponent} from "../components/DetailsComponent.jsx";

export function Details() {

    const location = useLocation();
    const [details, setDetails] = useState(null);

    useEffect( () => {
        const {data}={...location.state}
        setDetails(data);
    }, []);


    return (
        <>
            <div>
                <h1>Detailed Description of Product</h1>
                <div>
                    {details && <DetailsComponent details={details}/>}
                </div>
            </div>


        </>
    );
}