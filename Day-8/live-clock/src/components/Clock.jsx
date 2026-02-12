import React, { useEffect, useState } from 'react'

const Clock = () => {
    const[time,setTime] = useState(new Date())
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(interval)
        }

    },[])

    const formatTime = ()=>{
        return time.toLocaleTimeString('en-IN',{
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit',
            hour12:true
        });
    };

    const formatDate = ()=>{
        return time.toLocaleDateString('en-IN',{
            weekday:'long',
            year:'numeric',
            month:'numeric',
            day:'numeric'

        });
    };
  return (
    <div className="clock-container">
        <h1>Live Clock</h1>
        <div className="time-display">{formatTime()}</div>
        <div className="date-display">{formatDate()}</div>
    </div>
  )
}

export default Clock
