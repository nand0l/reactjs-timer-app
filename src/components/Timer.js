import React, { useState, memo } from 'react'
import Actions from './Actions'
import Progress from './Progress'

function Timer() {
  const [toggleForm, setToggleForm] = useState(false);
  // Store the input min
  const [timeInput, setTimeInput] = useState(1);
  // convert mins(time) to milliseconds
  const [timeInMilliSeconds, setTimeInMilliSeconds] = useState(0);
  // Store used mins(times)
  const [usedTimes, setUsedTimes] = useState([]);
  // Used for switching start and stop button
  const [countDownStarted, setCountDownStarted] = useState(false);
  // Toggle input form
  function onToggle() {
    setToggleForm(toggle => toggle = !toggleForm);
  }

  // Get time from input and set values
  function handleChange(e) {
    const inputData = parseInt(e.target.value);
    setTimeInput(inputData);
  }

  // start timer 
  const startTimer = () => {
    setCountDownStarted(true);

    // Close the form
    if (toggleForm) {
      setToggleForm(false)
    }

    // set New timer minutes
    setTimeInMilliSeconds(timeInput * 60 * 1000);

    // add time to used times
    setUsedTimes(times => [...times, timeInput]);
  };

  const stopTimer = () => {
    //reset values
    setCountDownStarted(false);
    setTimeInMilliSeconds(0);

    // clear all intervals (last)
    var interval_id = window.setInterval(() => { }, 99999);
    for (var i = 0; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  // get time ahead in milliseconds
  const timeAheadInMilliSeconds = new Date().getTime() + timeInMilliSeconds;

  // calculater animation duration
  const countDownTime = new Date(timeAheadInMilliSeconds).getTime();
  const animationDuration = ((countDownTime - new Date().getTime()) / 1000) / 2;


  return (
    <div className="timer">
      <Progress {...{
        timeInMilliSeconds,
        animationDuration,
        stopTimer,
        countDownStarted,
        countDownTime
      }}
      />

      <Actions {...{
        toggleForm,
        timeInput,
        countDownStarted,
        onToggle,
        handleChange,
        startTimer,
        stopTimer,
        usedTimes,
        setUsedTimes
      }} />
    </div>
  )
}

export default memo(Timer)