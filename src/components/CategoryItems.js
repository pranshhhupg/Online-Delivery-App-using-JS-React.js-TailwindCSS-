import { ITEMS_IMG_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import AddButton from "./AddButton";

const CategoryItems = ({menuDataItems,dataFromCart}) => {
    const {name,defaultPrice,description,imageId,price}=menuDataItems?.card?.info;
    const {rating, ratingCount} = menuDataItems?.card?.info?.ratings?.aggregatedRating;



    return (
        <div className="item-container flex justify-between pb-5 border-b-3 border-gray-200 bg-gray-50 p-4 ">
            <div className="details w-9/12 pt-2">
                <div className="itemName text-2xl mb-1 font-bold">
                    {name} {dataFromCart ? `(x${dataFromCart})` : ""}
                </div>
                <div className="rating mb-[1px]">
                {rating ? "★ " + rating : ""} {ratingCount ? "("+ratingCount+")" : ""}
                </div>
                <div className="description opacity-70 text-sm py-1 pb-2">
                    {description}
                </div>
                <div className="price font-bold text-xl">
                    ₹{price ? price/100 : defaultPrice/100}
                </div>
                <div className="Btn">
                    <AddButton
                    data = {menuDataItems}/>
                </div>
            </div>
            <div className="itemImg w-3/12 flex justify-center items-center pl-10">
            {imageId ? (
                <img
                className="rounded-lg w-40 h-auto"
                src={ITEMS_IMG_API + imageId}
                alt="item"
                />
                ) : (
                <div className=""></div>
                )
            }
                
            </div>
        </div>
    )
}

export default CategoryItems;