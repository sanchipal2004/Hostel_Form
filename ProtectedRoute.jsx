import React, { useEffect}from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({children})=>{
   const authtoken= localStorage.getItem("authtoken");
   const parsedtoken=JSON.parse(authtoken);
    const navigate= useNavigate();
    useEffect(()=>{
        if (!parsedtoken) {navigate('/login')}
    },[])
if(parsedtoken){
return children;
}

 
    
}
export default ProtectedRoutes