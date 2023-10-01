import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    //Check if online
    const[onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
      window.addEventListener("offline", ()=>{
        setOnlineStatus(false)
      });

      window.addEventListener("online", ()=>{
        setOnlineStatus(true);
      });

    },[]);

    return onlineStatus;
}

export default useOnlineStatus;