import SummaryAndBill from "./SummaryAndBill";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateAddress1,updateAddress2,updateBillAmount,updateFirstName,updateEmail,updateLandmark,updateLastName,updatePhone } from "../utils/orderDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {

    const getName = useSelector((store)=>store?.user?.userName);
    const getEmail = useSelector((store)=>store?.user?.userEmail);
 
    const handleError = () => toast.error ("Please fill the Details first!",{
        position:"top-right",
        autoClose:1500
    });
    const orderPlaced = () => toast.success ("Order Placed!",{
        position:"top-right",
        autoClose:1500
    });

    const handleOrderPlaceInActiveBtn =() => {
        handleError();
    }

    const dispatch=useDispatch();

    const [firstName,setFirstName]=useState(getName);
    const [lastName,setLastName]=useState("");
    const [address1,setAddress1]=useState("");
    const [address2,setAddress2]=useState("");
    const [landmark,setLandmark]=useState("");
    const [email,setEmail]=useState(getEmail);
    const [phone,setPhone]=useState("");
    const billAmount=useSelector((store)=>store?.cart?.totalAmount);

    const handleOrderPlacedBtn = () => {
    
        dispatch(updateFirstName(firstName));
        dispatch(updateLastName(lastName));
        dispatch(updateAddress1(address1));
        dispatch(updateAddress2(address2));
        dispatch(updateLandmark(landmark));
        dispatch(updateEmail(email));
        dispatch(updatePhone(phone));
        dispatch(updateBillAmount(billAmount));
        orderPlaced();
    }


    return (
        <div className="container justify-center mx-auto">
        <div className="checkout-container flex ">
            <div className="fill details w-7/12 ml-40 bg-orange-200 rounded-lg mt-7 shadow-md mb-10 pb-10 ">
                <div>
                    <div className="heading text-4xl flex text-center font-bold  pb-4">
                        <h1 className="mx-auto mt-5">Checkout</h1>
                    </div>
                    <div className="pftd">
                        <h1 className="text-2xl ml-10 font-bold pt-2">Please Fill These Details...</h1>
                    </div>
                    <div className="Fill details">
                        <div className="First+LastName flex mx-10 mt-5">
                            <div className="firstName mr-10 bg-orange-300 p-4 w-80 rounded-lg">
                                <h1 className="text-xl font-bold mb-2">
                                    First Name
                                </h1>
                                <textarea className="firstName  pt-3 resize-none  rounded-lg w-full h-12 pl-2 shadow-md text-lg bg-gray-100"
                                onChange={(e)=>setFirstName(e.target.value)} value={firstName}
                                type="text" placeholder="Enter First Name....">
                                </textarea>
                            </div>
                            <div className="lastName bg-orange-300 p-4 w-80 rounded-lg">
                                <h1 className="text-xl font-bold mb-2">
                                    Last Name
                                </h1>
                                <textarea className="lastName pt-3  resize-none rounded-lg w-full h-12 pl-2 shadow-md text-lg bg-gray-100"
                                onChange={(e)=>setLastName(e.target.value)} type="text"
                                placeholder="Enter Last Name...">
                                </textarea>
                            </div>
                            
                        </div>
                        <div className="address mx-10 mt-5 bg-orange-300 w-170 p-4 rounded-lg mr-20">
                            <h1 className="text-xl font-bold mb-2">Address</h1>
                            <textarea className="Address rounded-lg w-full resize-none h-12 pt-3 pl-2 cross-  overflow-y-hidden text-lg shadow-md bg-gray-100"
                            onChange={(e)=>setAddress1(e.target.value)} type="text"
                            placeholder="House No/Flat/Floor/Building">
                            </textarea>


                            <textarea className="Address rounded-lg w-full resize-none h-12 pt-3 pl-2 cross-  overflow-y-hidden text-lg shadow-md bg-gray-100"
                            onChange={(e)=>setAddress2(e.target.value)} type="text"
                            placeholder="Locality,Area,Street,Sector">
                            </textarea>

                            <textarea className="Address rounded-lg w-full resize-none h-12 pt-3 pl-2 cross-  overflow-y-hidden text-lg shadow-md bg-gray-100"
                            onChange={(e)=>setLandmark(e.target.value)} type="text"
                            placeholder="Nearby Landmark (road,school,hospital etc)">
                            </textarea>

                        </div>
                        <div className="email+mobno flex mx-10 mt-5 ">
                            <div className="email mr-10 bg-orange-300 w-80 p-4 rounded-lg">
                                <h1 className="text-xl font-bold mb-2">Email</h1>
                                <textarea className="email text-lg rounded-lg resize-none overflow-y-hidden w-full h-12 pl-2 pt-3  shadow-md bg-gray-100"
                                onChange={(e)=>setEmail(e.target.value)} type="text" value={email}
                                placeholder="Enter your email...">
                                </textarea>
                            </div>
                            <div className="mobNo bg-orange-300 p-4 w-80 rounded-lg">
                                <h1 className="text-xl font-bold mb-2">Phone</h1>
                                <textarea className="phone resize-none pt-3 rounded-lg w-full h-12 pl-2  text-lg shadow-md bg-gray-100"
                                onChange={(e)=>setPhone(e.target.value)} type="text"
                                placeholder="Enter your Phone Number...">
                                </textarea>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>

                
                
            </div>
            <div className="summaryAndBill w-6/12">
                <SummaryAndBill/>
            </div>

    
        </div>

        {
            firstName.length == 0 || address1.length==0  || address2.length==0 || phone.length<10  ? (
                <div className="PlaceOrderBtn flex items-center justify-center mx-auto">
                    <button className="PlaceorderBtn bg-orange-400 opacity-60 w-200 h-17 mx-auto mb-15 text-4xl rounded-3xl font-bolhandd hover:cursor-pointer shadow-xl font-bold"
                    onClick={handleOrderPlaceInActiveBtn}>
                        Place Order
                    </button>

                </div>
            ) : (
                <div className="PlaceOrderBtn flex  items-center justify-center mx-auto">
                <Link to="/orderplaced">
                    <button className="PlaceorderBtn bg-orange-400 w-200 h-17 mx-auto mb-15 text-4xl rounded-3xl font-bolhandd hover:cursor-pointer tansform hover:scale-110 transition duration-150 shadow-xl font-bold"
                    onClick={handleOrderPlacedBtn}>
                        Place Order
                    </button>
                </Link>
        
        </div>
            )
        }
        
        </div>
    )
};

export default Checkout;