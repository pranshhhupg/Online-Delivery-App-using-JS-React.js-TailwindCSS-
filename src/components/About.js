const About = () => {
    return (
        <div className = "About">
            <div className="p-4">
                
            </div>
            <div className="About-heading">
                <h1 className="text-4xl flex items-center justify-center  mx-auto font-bold mt-5">About</h1>
            </div>

            <div className ="About-subHeading bg-orange-200 mx-70 rounded-2xl px-10 py-8 mt-5 mb-10">
                <h1 className="text-3xl mt-3 mb-2 font-bold">About App</h1>
                <h3 className="text-xl flex  mx-auto mb-1 ">Online Food Delivery App
                Developed using React, Tailwind CSS, and JavaScript, this application offers a seamless and responsive user experience for browsing restaurants, viewing menus, and placing orders online.</h3>
                <h3 className="text-3xl  mx-auto mt-5 font-bold ">
                Key Features
                </h3>
                

                <h3 className="text-xl  mx-auto mt-2  ">
                Restaurant Listings: Displays a curated list of restaurants with relevant details like ratings, cuisine, and location.
                </h3>
                <h3 className="text-xl  mx-auto mt-1">
                Dynamic Menu Display: Fetches and renders restaurant menus dynamically from APIs.
                </h3>
                <h3 className="text-xl  mx-auto mt-1">
                Cart & Order Management: Add, update, or remove items from the cart with real-time bill calculation.
                </h3>
                <h3 className="text-xl  mx-auto mt-1">
                Redux State Management: Utilizes Redux for efficient state handling across components.
                </h3>
                <h3 className="text-xl  mx-auto mt-1">
                Responsive UI: Tailwind CSS ensures the interface is friendly and visually consistent
                </h3>
                <h3 className="text-xl  mx-auto mt-1">
                User-Friendly Checkout: Includes form fields for delivery address, contact details, and order summary.
                </h3>
                <h3 className="text-3xl  mx-auto mt-5 font-bold">About The Developer</h3>
                <h3 className="text-xl  mx-auto mt-2">This project is built by Pranshu Gupta, a student at Maharaja Agrasen Institute of Technology (MAIT), Delhi. It showcases strong skills in front-end development, state management, and UI/UX design, while demonstrating the ability to integrate APIs and build scalable, real-world applications.

                </h3>
                
            </div>
        
        </div>
    );
};

export default About;