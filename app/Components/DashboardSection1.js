import React from 'react'
import ColouredBox from './ColouredBox'
import Image from 'next/image'
export default function Section1() {
  return (
    <div className=" bg-[#F7F9FC] pt-[15px] px-[10%]">
       <p className="text-rethink text-[8px] sm:text-[11px] lg:text-[16px] text-black ">Welcome</p>
       <p className="italic text-instrument text-[#001432] sm:text-[24px] lg:text-[48px]">Gbolahan Adekola</p>
       <div className="bg-[#F9F9F9] border border-[#E4E7EC] rounded-[12px] shadow mt-[15px] p-[3%] max-w-[1010px]">
        <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-rethink text-[#101928]">Ready, Set, Go</p>
        <p className="text-[#667185] text-[7px] sm:text-[10px] lg:text-[12px]">Everything you need is just a click away—let’s get started!</p>
        <div className="sm:grid grid-cols-2 lg:flex">
           <ColouredBox customStyle="bg-[#FFF7E9F5]" title="Take a Test" content="Dive into your next challenge and sharpen your skills now!" imageUrl="/images/Test.svg"/>
           <ColouredBox customStyle="bg-[#FF03971A]" title="My Subjects" content="Access all your subjects and pick where to start." imageUrl="/images/Book.svg"/>
           <ColouredBox customStyle="bg-[#E7F6ECF5]" title="View Results" content="See your scores, understand your mistakes, and track your progress." imageUrl="/images/Tick.svg"/>
           <ColouredBox customStyle="bg-[#E3EFFCF5]" title="Manage Your Account" content="Update your profile, and customize your preferences." imageUrl="/images/Setting.svg"/>
        </div>
       </div>
       <div className="mt-[20px] hidden sm:flex justify-between mt-[30px] sm:mt-[60px]">
       <div>
         <p className="text-[#101928] text-rethink text-[12px] sm:text-[18px] text-[#101928]">Choose a Subject</p>
         <p className="text-[8px] sm:text-[12px] text-rethink text-[#667185]">Select a subject and begin your test journey.</p>
       </div>
       <div className="flex gap-[15px]">
        <button className="flex justify-center gap-[5px] items-center w-[60px] sm:w-[95px] h-[24px] sm:h-[36px] text-[8px] sm:text-[14px] text-[#1D2739] border border-[#D0D5DD] rounded-[8px]">See All <Image src="/images/Right.svg" alt="Test Icon" width={16} height={16}/></button>
        <div className="hidden sm:flex gap-[7px]">
            <button className="h-[36px] w-[36px] border border-[#98A2B3] rounded-tl-[8px] rounded-bl-[8px]"><Image src="/images/LessThan.svg" alt="Less Than Icon" className="m-auto" width={16} height={16}/></button>
            <button className="h-[36px] w-[36px] border border-[#98A2B3] rounded-tr-[8px] rounded-br-[8px]"><Image src="/images/GreaterThan.svg" alt="Geater Than Icon" className="m-auto" width={16} height={16}/></button>
        </div>
       </div>
       </div>
    </div>
  )
}