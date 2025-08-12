const Coupon = ({couponData}) => {

    const {header}=couponData?.info;

    return (
        <div className="coupon-container border-1 rounded-2xl p-3 m-3 w-50 border-gray-300 shadow-md items-center justify-center text-center bg-gray-50">
            <h1 className="font-bold">{header}</h1>
            {couponData?.info?.couponCode ? (<h1>{couponData?.info?.couponCode}</h1>) : "GRAB IT NOW"}
        </div>
    )
};

export default Coupon;