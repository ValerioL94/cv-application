import { useState } from 'react'
import '/src/styles/App.css'

function App() {
const [status, setStatus] = useState('Test')
  return (
    <div>
      <h1>Test</h1>
      <input onChange={e => setStatus(e.target.value)} type="text" />
      <p>{status}</p>
      </div>
  )
    
}

export default App
