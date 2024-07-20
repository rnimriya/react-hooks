import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseNumber = () => {
    setCount (count+5)
  }
  
  return (
    <>
      <h1>useState Example {count}</h1>
      <div className="card">
        <button onClick={increaseNumber}>
          increase by 5
        </button>
      </div>
    </>
  )
}

export default App
