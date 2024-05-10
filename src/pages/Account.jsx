import {useSelector} from "react-redux";

export function Account() {
const {userName,userEmail,userPhone,userAddress,userType}=useSelector(state => state.auth)

console.log(userName,userEmail,userPhone,userAddress,userType);
    return (
        <>
            <div>
                <h2>User Account Details</h2>
                {userName && userEmail && userPhone && userAddress && userType && userType && <div>
                    <p>User Name: {userName}</p>
                    <p>User Email: {userEmail}</p>
                    <p>User Phone: {userPhone}</p>
                    <p>User Address: {userAddress}</p>
                </div>}
                {!(userName && userEmail && userPhone && userAddress && userType) && <div>
                    <h3>User not logged in</h3>
                    <h4>Kindly log in to view Details</h4>
                </div>}
            </div>
        </>
    )
}