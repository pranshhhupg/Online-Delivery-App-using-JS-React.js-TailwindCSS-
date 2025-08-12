import RestaurantCard, {withNonVegLabel} from "./RestaurantCard";
import { useState,useEffect} from "react";
import {ShimmerBody} from "./ShimmerUi";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurants";
import useListOfRestaurant from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import useGridData from "../utils/useGridData";
import GridItems from "./GridItems";
import Footer from "./Footer";
import { toast } from "react-toastify";


const Body = () => {

    const topRated = () => toast.info("Showing Top Rated Restaurants",{
        position:"top-right",
        autoClose:1500
    });

    const vegOnly = () => toast.info("Showing Veg Restaurants",{
        position:"top-right",
        autoClose:1500
    });

    const NonVegOnly = () => toast.info("Showing Non-Veg Restaurants",{
        position:"top-right",
        autoClose:1500
    });

    let count=1;

    const [buttonTopRated, setButtonTopRated]= useState(true);
    const [buttonVegOnly, setButtonVegOnly]= useState(true);
    const [buttonNonVegOnly, setButtonNonVegOnly]=useState(true);

    const handleTopRatedBtn = () => {
        setButtonTopRated(!buttonTopRated);
        setButtonVegOnly(true);
        setButtonNonVegOnly(true);

        if(buttonTopRated===true) topRated();

        count =1;
        setCartsToRender(10);
        const filteredList = ListOfRestaurant.filter((res)=>
            res?.info?.avgRating >= 4.5
        );
        buttonTopRated ? setFilteredRestaurant(filteredList) : setFilteredRestaurant(ListOfRestaurant);
    }

    const handleVegOnlyBtn = () => {
        setButtonVegOnly(!buttonVegOnly);
        setButtonNonVegOnly(true);
        setButtonTopRated(true);

        if(buttonVegOnly===true)  vegOnly();

        count=1;
        setCartsToRender(10);
        const filteredList = ListOfRestaurant.filter ((res)=>
            res?.info?.veg===true
        );
        buttonVegOnly ? setFilteredRestaurant(filteredList) : setFilteredRestaurant(ListOfRestaurant);
    }

    const handleNonVegOnlyBtn = () => {
        count=1;
        setCartsToRender(10);
        setButtonNonVegOnly(!buttonNonVegOnly);
        setButtonTopRated(true);
        setButtonVegOnly(true);

        if(buttonNonVegOnly===true)  NonVegOnly();

        const filteredList = ListOfRestaurant.filter ((res)=>
            res?.info?.veg!=true
        );

        buttonNonVegOnly ? setFilteredRestaurant(filteredList) : setFilteredRestaurant(ListOfRestaurant);
    }

    const handleLoadMore = () => {
        setCartsToRender(cartsToRender+5);
    }

    const ListOfRestaurant=useListOfRestaurant();
    const [filteredRestaurant,setFilteredRestaurant]=useState(null);
    const gridData=useGridData();
    const [rendered, setRendered]=useState(false);
    const [cartsToRender,setCartsToRender]=useState(15);


    const NonVegRestaurantCard = withNonVegLabel(RestaurantCard);

    
    
    useEffect(()=>{
        fetchData();
        setRendered(true);
    },[]);

    const fetchData = async () =>{

        const data = await fetch(
            "https://pastebin.com/raw/HRvwaTDm"
        );

        const json = await data.json();

        setFilteredRestaurant(json?.data?.success?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus();
    
    if(onlineStatus===false) return <Offline/>;


    return (ListOfRestaurant===null||filteredRestaurant===null||gridData===null)? (<ShimmerBody/>) : (


        <div className = "body">
            <div className="What's on your mind? font-bold pt-2 pb-1 ml-10 text-4xl">
                <h1>What's on your Mind?</h1>
            </div>
            <div className ="gridData grid grid-flow-col auto-cols-max gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar border-b-3 border-b-gray-200 mx-20 b-7 ">
                {
                    gridData.map((item)=>
                        <GridItems key = {item?.id} gridData={item}/>
                    )
                }

            </div>

            <div className="Top Restaurant Chains in Kanpur font-bold pb-3 ml-10 text-4xl pt-7 ">
                    <h1>Top Restaurant Chains in Kanpur</h1>
            </div>

            <div className="upperContainer flex mb-4 ml-10 pt-6 ">

                
                <div className="topRatedBtn-container transition transform hover:scale-95 duration-100 ">
                    {!buttonTopRated ? (<label className=" absolute rounded-full pt-[16px] pl-[10px] text-lg">X</label>):""}
                    <button className={`topRated-btn w-60 h-15 hover:cursor-pointer border-[1px] border-gray-400 rounded-3xl
                    ${buttonTopRated ? "bg-gray-50" : "  opacity-60 bg-gray-200"}`}
                    onClick={handleTopRatedBtn}

                    >
                    Top Rated Restaurant
                    </button>
                </div>

                <div className="vegOnlyBtn-container transition transform hover:scale-95 duration-100 ml-7 ">
                    {!buttonVegOnly ? (<label className=" absolute rounded-full pt-[16px] pl-[20px] text-lg">X</label>):""}
                    <button className={`topRated-btn w-50 h-15 hover:cursor-pointer border-[1px] border-gray-400 rounded-3xl
                    ${buttonVegOnly ? "bg-gray-50" : " bg-green-500 opacity-70"}`}
                    onClick={handleVegOnlyBtn}

                    >
                    Veg Only
                    </button>
                </div>

                <div className="vegOnlyBtn-container transition transform hover:scale-95 duration-100 ml-7 ">
                    {!buttonNonVegOnly ? (<label className=" absolute rounded-full pt-[16px] pl-[20px] text-lg">X</label>):""}
                    <button className={`topRated-btn w-50 h-15 hover:cursor-pointer border-[1px] border-gray-400 rounded-3xl
                    ${buttonNonVegOnly ? "bg-gray-50" : " bg-red-600 opacity-70 "}`}
                    onClick={handleNonVegOnlyBtn}

                    >
                    Non-Veg Only
                    </button>
                </div>
                
                
            
            </div>

            <div className="restaurant-container flex flex-wrap items-center  pt-3 justify-center mx-auto">
                {
                    count<=cartsToRender && filteredRestaurant.map((restaurant)=>{
                    
                        if(count>cartsToRender) return null;
                        count++;
                        
                        return (
                        <Link to={"restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                            {   
                                
                                restaurant.info.veg ? <RestaurantCard resData={restaurant}/> : <NonVegRestaurantCard resData={restaurant}/>
                            }
                        </Link> 
                        )
                    
                    })
                }

            </div>
            {
                count<=filteredRestaurant.length &&  (
                    <div className="loadMoreBtn mt-15 mb-10">
                        <button className="loadmoreBtn items-center justify-center text-xl flex font-bold border-orange-200 border-3 w-50 text-center  rounded-sm p-3 mx-auto mt-10 transform hover:scale-110 transition duration-150 hover:cursor-pointer shadow-xl "
                        onClick={handleLoadMore}>
                            Load More
                        </button>
                    </div>
                )
            }
            
            <br></br>
            {
                rendered && <Footer/>
            }
        </div>

    );
};

export default Body;