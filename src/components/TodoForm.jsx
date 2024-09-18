import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

const TodoForm = () =>
{
    const dispatch = useDispatch()

    const [text, setText] = useState("");
    const AddTodoHandler = (e) =>
    {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
    }
  return (
      <form onSubmit ={AddTodoHandler} className='flex border rounded-lg'>
          <input
              className='flex-grow ml-3 focus:outline-none'
              type="text"
              placeholder='Enter Todo Here...'
              value={text}
              onChange={(e)=>setText(e.target.value)}
          />  
              
          <button
              type="submit"
              className='bg-green-400 rounded-lg px-4 py-2'
          >
              Add
          </button>
    </form>
  )
}

export default TodoForm