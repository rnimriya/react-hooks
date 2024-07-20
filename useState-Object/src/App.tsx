import { useState } from 'react'
import './App.css'


function App() {
  const [car, setCar] = useState({
     brand: 'Ferari',
     model: "roma",
     year: 2024,
     color: "Red",
  });

  const changeColor = () =>{
    setCar((prev)=>{
      return {...prev, color: "blue"}
    })
  }

  return (
    <>
    <h1>My Car {car.brand}</h1>
    <h2>It is a {car.color} from {car.year}</h2>
    <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
