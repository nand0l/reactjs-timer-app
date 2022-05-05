import React, { useCallback, useEffect, useState, memo } from 'react'

function Actions({ toggleForm, setToggleForm,
    inputMin, setInputMin,
    startCountDown, setStartCountDown,
    timerMin, setTimerMin,
    onToggle, handleChange,
    startTimer,
    stopTimer }) {

    return (
        <div className="ac-container">
            <div className="btn-container">
                {!startCountDown ?
                    <button onClick={startTimer}>Start</button> :
                    <button onClick={stopTimer}>Stop</button>}
                <button onClick={onToggle}>Set Time</button>
            </div>

            {toggleForm ?
                <div className="input-form">
                    <input type="number" defaultValue={inputMin.toString()} placeholder="enter time" name="time" onChange={handleChange} />
                </div>
                : null}

            <div className="used-container">
                <div className="used-timers">
                    <h2>Most used timers</h2>
                    <ul>
                        <li><button>5 mins</button> </li>
                        <li><button>10 mins</button></li>
                        <li><button>2 mins</button></li>
                        <li><button>2 mins</button></li>
                        <li><button>2 mins</button></li>
                        <li><button>2 mins</button></li>
                    </ul>
                </div>

                <div className="reset">
                    <button>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Actions)