"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLoading } from "../Contexts/loading";

export default function Header() {
  const { startLoading, stopLoading } = useLoading();
  const handleClick = async () => {
    startLoading();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    stopLoading();
  };


  return (
    <div className="h-[88px] bg-[white] flex border border-[#D0D5DD] items-center">
       <nav className="flex justify-between w-[90%] m-auto">
       <Link href="/" onClick={handleClick}>
         <Image 
           src="/images/Logo1.svg"
           alt="Study Hug Logo"
           width={0}
           height={0} 
           className=" h-auto w-[50px] xs:w-[90px] lg:w-[120px] mt-[10px] "
      />
       </Link>
      <div className="w-[281px] h-[47px] bg-[#F7F9FC] rounded-[40px] hidden sm:flex text-black text-[16px] justify-between items-center px-[15px]">
        <Link href="/" onClick={handleClick}><button>Home</button></Link>
        <button>Features</button>
        <button className="flex">
          Help 
          <Image 
           src="/images/Question.svg"
           alt="Study Hug Logo"
           width={20}
           height={20} 
           className="w-[20px] mt-[2px] "
      />
        </button>
      </div>
      <div className="flex items-center">
         <Link href="/Login">
             <button className="hidden xs:block text-[#0066FF] w-[70px] h-[40px] text-[14px]" onClick={handleClick}>Login</button>
         </Link>
         <Link href="/Signup">
            <button className="bg-[#0066FF] w-[70px] xs:w-[117px] h-[25px] xs:h-[40px] rounded-[8px] text-[10px] xs:text-[14px]" onClick={handleClick}>Get started</button>
         </Link>
      </div>
       </nav>
    </div>
  )
}


