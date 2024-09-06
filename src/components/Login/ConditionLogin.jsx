import React from "react";
import Logginn from "../Login/Logiinn";
import Register from "../Login/Register";

let isLoggedIn = true;

function ConditionLogin(){
    return(
        isLoggedIn ? <Logginn/> : <Register/>
    )
}
export default ConditionLogin;