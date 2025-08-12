import { useState,useEffect } from "react";
import { ShimmerBody } from "./ShimmerUi";
import useListOfRestaurant from "../utils/useListOfRestaurants"
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Search = () => {
    
    const ListOfRestaurant=useListOfRestaurant();
    const [filteredRestaurant,setFilteredRestaurant]=useState("");
    const [searchText,setSearchText]=useState("");
    const [notSearched,setNotSearched]=useState(true);

    const handleSearchBtn = () => {
        const searchList = ListOfRestaurant.filter((restaurant)=>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(searchList);
        setNotSearched(false);
    }

    return (ListOfRestaurant===null )  ? <ShimmerBody/>: (
        <div className="search-container  items-center justify-center mt-10 ">
            <div className="searchBar px-4 items-center text-center">
            <div>
                <button className="search-btn font-bold px-5 h-12 ml-[677px] mt-1 absolute text-white bg-black rounded-md hover:cursor-pointer transform hover:scale-105 transition duration-150"
                onClick={handleSearchBtn}>
                Search
                </button>
                <input type="text" className="search w-190 ml-5 mr-5 h-14 border-1 border-solid border-gray-400 rounded-lg pl-2 " 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                placeholder="Search for restaurants"
                >

                </input>

                
            </div>
            
            </div>

            <div className="display-container flex flex-wrap items-center  pt-3 pl-3">

                {
                    !notSearched && filteredRestaurant.length===0 && (
                        <div className="not found items-center justify-center text-center p-10 my-1 bg-orange-200 rounded-lg mx-110 w-200 mt-10 ">
                            <h1 className="font-bold text-7xl">Not Found!</h1>
                            <h2 className="text-md">The Restaurant you are searching is not there!</h2>
                        </div>)
                }

                {notSearched && filteredRestaurant.length===0 && (
                    <div className="Search for restaurants items-center justify-center text-center p-10 my-1 bg-orange-200 rounded-lg mx-110 w-200 mt-10 ">
                        <h1 className="font-bold text-5xl ">Search for Restaurants</h1>
                        <h2 className="mt-1">Search Across Top Restaurant Chains in Kanpur</h2>
                    </div>)
                }
                {  
                filteredRestaurant.length!=0 && filteredRestaurant.map((restaurant)=>(
                    <Link to={"restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                        {
                            <RestaurantCard resData={restaurant}/> 
                        }
                    </Link> 
                ))
                }
            </div>
        </div>
        
        
    )
};

export default Search;