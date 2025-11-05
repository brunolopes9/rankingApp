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
      <main>
        <div className="main-content">
          <div className="container mx-auto px-4 mt-10 text-center">
            <h1 className="text-3xl px-2 mx-auto font-bold mb-20 ">Counter</h1>

            <div className="flex items-center gap-4">
              <button
                onClick={decrementCounter}
                className="px-5 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                -
              </button>

              <span className="text-4xl font-semibold">{currentCount}</span>

              <button
                onClick={incrementCounter}
                className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
