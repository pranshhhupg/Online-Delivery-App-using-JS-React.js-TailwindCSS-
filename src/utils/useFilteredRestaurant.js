import {useState, useEffect} from "react";

const useFilteredRestaurant = () => {
    const [filteredRestaurant,setFilteredRestaurant]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch ("https://pastebin.com/raw/7hv190XZ");
        const json = await data.json();
        setFilteredRestaurant(json?.data?.success?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return filteredRestaurant;
}

export default useFilteredRestaurant;