import {useState,useEffect} from "react";
import {MENU_API } from "./constants";

const useRestaurantMenuData=(resId)=>{
    const [resMenuData,setResMenuData]=useState(null);
    //About 5 hooks (learn)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json=await data.json();
        const resData=(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const categoryData=resData.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        setResMenuData(categoryData);
    }

    return resMenuData;
};

export default useRestaurantMenuData;