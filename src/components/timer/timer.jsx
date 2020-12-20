import React, { useEffect } from "react";

const Timer = props => {
  const { setMinute, setSecond, setCounter, minute, second, isActive, counter } = props;

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter, setCounter, setMinute, setSecond]);

  return (
    <div>
      <div>
        <span>{minute}</span>
        <span>:</span>
        <span>{second}</span>
      </div>
    </div>
  );
};

export default Timer;
