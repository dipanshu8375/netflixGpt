import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [inSignIn, setIsSignIn] = useState(true);
    function toggleSignIn(){
        console.log(inSignIn);
        setIsSignIn(!inSignIn);
    }
  return (
    <div>
        <Header/>
        <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        </div>
        <div className="absolute bottom-[30%] left-[33%] bg-black h-[52%] w-[30%] rounded-lg bg-opacity-80">
        <h1 className='text-white absolute top-[6%] left-[15%] font-bold text-3xl mb-2'>{inSignIn ? "Sign In" : "Sign Up"}</h1>
        <form action="" className='flex flex-col justify-center w-[80%] items-center pt-[50px] pr-[36px] pb-[20px] pl-[20px] mt-5 ml-[10%] text-white'>
             {!inSignIn && (
                <input type="text" placeholder='Full Name' className='p-2 m-2 rounded w-[100%] mb-[15px] bg-gray-600'/>
             )} 
            <input type="text" placeholder='Email' className='p-2 m-2 rounded w-[100%] mb-[15px] bg-gray-600'/>
            <input type="text" placeholder='Password' className='p-2 m-2 rounded w-[100%] mb-[30px] bg-gray-600'/>
            <button className='p-2 m-2 bg-red-700 text-white rounded w-[100%] text-xl font-bold'>{inSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='mt-2'>{inSignIn ? "New to Netflix?" : "Already Registered ?"} <span onClick={toggleSignIn} className='cursor-pointer'>{inSignIn ? "Sign Up now." : "Sign In now."}</span> </p>
        </form>
        </div>
    </div>
    
  )
}
export default Login;
