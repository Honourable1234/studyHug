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
      <div className="flex items-center">
         <Link href="/">
             <button className="flex justify-center items-center gap-[3px] text-[#FF0096] border border-[#FF0096] rounded-[8px] w-[81px] h-[36px] text-[14px]" onClick={handleClick}>
              Help <Image src="/images/Question.svg" alt="Study Hug Logo" width={20} height={20}  className="w-[20px] mt-[2px] "/></button>
         </Link>
      </div>
       </nav>
    </div>
  )
}

