import { useState, useEffect } from "react";

const useCountdown = (targetTime, timerMin) => {
    const countDownTime = new Date(targetTime).getTime();
    const [countDownInMilliSeconds, setCountDown] = useState(countDownTime - new Date().getTime());

    useEffect(() => {
        let interval
        if (timerMin > 0) {
            interval = setInterval(() => {
                const timeDiff = (countDownTime - new Date().getTime()) <= 0;
                if (timeDiff) {
                    clearInterval(interval)
                    return;
                } else {
                    setCountDown(countDownTime - new Date().getTime());
                }
            }, 1000);

            return () => clearInterval(interval);
        } else {
            clearInterval(interval);
        }
    }, [countDownTime, timerMin]);

    return getReturnValues(countDownInMilliSeconds);
};


const getReturnValues = (countDown,) => {

    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};



export { useCountdown };
