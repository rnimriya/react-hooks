import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const increaserOder = () => {
    setCount(count + 1)
  };

  const decreaserOder = () => {
    setCount(count - 1)
  };

  return (
    <>
      <div>
          <h1 className='text-4xl mb-8'>Tea Orders {count} Today</h1>
          <button className=' bg-green-600 mr-2 py-2 px-4 text-4xl text-white rounded-sm' onClick={increaserOder}>+</button>
          <button className=' bg-red-600 mr-2 py-2 px-4 text-4xl text-white rounded-sm' onClick={decreaserOder}>-</button>
       </div>
    </>
  )
}

export default App
