import { useEffect, useState } from "react"

export default function Weather() {
  const [forecasts, setForecasts] = useState([])

  useEffect(() => {
    fetch("/WeatherForecast")
      .then((res) => res.json())
      .then((forecasts) => setForecasts(forecasts))
      .then((error) => console.error("Error fetching data:", error))
  }, []) // [] ensures this runs once on component mount

  return (
    <main>
      <div className="main-content container mx-auto px-4 mt-10">
        <h2 className="text-center text-3xl font-bold mb-10">
          Weather Forecast
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Summary</th>
                <th className="py-3 px-6 text-left">Temperature</th>
              </tr>
            </thead>

            <tbody>
              {forecasts.map((item, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-blue-50 transition-colors"
                >
                  <td className="py-3 px-6">{item.date}</td>
                  <td className="py-3 px-6">{item.summary}</td>
                  <td className="py-3 px-6">{item.temperatureC}°C</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
