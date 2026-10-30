import { useState } from 'react'
import './App.css'
import { StopWatch } from './StopWatch'
import { FocusInput } from './FocusInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      {/* <StopWatch /> */}
      <FocusInput />
    </>
  )
}

export default App
