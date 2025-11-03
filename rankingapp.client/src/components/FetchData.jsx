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
    <div>
      <h2>Weather Forecast</h2>
      {forecasts.map((item, i) => (
        <p key={i}>
          {item.date} — {item.summary} ({item.temperatureC}°C)
        </p>
      ))}
    </div>
  )
}
