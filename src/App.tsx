import { useState } from 'react'
import DefaultLayout from './components/layout/Default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DefaultLayout></DefaultLayout>
    </div>
  )
}

export default App
