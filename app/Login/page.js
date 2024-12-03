"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import { useLoading } from "../Contexts/loading";
import Header1 from '../Components/Header1';

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      }
      const { startLoading, stopLoading } = useLoading();
      const handleFetch = async () => {
        startLoading();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        stopLoading();
      };
  return (
   <div>
     <Header1 />
     <div className="h-screen text-black bg-white pt-[70px] xs:pt-[100px]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-[456px] h-[370px] xs:h-[394px] border border[#B9BEC7] rounded-[12px] m-auto p-[30px]" >
            <h2 className="text-[#121930] text-[18px] text-rethink text-center xs:text-[26px] ">Log In</h2>
            <p className="text-rethink text-[9px] text-center xs:text-[14px]">Your practice journey continues here</p>
        <div>
          <label htmlFor="email" className=" text-[9px] xs:text-[13px] text-[#10172C] text-inter">EMAIL ADDRESS</label><br/>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="border border black rounded-[6px] text-[10px] xs:text-[13px] w-[200px] xs:w-full h-[30px] sm:h-[40px] px-[10px]"
            placeholder="Enter Email" 
          />
          {errors.email && <p className="text-red-500 text-[8px]">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className=" text-[9px] xs:text-[13px] text-[#10172C] text-inter">PASSWORD</label><br/>
          <input
          type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="border border black rounded-[6px] text-[10px] xs:text-[13px] w-[200px] xs:w-full h-[30px] sm:h-[40px] px-[10px]"
            placeholder="Enter Password" 
          />
          {errors.password && <p className="text-red-500 text-[8px]">{errors.password.message}</p>}
        </div>
        <p className="text-[#0059DE] text-[10px] w-full xs:text-[13px] text-end">Forgot password?</p>
        <button type="submit" className="bg-[#0059DE] w-[200px] xs:w-full h-[35px] sm:h-[45px] rounded-[8px] mt-[25px] text-white">Sign In
        </button>
        <div className="text-center"><p className="text-[11px] mt-[20px]">Are you new here? <Link href="/Signup" onClick={handleFetch}> <span className="text-[#0059DE]">Create Account</span> </Link></p></div>
      </form>
    </div>
   </div>
  )
}


