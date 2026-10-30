import './App.css'
import { BatchingCounter } from './BatchingCounter'
import { Counter } from './Counter'
import { CounterWithInit } from './CounterWithInit'
import { CounterWithReducer } from './CounterWithReducer'
import { CustomCounter } from './CustomCounter'
import { LoginCard } from './LoginCard'
import { PrevStateCounter } from './PrevStateCounter'
import { ShoppingCart } from './ShoppingCart'
import { ShoppingCartWithReducer } from './ShoppingCartWithReducer'
import { SimpleCounter } from './SimpleCounter'
import { ToDoList } from './TodoList'
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
      {/* <ToDoList/> */}
      {/* <ShoppingCart/> */}
      {/* <CounterWithReducer/> */}
      {/* <ShoppingCartWithReducer/> */}
      {/* <CounterWithInit /> */}
      <CustomCounter />
    </div>
  )
}

export default App
