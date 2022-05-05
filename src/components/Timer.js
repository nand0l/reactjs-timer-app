import React, { useCallback, useState } from 'react'
import Actions from './Actions'
import Progress from './Progress'

function Timer() {
  const [toggleForm, setToggleForm] = useState(false);
  const [inputMin, setInputMin] = useState(1);
  const [startCountDown, setStartCountDown] = useState(false);
  const [timerMin, setTimerMin] = useState(0);
  const [usedTimes, setUsedTimes] = useState([]);

  // Toggle input form
  function onToggle() {
    setToggleForm(toggle => toggle = !toggleForm);
  }

  // Get form time from input
  function handleChange(e) {
    const inputData = parseInt(e.target.value);
    setInputMin(inputData);
    setTimerMin(0);
  }

  // submit time
  const startTimer = () => {
    setStartCountDown(true);

    if (toggleForm) {
      setToggleForm(false)
    }

    // set New timer minutes
    setTimerMin(inputMin * 60 * 1000);

    // add time to used times
    setUsedTimes(times => [...times, inputMin]);
  };

  const stopTimer = () => {
    setStartCountDown(false);
    setTimerMin(0);

    var interval_id = window.setInterval(() => { }, 99999);
    for (var i = 0; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  const dateWithMins = new Date().getTime() + timerMin;

  const countDownTime = new Date(dateWithMins).getTime();
  const animationDuration = ((countDownTime - new Date().getTime()) / 1000) / 2;

  return (
    <div className="timer">
      <Progress {...{ timerMin, dateWithMins, animationDuration, stopTimer }} />
      <Actions {...{
        toggleForm,
        inputMin,
        startCountDown,
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

export default (Timer)