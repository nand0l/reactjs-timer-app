import { useState, useEffect } from "react";

const useCountdown = ({ timeInMilliSeconds, countDownStarted, countDownTime }) => {

    const [countDownInMilliSeconds, setCountDown] = useState(countDownTime - new Date().getTime());

    useEffect(() => {
        let interval
        if (timeInMilliSeconds > 0) {
            interval = setInterval(() => {
                setCountDown(countDownTime - new Date().getTime());
            }, 1000);

            return () => clearInterval(interval);
        } else if (!countDownStarted) {
            clearInterval(interval);
        }
    }, [countDownTime, timeInMilliSeconds, countDownStarted]);


    // reset countDownInMilliSeconds to zero
    // if countdown stopped
    useEffect(() => {
        if (!countDownStarted) { setCountDown(0); return }
    }, [countDownStarted])

    return getReturnValues(countDownInMilliSeconds);
};


const getReturnValues = (countDown) => {
    // calculate time left
    // const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    // const hours = Math.floor(
    //     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [minutes, seconds];
};

export { useCountdown };
