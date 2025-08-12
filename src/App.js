import React, { Suspense,  lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { ShimmerBody } from "./components/ShimmerUi";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Checkout from "./components/Checkout";
import OrderPlace from "./components/OrderPlace";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestaurantMenu from "./components/RestaurantMenu";

const About= lazy(()=> import ("./components/About"));
const Search = lazy(()=> import ("./components/Search"));

const AppLayout = () => {
    return ( 
        <Provider store = {appStore}>
            <div className="AppLayout ">
                <Header/>
                <br></br>
                <Outlet/>
                <ToastContainer 
                toastStyle={{ backgroundColor: "#222", color: "white" }}
                progressStyle={{ background: "#8B0000" }}/>
            </div>
        </Provider>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<ShimmerBody/>}><About/></Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/search/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path : "/restaurant/:resId/cart",
                element : <Cart/>
            },
            {
                path : "/cart",
                element :<Cart/>
            },
            {
                path : "/search",
                element:<Suspense ><Search/></Suspense>
            },
            {
                path : "/restaurant/:resId/checkout",
                element : <Checkout/>
            },
            {
                path : "/orderplaced",
                element : <OrderPlace/>
            },
            {
                path:"/login",
                element : <Login/>
            }
        ],
        errorElement:<Error/>,
    },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);


