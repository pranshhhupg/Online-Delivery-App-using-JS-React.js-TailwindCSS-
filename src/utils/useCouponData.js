import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useCouponData = (resId) =>{
    const [couponData,setCouponData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        const gatheredData=json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        setCouponData(gatheredData);
    }

    return couponData;
};

export default useCouponData;