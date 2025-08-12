import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link, useParams } from "react-router-dom";
import SummaryAndBill from "./SummaryAndBill";
import { updateItems } from "../utils/orderDetailsSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";


const Cart = () => {
    const clearedCartToast = () =>toast.success("Cart Cleared!",{
        position : "top-right",
        autoClose:1500
    }
    );

    const addSomeItems = () =>toast.error("Please add some Items first!",{
        position : "top-right",
        autoClose:1500
    }
    );

    const handleCheckoutError = () =>{
        addSomeItems();
    }

    const dispatch = useDispatch();
    const cartData = useSelector((store)=> store?.cart?.items);
 
    const {resId}=useParams();
    
    const handleClearCart = () =>{
        if(cartData.length!=0){
            dispatch (clearCart());
            clearedCartToast();
        }else{
            addSomeItems();
        }
        
    }

    useEffect(()=>{
        dispatch(updateItems(cartData));
    },[dispatch])

    let count=1;

    return (
        <div className="cart-container flex justify-center mx-auto mb-10">
            <div className="cart-items-container mt-4 ml-5">
                <div className="cart-heading p-4 py-2 mb-4 flex justify-between w-12/12 mx-auto border-b-4  border-gray-200 pb-5">
                
                <h1 className="font-bold text-4xl pt-2 flex ">
                <img src="https://i.postimg.cc/fRwJx2NR/download-1.png"
                className="w-10 mr-3"/>
                Cart</h1>
                <button className="clearCartBtn font-bold bg-orange-400 text-black rounded-lg p-2 hover:cursor-pointer transform hover:scale-110 transition duration-300"
                onClick = {handleClearCart}>Clear Cart</button>
                </div>
                <div className="cart-items-container w-200 mx-auto rounded-lg bg-gray-100 pb-5 ">
                    <div className="cart-items w-190 mx-auto pt-5">
                    {    
                        cartData.length===0 ? ( <div className="text-lg items-center justify-center text-center p-20 m-auto">Cart is Empty! Please Add some items to your Cart.</div> ) : (
                        cartData.map((data) => (
                            <CategoryItems className="w-7/12" key={count++} menuDataItems={data}
                            dataFromCart = {data.quantity}/>
                        ))
                        )
                    }
                    </div>
                </div>
            </div> 

            <div className="summary+bill+continueBtn">
                <SummaryAndBill
                />
                {cartData.length > 0 ? (
                <div className="continueBtn m-10 flex items-center">
                    <Link to={"/restaurant/"+resId+"/checkout"}>
                    <button className="hover:cursor-pointer transform hover:scale-105 transition duration-200 text-2xl font-bold rounded-lg w-100 h-15 mx-auto bg-orange-400"
                    >
                        Continue To Checkout
                    </button>
                    </Link>
                </div>
                ) :
                (
                    <div className="continueBtn m-10 flex items-center">
                
                    <button className="hover:cursor-pointer text-2xl font-bold rounded-lg w-100 h-15 mx-auto bg-orange-400 opacity-50"
                    onClick={handleCheckoutError}
                    >
                        Continue To Checkout
                    </button>
                    
                    </div>
                )
                }
                
            </div>

            
        </div>
    )
};

export default Cart;