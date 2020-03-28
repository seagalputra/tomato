import React from 'react'

const TodoInput = () => {
  return (
    <form className="w-full p-2">
      <div className="block md:flex items-center">
        <input
          className="appearance-none w-full text-gray-700 mr-3 py-2 px-2 leading-light border border-teal-500 rounded"
          type="text"
          placeholder="To Do"
          aria-label="To Do"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-2 rounded w-full md:w-32 mt-3 md:mt-0"
          type="button"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoInput
