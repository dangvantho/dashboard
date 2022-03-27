import { useState } from 'react'
import DefaultLayout from './components/layout/Default'
import Global from './styles/Global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Global />
      <DefaultLayout></DefaultLayout>
    </div>
  )
}

export default App
