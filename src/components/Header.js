import { useState,useEffect} from "react";
import { ShimmerHead } from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CART_IMG, LOGO_URL, SEARCH_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";

const Header = () => {

    const {resId}=useParams();

    //For Shimmer UI
    const [ListOfRestaurant,setListOfRestaurant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data=await fetch("https://pastebin.com/raw/7hv190XZ");
        const json = await data.json();

        setListOfRestaurant(json);
    }

    const cartData = useSelector((store)=>store.cart.totalQuantity);
    const userName=useSelector((store)=>store.user.userName);

    return ListOfRestaurant.length===0 ? <ShimmerHead/> : (
        <div className = "header-container flex justify-between w-full items-center px-4 bg-orange-300 shadow-lg h-25">

            <div className="logo-conatiner w-40 transform hover:scale-95 transition duration-150">
                <Link to="/">
                    <img src = {LOGO_URL} alt="logo"/>
                </Link>
                
            </div>

            <div className="Nav-Items">
                <ul className="onlineStatus flex text-xl"> 
    
                    <li className="text-xl home p-4 transform hover:scale-95 transition duration-150">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-xl about p-4 flex transform hover:scale-95 transition duration-150">
                        <Link to="/search">
                        <img src={SEARCH_IMG} 
                        className="w-7 mr-2 hover:cursor-pointer"/>
                        </Link>
                        <Link to="/search">Search</Link> 
                    </li>
                    <li className="text-xl Contact p-4 transform hover:scale-95 transition duration-150">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" text-xl cart flex p-4 transform hover:scale-95 transition duration-150 ">
                    {
                        cartData === 0 ? (
                            <>
                            <Link to="/cart">
                                <img src={CART_IMG} className="w-7 mr-2" /> 
                            </Link>
                            <Link to="/cart">
                                <h1 className="font-bold rounded-full bg-orange-400 w-6 text-black text-center ">{cartData}</h1>
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link to={"/restaurant/"+resId+"/cart"}>
                                <img src={CART_IMG} className="w-7 mr-2" /> 
                            </Link>
                            <Link to={"/restaurant/"+resId+"/cart"}>
                                <h1 className="font-bold rounded-full bg-orange-400 w-6 text-black text-center  ">{cartData}</h1>
                            </Link>
                            </>
                        )
                    }

                        
                    </li>

                    
                    <Link to="/login">
                        <button className="text-xl login transform hover:scale-95 transition duration-150 hover:cursor-pointer p-4"
                        >
                        {
                            userName === "" ? "Sign Up" : <h1 className="font-bold">Welcome, {userName}</h1>
                        }
                        </button>
                    </Link>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;