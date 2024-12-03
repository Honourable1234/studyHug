"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useLoading } from "../Contexts/loading";
import Header1 from '../Components/Header1';

export default function ForgotPage() {
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-[456px] h-[320px] xs:h-[344px] border border[#B9BEC7] rounded-[12px] m-auto p-[10px]" >
            <h2 className="text-[#121930] text-[18px] text-rethink text-center xs:text-[26px] ">Forgot Password</h2>
            <p className="text-rethink text-[9px] text-center xs:text-[14px] text-[#667185]">Enter the email address associated with your account and we will send you a link to reset your password.</p>
        <div className="mt-[30px]">
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
        <button type="submit" className="bg-[#0059DE] w-[200px] xs:w-full h-[35px] sm:h-[45px] rounded-[8px] mt-[25px] text-white">Verify OTP
        </button>
        <button className="text-[#667185] w-full m-auto h-[20px] mt-[30px] flex justify-center items-center gap-[4px]"><Image src="/images/PointerLeft.svg" alt="Pointer Icon" width={20} height={20}/>Back to login</button>
      </form>
    </div>
   </div>
  )
}



