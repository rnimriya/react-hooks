import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    useEffect(() => {
      setCount(count+1)
    }, 3000);
  })

  return (
    <>
     <h1>Class Attendence</h1>
     <h2>Roll Number {count}</h2>
    </>
  )
}

export default App
