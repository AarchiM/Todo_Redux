import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () =>
{
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
      <div className='w-full border rounded-lg mt-5'>
          <div className='w-full bg-gray-50 items-center'>
              {
          todos.map((todo) => <div className="w-full flex justify-between" key={todo.id}>
                  <h1 className=' flex flex-grow items-center ml-5'>{todo.todoText}</h1>
                  <button 
                      className='bg-red-400 rounded-lg m-1 px-4 py-2 flex items-end'
                      onClick={()=> dispatch(removeTodo(todo.id))}
                    >
                      Delete
                  </button>
                </div>)
              }
          </div>
    </div>
  )
}

export default Todos