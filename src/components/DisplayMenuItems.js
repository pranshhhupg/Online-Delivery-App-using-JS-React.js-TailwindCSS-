import CategoryItems from "./CategoryItems";
import { useState } from "react";

const DisplayMenuItems = ({menuData,displayList,setDisplayIndex, resetDisplayIndex}) => {
    const {title}=menuData?.card?.card;
    const menuItemsData=menuData?.card?.card?.itemCards;
    let count=0;
    
    const [showSymbol,setShowSymbol]=useState("▼")

    const handleClick =()=>{
        displayList ? resetDisplayIndex() : setDisplayIndex();
        
        showSymbol === "▼" ? setShowSymbol("▲") : setShowSymbol("▼");
    }

    return (
        <div className="categoryItems w-200 mx-auto justify-center mb-7 shadow-lg ">
            <div className="accordianHeader font-bold text-2xl flex justify-between p-3 bg-gray-50 rounded-t-lg border-b-1 border-gray-200 pr-5 cursor-pointer"
                onClick={handleClick}
            >
                <span>{title}({menuData?.card?.card?.itemCards.length})</span>
                <span>{showSymbol}</span>
            </div>
            {displayList &&
            menuItemsData.map((data)=>(
                <CategoryItems key={count++} menuDataItems={data}/>
            ))
            }
        </div>

    )

}

export default DisplayMenuItems;