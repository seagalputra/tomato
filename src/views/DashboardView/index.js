import React, { useState, useEffect } from 'react'

import TimerCard from 'components/resources/DashboardView/TimerCard'

import timerImage from 'assets/img/timer.svg'

const getTimer = state => {
  if (state === 'SHORT_BREAK') return 300

  if (state === 'LONG_BREAK') return 900

  return 1500
}

const changeTimerState = currentIteration => {
  if (currentIteration <= 6) {
    if (currentIteration % 2 === 0) return 'FOCUS'

    return 'SHORT_BREAK'
  }

  return 'LONG_BREAK'
}

const DashboardView = () => {
  const [timer, setTimer] = useState(1500)
  const [timerState, setTimerState] = useState('FOCUS')
  const [iteration, setIteration] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const onStartTimer = () => {
    setIsActive(!isActive)
    setIteration(iteration + 1)
  }

  const onStopTimer = state => {
    setTimer(getTimer(state))
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null

    if (isActive) {
      interval = setInterval(() => {
        setTimer(time => time - 1)
      }, 1000)

      if (timer === 0) {
        clearInterval(interval)
        setTimerState(changeTimerState(iteration))
        setIsActive(false)
      }
    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    } else {
      setTimer(getTimer(timerState))
    }

    return () => clearInterval(interval)
  }, [isActive, timer, timerState, iteration])

  return (
    <main>
      <TimerCard
        timer={timer}
        state={timerState}
        onStart={onStartTimer}
        onStop={onStopTimer}
        isActive={isActive}
      />

      <div className="flex flex-col px-6 py-16 border-b">
        <img
          className="w-56 self-center"
          src={timerImage}
          alt="Timer illustration"
        />
        <p className="text-2xl text-center font-bold text-gray-800 mt-4">
          What is Pomodoro?
        </p>
        <div className="mt-3 w-40 self-center border-b-2 border-gray-400" />
        <p className="text-base text-center text-gray-800 mt-6 px-16">
          Pomodoro technique is one of the time management technique. This
          method developed by Francesco Cirillo in late 1980s. This technique
          uses a timer to break down work into intevals, commonly use 25 minutes
          in length, separated by short breaks. Each interval is known as a
          pomodoro, from the italian word from &apos;tomato&apos;, after the
          tomato-shaped kitchen timer that Cirillo used as a university student.
        </p>
      </div>
    </main>
  )
}

export default DashboardView
