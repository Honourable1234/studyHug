import React from 'react'

export default function Results({subject, date, score}) {
  return (
    <div className="h-[151px] w-[260px] rs:w-[330px] border border-[#E4E7EC] rounded-[14px] shadow p-[15px] mt-[25px] m-auto">
      <p className="text-[16.51] text-[#101928] text-rethink">{subject}</p>
      <p className="text-[12px] text-[#667185] mt-[15px]">Completed on: {date}</p>
      <p className="text-[12px] text-[#667185]">Score: {score}</p>
      <div className="gap-[20px] flex mt-[20px]">
        <button className="text-black text-rethink text-[14px] w-[110px] h-[32px] rounded-[9.44px] border border-[#D0D5DD]">Retake Test</button>
        <button className="text-white text-rethink text-[14px] w-[110px] h-[32px] rounded-[9.44px] bg-[#0059DE]">View Result</button>
      </div>
    </div>
  )
}


