import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { SimpleCounter } from './SimpleCounter'
import { UserDashboard } from './UserDashboard'

function App() {

  return (
    <div>
      <h2>Codevolution react course</h2>
      {/* <Counter/>
      <LoginCard/>
      <UserDashboard isPremuim={true}/> */}
      <SimpleCounter/>
    </div>
  )
}

export default App
