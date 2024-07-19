import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  let changeRedColor = () => {
     setColor('Red');
  }

  let changeGreenColor = () => {
    setColor('Green');
 }

  return (
    <>
      <h1>My new car color is {color}</h1>
      <button onClick={(changeGreenColor)}>Green</button>
      <button onClick={(changeRedColor)}>Red</button>
    </>
  )
}

export default App
