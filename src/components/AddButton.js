import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AddButton = ({data}) => {

    const itemData=useSelector((store)=>store?.cart?.items);
    const particularData = itemData.find((item)=>item?.card?.info?.id===data?.card?.info?.id);
    let quantity=0;
    if(particularData) {
        quantity=particularData.quantity;
    }

    const notifyAdd = () =>toast.success("Item Added in the Cart!",{
        position:"bottom-center",
        autoClose:1500
    });

    const notifyAddThatItem = () =>toast.error("Please add that Item to your Cart First!",{
        position:"bottom-center",
        autoClose:1500
    });

    const notifyRemove = () =>toast.success("Item Removed from the Cart!",{
        position:"bottom-center",
        autoClose:1500
    });

    const addItemsToYourCart = () => toast.error("Please add Items to your Cart",{
        position : "bottom-center",
        autoClose : 1500
    });

    const dispatch=useDispatch();   

    const handleAddBtn = () =>{
        dispatch(addToCart(data));
        notifyAdd();
    }

    const handleRemoveBtn = () => {

        const itemExists = itemData.find((item)=>item.card.info.id===data.card.info.id);

        if(!itemExists){
            notifyAddThatItem();
        }

        else if (itemExists.length!=0) {
            dispatch(decreaseQuantity(data));
            notifyRemove();
        }
            
    }

    return (
        <div className="addBtn-container bg-orange-400 font-bold text-black w-28 h-10 flex rounded-lg mt-2 py-[1px] shadow-lg items-center justify-center">
            <div className="removeItemsBtn  w-3/12 transform hover:scale-130 transition duration-300">
                <button className=" w-full h-full hover:cursor-pointer"
                onClick={handleRemoveBtn}
                >
                    −
                </button>

    
            </div>
                
            <div className="AddtoCartHeading w-6/12 flex items-center justify-center text-center p-2 border-x-2 border-black">
                <h1>
                {
                    quantity ? "x "+quantity : "Add"
                }              
                </h1>
            </div>
                
            <div className="AddItemsBtn w-3/12 transform hover:scale-130 transition duration-300">
                <button className=" w-full h-full hover:cursor-pointer"
                onClick={handleAddBtn}
                >
                    +
                </button>
                
                
            </div>
                
        </div>
    )
}

export default AddButton;