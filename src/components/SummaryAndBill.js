import { useSelector } from "react-redux";

const SummaryAndBill= () => {
    const cartData = useSelector((store)=> store?.cart?.items);
    const totalQuantity = useSelector((store)=>store?.cart?.totalQuantity);
    const totalAmount = useSelector((store)=>store?.cart?.totalAmount);
    const billTotal=totalAmount+((totalAmount*18)/100)+30;

    return (
        <div className="SummaryAndBill">
            <div className="summary-container m-10 bg-gray-200 rounded-lg w-100 pb-5 shadow-xl">
                <div className="summary-heading mb-5 border-b-3 pb-3 border-gray-300 py-2">
                    <h1 className="text-3xl font-bold pl-4 pt-2">Summary</h1>
                </div>

                <div className="summary-details">
                    <div className="NoOfItems">
                        <div className="text-lg mb-2 pl-4 flex items-center ">Total Dish : <h1 className="ml-1 font-bold">{cartData.length} Dishes</h1> </div>
                    </div>
                    <div className="total price">
                        <div className="text-lg mb-2 pl-4 flex">Total Price : <h1 className="ml-1 font-bold">₹{totalAmount}.00</h1></div>
                    </div>
                    <div className="totalQuantity">
                        <div className="text-lg pl-4 flex ">Total Quantity : <h1 className=" ml-1 font-bold">{totalQuantity}</h1></div>
                    </div>
                </div>
            </div>

            <div className="bill-container m-10 bg-gray-200 rounded-lg w-100 pb-5 shadow-xl">
                <div className="bill-heading text-3xl font-bold mb-5 border-b-3 pb-3 border-gray-300 py-5 pl-4">
                    Your Bill
                </div>
                <div className="bill-details">
                    <div className="Total Price text-lg mb-2 pl-4">
                        <div className="text-lg flex">Your Order Total : <h1  className="ml-1 font-bold">₹{totalAmount}.00</h1></div>
                    </div>
                    <div className="GST text-lg mb-2 pl-4">
                        <div className="text-lg flex">GST Charges(18%) : <h1 className="ml-1 font-bold">₹{(( totalAmount * 18) /100).toFixed(2)}</h1></div>
                    </div>
                    <div className="DeliveryCharges text-lg mb-2 pl-4">
                        <div className="text-lg flex">Delivery Charges : <h1 className="ml-1 font-bold">₹30.00</h1></div>
                    </div>
                    <div className="billAmount text-lg pl-4">
                        <div className="text-lg flex">Total : <h1 className="ml-1 font-bold">₹{billTotal.toFixed(2)}</h1></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default SummaryAndBill;