import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
  const [windowDimension, setDimension] = useState({width:window.innerWidth, height:30});

  const detectSize = () => {
    setDimension({width:window.innerWidth, height:30})
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  },[windowDimension]);

  return (
    <>
      <ReactConfetti 
        width={windowDimension.width} 
        height={300}
        tweenDuration={4000}
        // colors={['#f44336','#fff']}
        onConfettiComplete
      />
    </>
  )
}

export default Confetti