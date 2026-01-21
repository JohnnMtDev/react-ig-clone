import { useState } from 'react'
import { Card } from './components/card/Card'
import { Header } from './components/Header/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card />
    </>
  )
}

export default App
