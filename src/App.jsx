
import { TodoForm, Todos } from './components'

function App() {

  return (
    <div className=' flex w-full h-screen'>
      <div className='w-3/5 p-14 bg-slate-50 h-screen flex-wrap mx-auto'>
        <TodoForm />
        <Todos />
      </div>
    </div>
  )
}

export default App
