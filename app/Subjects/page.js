import React from 'react'
import Image from 'next/image'
import Subject from '../Components/Subject'
import Header3 from '../Components/Header3'
export default function page() {
  return (
    <div>
      <Header3 />
      <div className="pb-[70px] bg-white text-rethink pt-[35px] px-[5%]">
      <h3 className="text-[14px] text-[#101928]">Subjects</h3>
      <p className="text-[10px] text-[#667185]">Choose a subject to start your test journey today.</p>
      <div className="border border-[#E4E7EC] shadow w-full rounded-t-[12px] h-[40px] rs:h-[60px] mt-[20px] px-[10px] items-center justify-between flex max-w-[1010px]">
        <input 
          placeholder='Search for a Subject'
          className="h-[80%] border border-inherit w-[200px] h-[30px] rounded-[8px] px-[14px] text-[11px] rs:text-[14px] text-[#344054]"
        />
        <button className="hidden gap-[4px] text-black rs:flex items-center justify-center w-[84px] h-[36px] rounded-[8px] text-[14px] text-[#344054] border border-inherit">Filter <Image  src="/images/Filter.svg" alt="Filter Logo"width={15} height={15}/></button>
      </div>
      <div className="rounded-b-[12px] min-h-[200px] border border-inherit pt-[20px] pb-[20px] max-w-[1010px]">
          <div className="flex flex-wrap">
            <Subject title="Mathematics"  content="Master algebra, geometry, and more to excel in your exams." imageUrl="/images/Maths.svg"/>
            <Subject title="English"  content="Hone your grammar, vocabulary, and comprehension skills." imageUrl="/images/English.svg"/>
            <Subject title="Physics"  content="Understand the fundamental principles of motion, force, and energy." imageUrl="/images/Physics.svg"/>
            <Subject title="Biology"  content="Explore life processes, genetics, and the human body as a whole." imageUrl="/images/Biology.svg"/>
            <Subject title="Biology"  content="Explore life processes, genetics, and the human body as a whole." imageUrl="/images/Biology.svg"/>
            <Subject title="Biology"  content="Explore life processes, genetics, and the human body as a whole." imageUrl="/images/Biology.svg"/>
          </div>
          <div className="justify-center h-[150px] items-center flex">
            <button className="w-[150px] h-[36px] rounded-[8px] border border-[#C3D0EC] text-[#475367] text-[14px]">See More Subjects</button>
          </div>
      </div>
    </div>
    </div>
  )
}


