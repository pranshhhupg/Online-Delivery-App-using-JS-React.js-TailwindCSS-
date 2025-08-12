import { useState,useEffect } from "react";
import {MENU_API } from "./constants";

const useRestaurantMenuDetails = (resId) => {
    const [resDetails,setResDetails] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data= await fetch(MENU_API+resId);
        const json = await data.json();
        setResDetails(json?.data?.cards[2]?.card?.card?.info);
    }

    return resDetails;
};

export default useRestaurantMenuDetails;