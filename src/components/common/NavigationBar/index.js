import React from 'react'
import tomatoIcon from 'assets/img/icon.svg'

const NavigationBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 border-b">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            className="fill-current h-8 w-8 mr-3"
            src={tomatoIcon}
            width="54"
            alt="Tomato Icon"
          />
          <span className="font-bold text-xl tracking-tight">Tomato</span>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
