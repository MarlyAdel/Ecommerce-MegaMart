import React, { useEffect, useState } from 'react'

export default function Clock() {

   const [days , setDays] = useState();
   const [hours , setHours] = useState();
   const [minutes , setMinutes] = useState();
   const [seconds, setSeconds] = useState();

   let interval;

   function getTime(){
    const destination = new Date("Oct 1, 2025 00:00:00").getTime();

    interval = setInterval(() => {
        const now = new Date().getTime()
        const different = destination - now
        const days = Math.floor(different / (1000 * 60 * 60 * 24))
        const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor((different % (1000 * 60)) / 1000);

        if(destination < 0 ) clearInterval(interval.current)
        
        else{
            setDays(days)
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
    })
   }

   useEffect(() => {
    getTime();
   },[])

  return (
    <div className="clock d-flex align-items-center gap-3">
      <div className="clock-data ">
        <div className="text-center">
          <h1 className="text-white fs-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
      </div>
      <span className="text-white fs-1">:</span>
      <div className="clock-data ">
        <div className="text-center">
          <h1 className="text-white fs-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
      </div>
      <span className="text-white fs-1">:</span>
      <div className="clock-data ">
        <div className="text-center">
          <h1 className="text-white fs-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
      </div>
      <span className="text-white fs-1">:</span>
      <div className="clock-data ">
        <div className="text-center">
          <h1 className="text-white fs-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
}
