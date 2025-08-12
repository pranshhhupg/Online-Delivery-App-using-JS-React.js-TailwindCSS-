import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        areaName
    } = resData?.info;

    const{deliveryTime}=resData?.info?.sla;

    return (
        <div className = "restaurant-Card m-2 px-4 pt-4 w-70 h-110  transform hover:scale-92 transition duration-300">
            <div className="items-center rounded-xl pt-3 pl-[15px] pb-3 bg-gray-100 ">
                <img className="w-55 items-center rounded-lg res-logo " alt="This is a restaurant image...." 
                src={CDN_URL + cloudinaryImageId}
                />
        
                <h3 className="pt-3 name text-2xl font-bold pl-1">{name}</h3>
            </div>
            

            <div className="DT+Rating flex flex-wrap pl-4 pt-2 font-semibold">
                <h4> ★ {avgRating} • </h4>
                <h4 className="px-1"> {deliveryTime} minutes</h4>
            </div>

            <h4 className="text-sm opacity-70 pl-3 truncate w-64" >{cuisines.join(", ")}</h4>
            <h4 className=" pl-3 font-semibold ">{areaName}, Kanpur</h4>
            
        </div>
    );
};

export const withNonVegLabel = (RestaurantCard) => {
    return (props)=> {
        return(
            <div className="transform hover:scale-98 transition duration-300">
                <label className="absolute m-2 p-2 bg-red-700 text-white rounded-lg font-bold">Non-Veg</label>
                <RestaurantCard {...props}/>
            </div>
            
        );
    };
};

export default RestaurantCard;