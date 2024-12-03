"use client";
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useLoading } from "../Contexts/loading";

export default function Header() {
  const { startLoading, stopLoading, user } = useLoading();
  const [firstNameInitial, setFirstNameInitial] = useState(null);
  const [lastNameInitial, setLastNameInitial] = useState(null);
  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const firstNameInitial = firstName[0]
    const lastNameInitial = lastName[0]
    setFirstNameInitial(firstNameInitial);
    setLastNameInitial(lastNameInitial);
  }, []);
  
  const handleClick = async () => {
    startLoading();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    stopLoading();
  };


  return (
    <div className="h-[88px] bg-[white] flex border border-[#D0D5DD] items-center">
       <nav className="flex justify-between w-[90%] m-auto">
         <Image 
           src="/images/Logo1.svg"
           alt="Study Hug Logo"
           width={0}
           height={0} 
           className=" h-auto w-[50px] xs:w-[90px] lg:w-[120px] mt-[10px] "/>
      <div className="w-[281px] h-[47px] bg-[#F7F9FC] rounded-[40px] hidden sm:flex text-black text-[14px] justify-between items-center px-[15px]">
        <button className="text-[#0066FF]">Dashboard</button>
        <button>Subjects</button>
        <button className="flex">Test & Result</button>
      </div>
      <div className="flex items-center gap-[10px]">
            <button className="rounded-[20px] bg-[#F0F2F5] flex justify-center items-center w-[40px] h-[40px]"> <Image  src="/images/Bell.svg" alt="Study Hug Logo"  width={20} height={20} />
            </button>
            <button className="rounded-[20px] bg-[#E3EFFCF5] flex justify-center items-center w-[40px] h-[40px] text-[16px] text-[black]">{firstNameInitial}{lastNameInitial}</button>
      </div>
       </nav>
    </div>
  )
}
