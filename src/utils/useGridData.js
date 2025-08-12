import { useState,useEffect } from "react";

const useGridData = () => {
    const [gridData,setGridData]=useState(null);

    useEffect (()=>{
        fetchData();
    },[])
    
    const fetchData = async ()=>{
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setGridData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    return gridData;
}

export default useGridData;