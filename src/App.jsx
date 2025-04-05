import { useState } from 'react'
import Logos from './components/logos.component'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logos />
      <Logos />
      <h1>Purva Tatiya </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
