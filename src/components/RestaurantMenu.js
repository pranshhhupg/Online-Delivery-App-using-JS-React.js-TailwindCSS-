import { ShimmerBody } from "./ShimmerUi";
import DisplayMenuItems from "./DisplayMenuItems";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import useRestaurantMenuDetails from "../utils/useRestaurantMenuDetails";
import { useEffect, useState } from "react";
import useCouponData from "../utils/useCouponData";
import Coupon from "./Coupon";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ShimmerMenu from "./ShimmerMenu";


const RestaurantMenu = () => {
    const {resId}=useParams(); 

    const menuList=useRestaurantMenuData(resId);
    const couponData =useCouponData(resId);
    const resInfo=useRestaurantMenuDetails(resId);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(clearCart());
    },[])

    let count=0;

    const [displayIndex, setDisplayIndex]=useState();

    return (menuList===null || resInfo===null || couponData===null) ? (<ShimmerMenu/>) : (
        <div className="Restaurant-container">
            <div className="resMenuHeader w-150 h-100 flex mb-10 justify-between bg-gray-100 mx-117 rounded-xl  my-auto">
                <img src={CDN_URL+resInfo.cloudinaryImageId} alt="restaurant"
                className="w-full h-full object-cover rounded-xl"/>
                <div className="absolute ResDetails h-100 ml-80 w-70 rounded-lg bg-black opacity-80 px-6 justify-center items-center py-10 ">
                    <div className="resName text-white text-4xl mt-8 font-bold line-clamp-3">{resInfo?.name}</div>
                    <div className="Rating text-white my-2 text-md">  {resInfo?.avgRating ? "★" + resInfo?.avgRating : ""} {resInfo?.totalRatingsString ? "(" + resInfo?.totalRatingsString + ")" : ""} </div>

                    <div className="cuisine flex flex-wrap">
                        {resInfo?.cuisines.map((res) => (
                        <div key={res} className="bg-amber-900 opacity-100 text-white px-2 py-1 m-1 rounded-lg">
                        {res}
                        </div>
                    ))}
                    </div>


                    <div className="costfortwo+DeliveryTime flex text-white my-1">
                    <h2>₹{resInfo?.costForTwo/100} for Two • </h2>
                    <h2 className="pl-1"> { resInfo?.sla?.deliveryTime} mins</h2>
                    </div>

                    <div className="OrderNow bg-amber-600 text-white font-bold w-28 h-10 rounded-lg my-2">
                        <h1 className="items-center justify-center text-center text-lg pt-1">Order Now</h1>
                    </div>
                </div>

            </div>

            <div className="CouponAndOffers border-t-3 border-gray-300 mx-90 mb-5 border-b-3">
                <div className="couponHeader  pt-5 ml-3 mb-2">
                    <h1 className="text-3xl font-bold">Best Deals For You!</h1>
                </div>
                <div className="coupons flex mb-5 ">
                    {
                        couponData.map((coupons)=>
                            <Coupon key={count++} couponData={coupons}/>
                        )
                    }
                </div>
                
            </div>

            <div className="Menu-heading items-center justify-center mx-auto text-center mb-7">
                    <h1 className="font-bold text-4xl">Menu</h1>
            </div>

            <div className="restaurant-menu">
                {
                    menuList.map((menuItems,index)=>(
                        <DisplayMenuItems key={menuItems.card.card.title} menuData={menuItems}
                        displayList = {index===displayIndex ? true:false}
                        setDisplayIndex = {()=> setDisplayIndex(index)}
                        resetDisplayIndex = {()=>setDisplayIndex(null)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;