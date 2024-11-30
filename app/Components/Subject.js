import React from 'react'
import Image from 'next/image'
export default function Subject({imageUrl, title, content}) {
  return (
    <div className="w-[240px] lg:w-[280px] h-[140px] sm:h-[178px] border border-[#E4E7EC] m-auto rounded-[12px] shadow p-[10px] mt-[15px]">
      <Image src={imageUrl} alt="Subject Icon" width={20} height={20}/>
      <p className="text-rethink text-[14px] text-[#101928] mt-[15px] sm:mt-[25px]">{title}</p>
      <p className="text-[#667185] text-[10px]">{content}</p>
      <button className="mt-[5px] sm:mt-[33px] bg-[#0059DE] w-[113px] h-[24px] rounded-[8px] text-[14px] flex gap-[7px] justify-center">Start Test <Image src="/images/PointerWhite.svg" alt="Pointer Icon" width={20} height={20}/></button>
    </div>
  )
}


