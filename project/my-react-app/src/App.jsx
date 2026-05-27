import { useMemo, useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...')

    return count * 1000
  }, [count])

  return (
    <div>
      <Header title="CulturaDev" />

      <p>Count: {count}</p>

      <p>Calculated Value: {expensiveCalculation}</p>

      <button
        onClick={() =>
          setCount((prev) => prev + 1)
        }
      >
        Increase
      </button>

      <button
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default App