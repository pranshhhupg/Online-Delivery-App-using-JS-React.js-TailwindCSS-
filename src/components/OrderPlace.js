import { useEffect, useState } from "react";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import OrderPlaceItems from "./OrderPlaceItems";
import { TICK_IMG } from "../utils/constants";


const OrderPlace = () => {

    const dispatch = useDispatch();
    let count=0;

    const {
        firstName,
        lastName,
        address1,
        address2,
        landmark,
        email,
        phone,
        billAmount,
        copyItem
    } = useSelector((store) => store?.orderDetails || {});

    const totalBill = billAmount + ((billAmount*18)/100) + 30;

    useEffect(() => {
      dispatch(clearCart());
    }, [dispatch]); 

    return (
        <div className="container rounded-2xl items-center justify-center w-200 mx-auto pb-3 mb-10 shadow-lg">
            <div className="orderplaced-container p-2 rounded-t-2xl bg-orange-300 flex mt-7">
                <div className="img w-3/12">
                <img src={TICK_IMG}
                className="w-50 m-5"/>

                </div>
                <div className="text w-9/12 text-center my-auto mr-7 ">
                    <h1 className="text-5xl font-bold">Your Order is Placed!</h1>
                    <h1 className="text-lg mt-2">Keep in touch with us while we Prepare your Order!</h1>
                </div>
            
            </div>

            <div className="order-details bg-gray-100 m-4 mx-7 p-4 rounded-2xl mt-[-45px] shadow-md">
                <div className="heading">
                    <h1 className="font-bold text-3xl mb-3">Delivering to</h1>
                </div>
                <div className="person-details mt-1 ml-4 ">
                    <h1 className="text-xl font-bold">{firstName ? firstName : ""} {lastName ? lastName : ""}</h1>
                    <h1 className="text-xl"> {address1 ? address1 : ""}</h1>
                    <h1 className="text-xl">{address2 ? address2 : ""}</h1>
                    <h1 className="text-xl">{landmark? landmark : ""}</h1>
                    <div className="email+phone flex text-xl">
                        <h1>{email? email + (" •"): ""}</h1>
                        <h1 className="ml-1">{phone?  phone : ""}</h1> 
                    </div>
                </div>

                <div className="mr-10 mt-5">
                    <h1 className="mx-1 font-bold mt-4 text-3xl">Items included</h1>
                    <div className="items mt-2 mb-5 mx-10">
                        {
                            copyItem.map((item)=>
                                <OrderPlaceItems key={count++} menuDataItems={item}/>
                            )
                        }
                    </div>
                    
                </div>
                <div className="container flex">
                    <div className="img w-10 mr-4 mt-4 ml-1">
                        <img src="https://i.postimg.cc/bwJrBhwk/77-VFRH-white-wallet-photos.png"/>
                    </div>
                    <div className="please pay pb-3">
                        <h1 className="font-bold text-2xl mt-5">Please pay ₹{billAmount ? totalBill.toFixed(2) : ""} when delivered! </h1>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
};

export default OrderPlace;