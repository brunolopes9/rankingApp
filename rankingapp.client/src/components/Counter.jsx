import { useState } from "react"

export default function Counter() {
  const [currentCount, setCount] = useState(0)

  function incrementCounter() {
    setCount(currentCount + 1)
  }

  function decrementCounter() {
    setCount(currentCount - 1)
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={decrementCounter}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            -
          </button>

          <span className="text-xl font-semibold">{currentCount}</span>

          <button
            onClick={incrementCounter}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}
