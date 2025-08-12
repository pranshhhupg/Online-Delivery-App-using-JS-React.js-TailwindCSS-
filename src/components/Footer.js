const Footer = () => {
    return (
        <div className="footer-container bg-orange-300 flex py-10 ">
            <div className="logo w-3/12 ml-15 ">
                <img src="https://i.postimg.cc/76R4Bk4Z/istockphoto-1435983029-612x612-removebg-preview.png"
                className="w-50 rounded-lg"/>
                <h1 className="text-3xl font-bold ml-10">Foodingo</h1>
                <h1 className="text-lg opacity-55 ml-10">© All rights are not Reserved</h1>
            </div>
            <div className="about us mx-10">
                <h1 className="text-2xl font-bold ">About Foodingo</h1>
                <h1 className="text-lg opacity-50 mt-2">Who we are?</h1>
                <h1 className="text-lg opacity-50">Blogs</h1>
                <h1 className="text-lg opacity-50">Work with Us</h1>
                <h1 className="text-lg opacity-50">Contact Us</h1>
            </div>
            <div className="Legal mx-10">
                <h1 className="text-2xl font-bold">Legal</h1>
                <h1 className="text-lg opacity-50 mt-2">Terms and Condition</h1>
                <h1 className="text-lg opacity-50">Cookie Policy</h1>
                <h1 className="text-lg opacity-50">Privacy Policy</h1>
            </div>
            <div className="available in mx-10">
                <h1 className="text-2xl font-bold ">Available in </h1>
                <h1 className="text-lg opacity-50 mt-2">Mumbai</h1>
                <h1 className="text-lg opacity-50">Chennai</h1>
                <h1 className="text-lg opacity-50">Bangalore</h1>
                <h1 className="text-lg opacity-50">Delhi</h1>
                <h1 className="text-lg opacity-50">Gurgaon</h1>
                <h1 className="text-lg opacity-50">Hyderabad</h1>
                <h1 className="text-lg opacity-50">Pune</h1>
                <h1 className="text-lg opacity-50">and 650+ cities</h1>
                <h1 className="text-lg opacity-50">Just Kidding</h1>
            </div>
            <div className="For-restaurants mx-10">
                <h1 className="text-2xl font-bold ">For Restaurants</h1>
                <h1 className="text-lg opacity-50 mt-2">Partner with Us</h1>
                <h1 className="text-lg opacity-50">Apps For You</h1>
            </div>
        </div>
    )
};

export default Footer;