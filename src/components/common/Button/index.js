import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, variant, isDisabled, onClick, className }) => {
  if (isDisabled)
    return (
      <button
        type="button"
        disabled
        className={`bg-blue-500 opacity-75 text-white font-bold py-2 px-4 rounded ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    )

  return (
    <button
      type="button"
      className={`${
        variant === 'primary'
          ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold'
          : 'bg-transparent hover:bg-blue-500 text-white hover:text-white border border-white hover:border-transparent font-semibold'
      } py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  variant: 'primary',
  isDisabled: false
}

export default Button
