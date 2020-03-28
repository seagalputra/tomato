import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white border-t bottom-auto">
      <p className="text-center font-semibold">
        {'Created with Love by '}
        <a
          className="hover:text-blue-600"
          href="http://github.com/seagalputra"
          target="_blank"
          rel="noopener noreferrer"
        >
          @seagalputra
        </a>
      </p>
      <div className="text-center text-xs mt-2">
        {'Icons made by '}
        <a
          className="hover:text-blue-600"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>
        {' from '}
        <a
          className="hover:text-blue-600"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
