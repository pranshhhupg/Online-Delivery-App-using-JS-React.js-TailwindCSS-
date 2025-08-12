import { ITEMS_IMG_API } from "../utils/constants";

const OrderPlaceItems = ({menuDataItems}) => {

    const {name,imageId}=menuDataItems?.card?.info;
    const quantity=menuDataItems.quantity;

    return (
        <div className="container flex mx-5 border-b-3  border-black p-2 pl-4 ">
            <div className="img ">
                <img className="rounded-md w-30"src={ITEMS_IMG_API+imageId}/>
            </div>
            <div className="text w-4/6 text-lg text-center my-auto mx-auto font-bold p-4">
                {name} (x{quantity})
            </div>  
        </div>
    )
}

export default OrderPlaceItems;