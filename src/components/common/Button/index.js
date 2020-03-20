import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, variant, isDisabled }) => {
  if (isDisabled)
    return (
      <button
        type="button"
        disabled
        className="bg-blue-500 opacity-75 text-white font-bold py-2 px-4 rounded"
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
          : 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent font-semibold'
      } py-2 px-4 rounded`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  variant: 'primary',
  isDisabled: false
}

export default Button
