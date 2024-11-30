import React from 'react'
import Image from 'next/image'
export default function ColouredBox({imageUrl, title, content, customStyle = ''}) {
  return (
    <div className={`w-[222px] h-[142px] m-auto rounded-[12px] mt-[15px] ${customStyle} p-[8px]`}>
      <Image src={imageUrl} alt="Test Icon" width={16} height={16}/>
      <p className="text-[#101928] mt-[50px] flex text-[14px] gap-[5px] text-rethink">{title}<Image src="/images/Pointer.svg" alt="Pointer Icon" width={8} height={8}/></p>
      <p className="text-[10px] text-[#667185] mt-[2px]">{content}</p>
    </div>
  )
}


