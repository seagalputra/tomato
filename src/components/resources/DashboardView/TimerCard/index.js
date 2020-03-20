import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'

const status = {
  FOCUS: 'Focus',
  LONG_BREAK: 'Long Break',
  SHORT_BREAK: 'Short Break'
}

const getMinute = time => {
  return String(Math.floor(time / 60))
}

const getSecond = time => {
  return String(time % 60).padStart(2, '0')
}

const TimerCard = ({ onStart, onStop, state, timer }) => {
  return (
    <div className="flex flex-col p-16 bg-gray-800 border-b">
      <div className="flex justify-center">
        <h1
          className={`${
            state === 'LONG_BREAK' || state === 'SHORT_BREAK'
              ? 'text-green-400'
              : 'text-red-400'
          } font-bold text-xl`}
        >
          {status[state]}
        </h1>
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-white font-bold text-5xl">
          {`${getMinute(timer)} : ${getSecond(timer)}`}
        </p>
      </div>

      <div className="inline-flex justify-center w-auto mt-4">
        <Button className="mr-5" onClick={onStart} variant="primary">
          Start
        </Button>

        <Button onClick={onStop} variant="secondary">
          Stop
        </Button>
      </div>
    </div>
  )
}

TimerCard.propTypes = {
  state: PropTypes.string,
  timer: PropTypes.number.isRequired,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

TimerCard.defaultProps = {
  state: 'FOCUS'
}

export default TimerCard
