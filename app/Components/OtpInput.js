import React, { useState } from 'react';

export default function OtpInput({ numInputs = 4, onChange }) {
    const [otp, setOtp] = useState(Array(numInputs).fill(''));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);
        if (onChange) onChange(newOtp.join(''));

        if (index < numInputs - 1 && value) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength={1}
                    className='w-[40px] sm:w-[82.52px] h-[37px] sm:h-[76.7px] text-center text-[40px] border focus:outline-none  focus:ring-2 focus:ring-blue-500 rounded-[4.85px] mt-[25px] mx-[15px]'
                />
            ))}
        </div>
    );
}


