"use client";
import React, { useEffect, useState } from 'react';
import OtpInput from './../Components/OtpInput'
import Link from 'next/link'
import { useLoading } from "../Contexts/loading";
import axios from 'axios';
import { useRouter } from "next/navigation";
import Header1 from '../Components/Header1';

export default function VerifyPage() {
    const [otp, setOtp] = useState('');
    const router = useRouter();
    const handleOtpChange = (otp) => {
        setOtp(otp);
    };
    const { startLoading, stopLoading, user } = useLoading();
    const data = {
      email: user.email,
      verificationToken: otp
    }
    const verifyEndpoint = process.env.NEXT_PUBLIC_API_END_POINT_VERIFY
    const handleClick = async () => {
        startLoading();
        try {
          const response = await axios.post(verifyEndpoint, data)
          console.log(response)
          if (response.data.message == "Email verified successfully" && response.data.status == "success") {
            router.push("/WellDone")
          }
          
        } catch (error) {
          console.log(error.message);
          
        }

        stopLoading();
      };
        useEffect(()=>{
        console.log(user);
      
       },[user])
  return (
    <div>
      <Header1 />
      <div className="h-screen text-black bg-white pt-[30px] sm:pt-[70px] xs:pt-[100px]">
       <div className="border border-[#B9BEC7] w-[250px] sm:w-[456px] text-rethink h-[300px] sm:h-[412px] m-auto text-center py-[32px] px-[28px] rounded-[12px]">
        <h2 className="text-[18px] sm:text-[28px]">Enter the Code</h2>
        <p className="text-[10px] sm:text-[16px]">Enter the One-Time Password (OTP) sent to {user.email} </p>
        <OtpInput numInputs={4} onChange={handleOtpChange}/>
        <button onClick={handleClick} className="bg-[#0059DE] w-[200px] xs:w-full h-[35px] sm:h-[45px] rounded-[8px] mt-[35px] text-white ">Verify OTP</button>
        <p className="mt-[35px] text-[10px] sm:text-[16px]">Didn’t receive the OTP? <Link href="" onClick={handleClick}><span className="text-[#0059DE]">Click to Resend</span></Link></p>
       </div>
      </div>
    </div>
  )
}


