import { useState,useEffect } from "react";

const useListOfRestaurant = () => {

    const [ListOfRestaurant,setListOfRestaurant]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch ("https://pastebin.com/raw/HRvwaTDm");
        const json = await data.json();
        setListOfRestaurant(json?.data?.success?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return ListOfRestaurant;
};

export default useListOfRestaurant;