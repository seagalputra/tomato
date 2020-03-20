import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'

const status = {
  FOCUS: 'Focus',
  LONG_BREAK: 'Long Break',
  SHORT_BREAK: 'Short Break'
}

const TimerCard = ({ onStart, onStop, state }) => {
  return (
    <div className="flex flex-col border rounded p-6 max-w-md">
      <div className="flex justify-center">
        <h1
          className={`${
            state === 'LONG_BREAK' || state === 'SHORT_BREAK'
              ? 'text-green-600'
              : 'text-red-600'
          } font-bold text-xl`}
        >
          {status[state]}
        </h1>
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-gray-800 font-bold text-5xl">25:00</p>
      </div>

      <div className="inline-flex justify-center w-auto mt-4">
        <Button className="mr-2" onClick={onStart} variant="primary">
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
  state: PropTypes.string.isRequired,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

export default TimerCard
