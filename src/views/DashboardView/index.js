import React from 'react'

import TimerCard from 'components/resources/DashboardView/TimerCard'

import timerImage from 'assets/img/timer.svg'

const getMinute = time => {
  return String(Math.floor(time / 60))
}

const getSecond = time => {
  return String(time % 60).padStart(2, '0')
}

const DashboardView = () => {
  const times = {
    minutes: getMinute(1500),
    seconds: getSecond(1500)
  }

  return (
    <main>
      <TimerCard times={times} state="SHORT_BREAK" />

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
