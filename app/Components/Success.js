'use client'
import React from 'react'
import Image from 'next/image'
import Header1 from './Header1'
import Link from 'next/link'
import { useLoading } from "../Contexts/loading";

export default function Success({title, content, buttonText}) {
  const { startLoading, stopLoading } = useLoading();
  const handleClick = async () => {
    startLoading();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    stopLoading();
  };
  return (
    <div>
      <Header1 />
      <div className="h-screen bg-white pt-[100px] text-center">
       <div className="border border-[#B9BEC7] w-[256px] rs:w-[356px] sm:w-[456px] h-[219.29px] rs:h-[220px] sm:h-[419.29px] rounded-[12px] m-auto p-[20px]">
          <Image src="/images/Love.svg" 
          alt="Love Icon"
          width={0} height={0} 
          className=" h-[81.29px] sm:h-[151.29] w-[80px] sm:w-[150px] m-auto "/>
          <p className="text-rethink text-[14px] sm:text-[28px] text-[#121930] mt-[20px] sm:mt-[40px]">{title}</p>
          <p className="text-rethink text-[8px] sm:text-[16px] text-[#667185]">{content}</p>
          <Link href="Dashboard"><button onClick={handleClick} className="w-[200px] sm:w-[400px] h-[25px] sm:h-[55px] rounded-[8px] bg-[#0059DE] mt-[20px] sm:mt-[40px]">{buttonText}</button></Link>
       </div>
     </div>
    </div>
  )
}


