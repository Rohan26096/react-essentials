import './App.css'
import { BatchingCounter } from './BatchingCounter'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { PrevStateCounter } from './PrevStateCounter'
import { SimpleCounter } from './SimpleCounter'
import { TodoList } from './ToDoList'
import { UserDashboard } from './UserDashboard'
import { UserProfile } from './UserProfile'

function App() {

  return (
    <div>
      <h2>Codevolution react course</h2>
      {/* <Counter/>
      <LoginCard/>
      <UserDashboard isPremuim={true}/> */}
      {/* <SimpleCounter/> */}
      {/* <PrevStateCounter/> */}
      {/* <BatchingCounter/> */}
      {/* <UserProfile/> */}
      <TodoList/>
    </div>
  )
}

export default App
