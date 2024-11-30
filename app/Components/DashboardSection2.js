import React from 'react';
import Subject from './Subject';
import Results from './Results';
import Image from 'next/image';
export default function Section2() {
  return (
    <div className="bg-[#F7F9FC] pt-[15px] px-[10%] pb-[70px]">
      <div className="hidden sm:grid grid-cols-2 xl:flex">
        <Subject title="Mathematics"  content="Master algebra, geometry, and more to excel in your exams." imageUrl="/images/Maths.svg"/>
        <Subject title="English"  content="Hone your grammar, vocabulary, and comprehension skills." imageUrl="/images/English.svg"/>
        <Subject title="Physics"  content="Understand the fundamental principles of motion, force, and energy." imageUrl="/images/Physics.svg"/>
        <Subject title="Biology"  content="Explore life processes, genetics, and the human body as a whole." imageUrl="/images/Biology.svg"/>
      </div>
      <div className="mt-[20px] hidden sm:flex justify-between mt-[30px] sm:mt-[60px]">
        <div>
         <p className="text-[#101928] text-rethink text-[12px] sm:text-[18px] text-[#101928]">Recent Tests and Results</p>
         <p className="text-[8px] sm:text-[12px] text-rethink text-[#667185]">View your performance and retake tests to sharpen your skills.</p>
        </div>
        <div className="flex gap-[15px]">
         <div className="block rs:flex gap-[12px]">
          <button className="flex justify-center gap-[5px] items-center w-[60px] sm:w-[95px] h-[24px] sm:h-[36px] text-[8px] sm:text-[14px] text-[#1D2739] border border-[#D0D5DD] rounded-[8px]">Sort By <Image src="/images/DropDown.svg" alt="Drop Down Icon" width={16} height={16}/></button>
          <button className="flex justify-center gap-[5px] items-center w-[60px] sm:w-[95px] h-[24px] sm:h-[36px] text-[8px] sm:text-[14px] text-[#1D2739] border border-[#D0D5DD] rounded-[8px] mt-[15px] rs:mt-[0px]">View All <Image src="/images/Right.svg" alt="Pointer Icon" width={16} height={16}/></button>
         </div>
        </div>
       </div>
       <div className="mt-[50px] m-auto hidden sm:flex flex-wrap justify-between">
         <Results subject="Mathematics" date="October 21, 2024" score="85%" />
         <Results subject="Mathematics" date="October 21, 2024" score="85%" />
         <Results subject="Mathematics" date="October 21, 2024" score="85%" />
       </div>
       <div className="h-[170px] sm:h-[114px] w-full border border-[#D4D2E3] mt-[50px] rounded-[24px] p-[15px] sm:flex justify-between sm:items-center shadow">
        <div>
          <p className="text-[#1D2739] text-[12px] sm-[16px] mt-[15px]">Can’t Find What You’re Looking For?</p>
          <p className="text-[#1D2739] text-[12px] sm-[16px]"> Tell us what you need, and we’ll help you out right away.</p>
        </div>
        <button className="bg-[#0059DE] w-[200px] sm:w-[295px] h-[37px] sm:h-[57px] mt-[25px] sm:mt-[0px] rounded-[24px] text-[12px] sm:text-[16px] flex items-center justify-center gap-[10px]">Request a Custom Service <Image src="/images/RightWhite.svg" alt="Pointer Icon" width={16} height={16}/></button>
       </div>
    </div>
  )
}


