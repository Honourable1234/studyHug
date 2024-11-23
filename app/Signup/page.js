"use client";
import React from 'react'
import { useForm } from 'react-hook-form';

export default function SignupPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      }
  return (
    <div className="h-screen text-black bg-white pt-[70px] xs:pt-[100px]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-[456px] h-[500px] xs:h-[524px] border border[#B9BEC7] rounded-[12px] m-auto p-[30px]" >
            <h2 className="text-[#121930] text-[18px] text-rethink text-center xs:text-[26px] ">Sign Up</h2>
            <p className="text-rethink text-[9px] text-center xs:text-[14px]">Join thousands of students preparing smarter! Fill in the details below to create your account.</p>
        <div className="block sm:flex w-full justify-between mt-[20px]">
        <div>
          <label htmlFor="firstName" className=" text-[9px] xs:text-[13px] text-[#10172C] text-inter">FIRST NAME</label> <br/>
          <input
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
            className="border border black rounded-[6px] text-[10px] xs:text-[13px] w-[200px] xs:w-full sm:w-[190px] h-[30px] sm:h-[40px] px-[10px]"
            placeholder="Enter Name" 
          />
          {errors.firstName && <p className="text-red-500 text-[8px]">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className=" text-[9px] xs:text-[13px] text-[#10172C] text-inter">LAST NAME</label><br/>
          <input
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
            className="border border black rounded-[6px] text-[10px] xs:text-[13px] w-[200px] xs:w-full sm:w-[190px] h-[30px] sm:h-[40px] px-[10px]"
            placeholder="Enter Name" 
          />
          {errors.lastName && <p className="text-red-500 text-[8px]">{errors.lastName.message}</p>}
        </div>
        </div>
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
            id="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^.{8,}/,
                message: "Your password must be at least 8 characters",
              },
            })}
            className="border border black rounded-[6px] text-[10px] xs:text-[13px] w-[200px] xs:w-full h-[30px] sm:h-[40px] px-[10px]"
            placeholder="Enter Password" 
          />
          {errors.password && <p className="text-red-500 text-[8px]">{errors.password.message}</p>}
        </div>

        <button type="submit" className="bg-[#0059DE] w-[200px] xs:w-full h-[35px] sm:h-[45px] rounded-[8px] mt-[25px] text-white">Sign Up</button>
        <div className="text-center"><p className="text-[11px] mt-[20px]">Already have an account? <span className="text-[#0059DE]">Log in</span> </p></div>
      </form>
    </div>
  )
}

