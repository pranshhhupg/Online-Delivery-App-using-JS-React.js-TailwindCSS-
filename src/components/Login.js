import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { updateName,updateEmail,updatePass } from "../utils/userInfoSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const dispatch = useDispatch();

    const welcomeUser = () => toast.success("Welcome, " + name, {
        position : "top-right",
        autoClose:1500
    })

    const handleSignUpBtn = () =>{
        dispatch(updateName(name));
        dispatch(updateEmail(id));
        dispatch(updatePass(pass));
        welcomeUser();
    }

    const userName=useSelector((store)=>store?.user?.userName);
    const userId=useSelector((store)=>store?.user?.userEmail);
    const userPass=useSelector((store)=>store?.user?.userPass);

    const [name,setName]=useState(userName);    
    const [id,setId]=useState(userId);    
    const [pass,setPass]=useState(userPass);  
    
    


    return (
        <div className="Login-container flex w-7/12 items-center mx-auto mt-4 mb-20 bg-orange-200 rounded-2xl  shadow-xl">
            <div className="img w-6/12 items-center px-5 mb-16 ">
                <img src={LOGO_URL} className=" w-70 ml-7"/>
                <div className="texts bg-[#FCE6D0] p-4 rounded-2xl pt-6 mt-[-50px]">
                <h1 className="text-3xl font-bold flex text-center ">Welcome to Foodingo!</h1>
                <h1 className="text-lg flex text-center mb-5 ml-5 m">Your All Food Needs in One Place!</h1>
                </div>
                
            </div>
            <div className="login-info w-7/12 pl-20  rounded-r-2xl bg-orange-300 shadow-2xl">
                <h1 className="my-5 text-4xl font-bold  pt-6 mr-24 text-center ">Sign Up</h1>
                <div className="credentials bg-[#FCE6D0] p-4 mr-20 w-80 mt-10 rounded-2xl">
                    <div className="name  mb-6 ">
                        <h1 className="font-bold text-xl">Name</h1>
                        <input placeholder="Enter your name" className=" bg-white w-full h-12 rounded-xl pl-2 "
                        type="text"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}>
                        </input>
                    </div>
                    <div className="userId mb-6  ">
                        <h1 className="font-bold text-xl">Email</h1>
                        <input placeholder="Enter your email" className= "bg-white w-full h-12 rounded-xl pl-2"
                        type="email"
                        value={id}
                        onChange={(e)=>{
                            setId(e.target.value);
                        }}></input>
                    </div>
                    <div className="pass ">
                        <h1 className="font-bold text-xl">Password</h1>
                        <input placeholder="Enter your password" className=" bg-white w-full h-12 rounded-xl pl-2"
                        type="password"
                        value={pass}
                        onChange={(e)=>{
                            setPass(e.target.value);
                        }}></input>
                    </div>
                </div>
                
                {
                    name.length==0 || id.length==0 || pass.length<2 ? (
                        <button  className="text-xl font-bold p-2 w-80 h-15 mb-10 text-white rounded-2xl bg-black opacity-50 mt-10 hover:cursor-pointer ">
                        Sign Up
                        </button>
                    ) : (
                        <Link to="/">
                            <button onClick={handleSignUpBtn} className="text-xl font-bold p-2 w-80 h-15 mb-10 rounded-2xl text-white bg-black mt-10 hover:cursor-pointer transform hover:scale-110 duration-150">
                            Sign Up
                            </button>
                        </Link>
                        
                    )
                }
                
        
                
            </div>
        </div>
    )
};

export default Login;