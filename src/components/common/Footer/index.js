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
    </footer>
  )
}

export default Footer
