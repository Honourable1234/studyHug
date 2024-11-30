import React from 'react'
import Success from '../Components/Success'
export default function page() {
  return (
    <div>
      <Success 
      title="All Done!" 
      content="Your password has been reset. Click on continue to see the next phase" 
      buttonText="Continue"/>
    </div>
  )
}


