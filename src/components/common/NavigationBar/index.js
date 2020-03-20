import React from 'react'

const NavigationBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 border-b">
        <div className="flex items-center flex-shrink-0 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-3"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tomato Timer
          </span>
        </div>

        <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#beranda"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4"
            >
              Home
            </a>
            <a
              href="#beranda"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600"
            >
              Start Pomodoro
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
